import {preflight} from './preflight';
import {coinsToSats, satsToCoins, truncateDecimal} from '../../../../math';
import BigNumber from 'bignumber.js';
import {requestPrivKey} from '../../../../auth/authBox';
import {getAddressUtxos} from './getAddressUtxos';
import {
  script,
  opcodes,
  OptCCParams,
  TransactionBuilder,
  networks,
  Transaction,
  TxDestination,
  address as addressUtils,
  ECPair,
} from '@bitgo/utxo-lib';
import {getInfo} from './getInfo';
import coinSelect from 'coinselect';
import { VRPC } from '../../../../constants/intervalConstants';
import { sendRawTransaction } from './sendRawTransaction';

export const buildTx = async (
  coinObj,
  activeUser,
  address,
  amount,
  params,
  channelId,
) => {
  const network = networks['verus'];

  let keyPair;

  try {
    const spendingKey = await requestPrivKey(coinObj.id, VRPC);
    keyPair = ECPair.fromWIF(spendingKey, network);
  } catch (e) {
    throw new Error(
      'Cannot spend transaction because user priv keys failed to decrypt.',
    );
  }

  const preflightRes = await preflight(
    coinObj,
    activeUser,
    address,
    amount,
    params,
    channelId,
  );

  if (preflightRes.err) throw new Error(preflightRes.result);
  else {
    const {
      fee: defaultFee,
      value,
      toAddress,
      fromAddress,
      params
    } = preflightRes.result;
    let inputValueSats = BigNumber(0)

    let utxos;
    const valueSats = BigNumber(
      truncateDecimal(coinsToSats(BigNumber(value)), coinObj.decimals),
    );
    const feeSats = BigNumber(
      truncateDecimal(coinsToSats(BigNumber(defaultFee)), coinObj.decimals),
    );

    const utxoRes = await getAddressUtxos(coinObj, [fromAddress]);
    const infoRes = await getInfo(coinObj);

    if (infoRes.error) throw new Error(infoRes.error.message);
    if (utxoRes.error) throw new Error(utxoRes.error.message);

    utxos = [];

    function pushUtxo(utxo) {
      utxos.push({
        value: utxo.satoshis,
        script: utxo.script,
        txid: utxo.txid,
        vout: utxo.outputIndex,
      });
    }

    for (const utxo of utxoRes.result) {
      const _script = script.decompile(Buffer.from(utxo.script, 'hex'));

      if (
        _script.length === 4 &&
        _script[1] === opcodes.OP_CHECKCRYPTOCONDITION &&
        _script[3] === opcodes.OP_DROP
      ) {
        const master = OptCCParams.fromChunk(_script[0]);
        const params = OptCCParams.fromChunk(_script[2]);

        if (
          params.isValid() &&
          master.isValid() &&
          params.evalCode === 0 &&
          master.evalCode === 0
        ) {
          pushUtxo(utxo);
        } else continue;
      } else pushUtxo(utxo);
    }

    let targets = [
      {
        address: toAddress,
        value: valueSats.plus(feeSats).toNumber(),
      },
    ];

    let {inputs, outputs} = coinSelect(utxos, targets, 0);

    if (!outputs) {
      throw new Error(
        'Insufficient funds. Failed to calculate acceptable transaction amount with fee of ' +
          defaultFee +
          '.',
      );
    }

    // TODO: Map coinObj id to network name in networks object
    const txb = new TransactionBuilder(network);

    txb.setVersion(4);
    txb.setExpiryHeight(
      Number(
        BigNumber(infoRes.result.longestchain).plus(BigNumber(100)).toString(),
      ),
    );
    txb.setVersionGroupId(0x892f2085);

    for (const input of inputs) {
      const {txid, vout, script, value} = input;
      inputValueSats = inputValueSats.plus(BigNumber(value))

      txb.addInput(
        txid,
        vout,
        Transaction.DEFAULT_SEQUENCE,
        Buffer.from(script, 'hex'),
      );
    }

    const addr = addressUtils.fromBase58Check(address);

    const outMaster = new OptCCParams(3, 0, 0, 0);
    const outParams = new OptCCParams(3, 0, 1, 1, [
      new TxDestination(
        addr.version === 102
          ? new TxDestination().typeID
          : new TxDestination().typePKH,
        addr.hash,
      ),
    ]);

    const outputScript = script.compile([
      outMaster.toChunk(),
      opcodes.OP_CHECKCRYPTOCONDITION,
      outParams.toChunk(),
      opcodes.OP_DROP,
    ]);

    let actualFeeSats = inputValueSats.minus(valueSats)

    if (actualFeeSats.isLessThanOrEqualTo(BigNumber(0))) {
      throw new Error(`Cannot send transaction with fee of ${satsToCoins(actualFeeSats).toString()}.`)
    } else if (actualFeeSats.isGreaterThan(feeSats)) {
      // If fee > target fee, create change output
      const selfAddr = addressUtils.fromBase58Check(fromAddress);
      const changeSats = actualFeeSats.minus(feeSats)
      actualFeeSats = actualFeeSats.minus(changeSats)

      const changeMaster = new OptCCParams(3, 0, 0, 0);
      const changeParams = new OptCCParams(3, 0, 1, 1, [
        new TxDestination(
          selfAddr.version === 102
            ? new TxDestination().typeID
            : new TxDestination().typePKH,
          selfAddr.hash,
        ),
      ]);

      const changeOutputScript = script.compile([
        changeMaster.toChunk(),
        opcodes.OP_CHECKCRYPTOCONDITION,
        changeParams.toChunk(),
        opcodes.OP_DROP,
      ]);

      txb.addOutput(changeOutputScript, changeSats.toNumber());
    }

    txb.addOutput(outputScript, valueSats.toNumber());
    txb.sign(
      0,
      keyPair,
      null,
      Transaction.SIGHASH_ALL,
      inputValueSats.toNumber(),
    );

    const tx = txb.build();

    return tx.toHex();
  }
};

export const send = async (
  coinObj,
  activeUser,
  address,
  amount,
  params,
  channelId,
) => {
  try {
    const txHex = await buildTx(
      coinObj,
      activeUser,
      address,
      amount,
      params,
      channelId,
    );
    const sendRes = await sendRawTransaction(coinObj, txHex);

    if (sendRes.error) throw new Error(sendRes.error.message);
    else {
      return {
        err: false,
        result: {
          txid: sendRes.result
        },
      };
    }
  } catch (e) {
    return {
      err: true,
      result: e.message,
    };
  }
};