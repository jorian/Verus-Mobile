import { makeDlightRequest } from '../callCreators'
import { DLIGHT_PRIVATE_SEND_PRIVATE_TX } from '../../../../constants/dlightConstants'
import { preflightPrivateTransaction } from './preflightPrivateTransaction'
import { coinsToSats } from '../../../../math'
import BigNumber from 'bignumber.js'
import { DLIGHT_PRIVATE } from '../../../../constants/intervalConstants'

// Sends a private transaction with given parameters
export const sendPrivateTransaction = async (coinObj, activeUser, address, amount, params) => {
  const coinId = coinObj.id
  const accountHash = activeUser.accountHash
  const coinProto = coinObj.proto

  //TODO: Change spending key source to user keys, after parsing seed into extended spending key
  //at the moment this only works if your seed is an extended spending key
  const spendingKey = activeUser.seeds[DLIGHT_PRIVATE]
  
  try {
    const preflight = await preflightPrivateTransaction(coinObj, activeUser, address, amount, params);

    if (preflight.err) throw new Error(err.result)
    else {
      let params = [coinsToSats(BigNumber(preflight.result.value)).toString(), preflight.result.toAddress, spendingKey]

      if (preflight.result.fromAddress != null) params.push(preflight.result.fromAddress)
      if (preflight.result.memo != null) params.push(preflight.result.memo)
    
      return makeDlightRequest(coinId, accountHash, coinProto, 0, DLIGHT_PRIVATE_SEND_PRIVATE_TX, params)
    }
  } catch(e) {
    return {
      err: true,
      result: e.message
    }
  }
}

