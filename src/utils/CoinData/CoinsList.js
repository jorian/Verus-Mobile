import {
  DLIGHT_PRIVATE,
  ELECTRUM,
  GENERAL,
  IS_VERUS,
  IS_ZCASH,
  IS_PBAAS,
  IS_PBAAS_ROOT,
  ETH,
  ERC20,
  WYRE_SERVICE,
  IS_FIAT,
} from "../constants/intervalConstants";
import { dlightServers } from 'agama-wallet-lib/src/dlight-servers';
import {
  DEFAULT_DECIMALS,
  ETHERS,
  FIAT_DECIMALS,
  STABLECOIN_DECIMALS,
} from "../constants/web3Constants";

export const coinsList = {
  vrsc: {
    id: "VRSC",
    currency_id: "",
    system_id: ".vrsc",
    display_ticker: "VRSC",
    display_name: "Verus Coin",
    alt_names: ["verus"],
    theme_color: "#3165D4",
    website: "https://verus.io",
    fee: 10000,
    compatible_channels: [DLIGHT_PRIVATE, ELECTRUM, GENERAL],
    tags: [IS_VERUS, IS_ZCASH, IS_PBAAS, IS_PBAAS_ROOT],
    proto: "vrsc",
    dlight_endpoints: dlightServers.vrsc,
    decimals: DEFAULT_DECIMALS,
  },
  usd: {
    id: "USD",
    currency_id: "usd",
    system_id: ".fiat",
    display_ticker: "USD",
    display_name: "US Dollar",
    alt_names: [],
    theme_color: "#85bb65",
    website: "https://home.treasury.gov",
    compatible_channels: [WYRE_SERVICE],
    tags: [IS_FIAT],
    proto: "fiat",
    decimals: FIAT_DECIMALS,
  },
  aud: {
    id: "AUD",
    currency_id: "aud",
    system_id: ".fiat",
    display_ticker: "AUD",
    display_name: "Australian Dollar",
    alt_names: [],
    theme_color: "#002167",
    website: "https://treasury.gov.au",
    compatible_channels: [WYRE_SERVICE],
    tags: [IS_FIAT],
    proto: "fiat",
    decimals: FIAT_DECIMALS,
  },
  eur: {
    id: "EUR",
    currency_id: "eur",
    system_id: ".fiat",
    display_ticker: "EUR",
    display_name: "Euro",
    alt_names: [],
    theme_color: "#003399",
    website: "https://www.ecb.europa.eu/home/html/index.en.html",
    compatible_channels: [WYRE_SERVICE],
    tags: [IS_FIAT],
    proto: "fiat",
    decimals: FIAT_DECIMALS,
  },
  kmd: {
    id: "KMD",
    display_name: "Komodo",
    alt_names: [],
    currency_id: "",
    system_id: ".kmd",
    display_ticker: "KMD",
    theme_color: "#2B6680",
    website: "https://komodoplatform.com/en/",
    fee: 10000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [IS_ZCASH],
    proto: "btc",
    decimals: DEFAULT_DECIMALS,
  },
  btc: {
    id: "BTC",
    currency_id: "",
    system_id: ".btc",
    display_ticker: "BTC",
    display_name: "Bitcoin",
    alt_names: [],
    theme_color: "#F7931B",
    website: "https://bitcoin.org/en/",
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [],
    proto: "btc",
    decimals: DEFAULT_DECIMALS,
  },
  // testnet: {
  //   id: "TESTNET",
  //   currency_id: "",
  //   system_id: ".btc",
  //   display_ticker: "tBTC",
  //   display_name: "Testnet BTC",
  //   alt_names: [],
  //   theme_color: "#F7931B",
  //   website: "https://bitcoin.org/en/",
  //   compatible_channels: [ELECTRUM, GENERAL],
  //   tags: [],
  //   proto: "btc",
  //   decimals: DEFAULT_DECIMALS,
  // },
  eth: {
    id: "ETH",
    currency_id: "",
    system_id: ".eth",
    display_ticker: "ETH",
    display_name: "Ethereum",
    alt_names: [],
    theme_color: "#141C30",
    website: "https://ethereum.org/en/",
    compatible_channels: [ETH, GENERAL],
    dominant_channel: ETH,
    tags: [],
    proto: "eth",
    decimals: ETHERS,
  },
  bat: {
    id: "BAT",
    currency_id: "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
    system_id: ".eth",
    display_ticker: "BAT",
    display_name: "Basic Attention Token",
    alt_names: [],
    theme_color: "#FB542B",
    website: "https://basicattentiontoken.org/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: "erc20",
  },
  // tst: {
  //   id: "TST",
  //   currency_id: '0x722dd3F80BAC40c951b51BdD28Dd19d435762180',
  //   system_id: '.eth',
  //   display_ticker: 'TST',
  //   display_name: "ERC20 Test Token",
  //   website: "",
  //   compatible_channels: [ERC20, GENERAL],
  //   dominant_channel: ERC20,
  //   decimals: ETHERS,
  //   tags: [],
  //   proto: 'erc20'
  // },
  yfi: {
    id: "YFI",
    currency_id: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
    system_id: ".eth",
    display_ticker: "YFI",
    display_name: "yearn.finance",
    alt_names: [],
    theme_color: "#0A6AE3",
    website: "https://yearn.finance/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: "erc20",
  },
  link: {
    id: "LINK",
    currency_id: "0x514910771af9ca656af840dff83e8264ecf986ca",
    system_id: ".eth",
    display_ticker: "LUNK",
    display_name: "ChainLink",
    alt_names: [],
    theme_color: "#375BD2",
    website: "https://chain.link/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: "erc20",
  },
  uni: {
    id: "UNI",
    currency_id: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
    system_id: ".eth",
    display_ticker: "UNI",
    display_name: "Uniswap",
    alt_names: [],
    theme_color: "#FF007A",
    website: "https://uniswap.org/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: "erc20",
  },
  ven: {
    id: "VEN",
    currency_id: "0xd850942ef8811f2a866692a623011bde52a462c1",
    system_id: ".eth",
    display_ticker: "VEN",
    display_name: "VeChain",
    alt_names: [],
    theme_color: "#33A4F1",
    website: "https://www.vechain.org/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: "erc20",
  },
  bnt: {
    id: "BNT",
    currency_id: "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c",
    system_id: ".eth",
    display_ticker: "BNT",
    display_name: "Bancor",
    alt_names: [],
    theme_color: "#000D2B",
    website: "https://app.bancor.network/eth/data",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: "erc20",
  },
  rfox: {
    id: "RFOX",
    currency_id: "0xa1d6Df714F91DeBF4e0802A542E13067f31b8262",
    system_id: ".eth",
    display_ticker: "RFOX",
    display_name: "RedFOX Labs",
    alt_names: [],
    theme_color: "#D73937",
    website: "https://www.redfoxlabs.io/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: "erc20",
  },
  bal: {
    id: "BAL",
    currency_id: "0xba100000625a3754423978a60c9317c58a424e3d",
    system_id: ".eth",
    display_ticker: "BAL",
    display_name: "Balancer",
    alt_names: [],
    theme_color: "#1E1E1E",
    website: "https://balancer.finance/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: "erc20",
  },
  zrx: {
    id: "ZRX",
    currency_id: "0xe41d2489571d322189246dafa5ebde1f4699f498",
    system_id: ".eth",
    display_ticker: "ZRX",
    display_name: "0x",
    alt_names: [],
    theme_color: "#000000",
    website: "https://0x.org/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: "erc20",
  },
  hot: {
    id: "HOT",
    currency_id: "0x6c6ee5e31d828de241282b9606c8e98ea48526e2",
    system_id: ".eth",
    display_ticker: "HOT",
    display_name: "HoloToken",
    alt_names: [],
    theme_color: "#08838D",
    website: "https://holochain.org/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: "erc20",
  },
  nexo: {
    id: "NEXO",
    currency_id: "0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206",
    system_id: ".eth",
    display_ticker: "NEXO",
    display_name: "Nexo",
    alt_names: [],
    theme_color: "#1E4DD8",
    website: "https://nexo.io/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: "erc20",
  },
  dai: {
    id: "DAI",
    currency_id: "0x6b175474e89094c44da98b954eedeac495271d0f",
    system_id: ".eth",
    display_ticker: "DAI",
    display_name: "Dai",
    alt_names: [],
    theme_color: "#F5AC37",
    website: "https://makerdao.com/en/",
    compatible_channels: [ERC20, GENERAL, WYRE_SERVICE],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: "erc20",
  },
  oot: {
    id: "OOT",
    currency_id: "oot",
    system_id: ".kmd",
    display_ticker: "OOT",
    display_name: "Utrum",
    alt_names: [],
    theme_color: "#24AAE1",
    website: "https://utrum.io/",
    fee: 10000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [IS_ZCASH],
    proto: "btc",
    decimals: DEFAULT_DECIMALS,
  },
  ccl: {
    id: "CCL",
    currency_id: "ccl",
    system_id: ".kmd",
    display_ticker: "CCL",
    display_name: "CoinCollect",
    alt_names: [],
    website: "https://coincollect.cc/",
    fee: 10000,
    theme_color: "#36AFF3",
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [IS_ZCASH],
    proto: "btc",
    decimals: DEFAULT_DECIMALS,
  },
  doge: {
    id: "DOGE",
    currency_id: "",
    system_id: ".doge",
    display_ticker: "CCL",
    display_name: "Dogecoin",
    alt_names: [],
    theme_color: "#BB9F32",
    website: "https://dogecoin.com/",
    fee: 100000000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [],
    proto: "btc",
    decimals: DEFAULT_DECIMALS,
    max_fee_rate_per_byte: 1000000,
  },
  dgb: {
    id: "DGB",
    currency_id: "",
    system_id: ".dgb",
    display_ticker: "DGB",
    display_name: "Digibyte",
    alt_names: [],
    theme_color: "#0866CC",
    website: "https://digibyte.io/en-gb/",
    fee: 100000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [],
    proto: "btc",
    decimals: DEFAULT_DECIMALS,
  },
  bch: {
    id: "BCH",
    currency_id: "",
    system_id: ".bch",
    display_ticker: "BCH",
    display_name: "Bitcoin Cash",
    alt_names: [],
    website: "https://bch.info/en/",
    fee: 10000,
    theme_color: "#8CC351",
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [],
    proto: "btc",
    decimals: DEFAULT_DECIMALS,
  },
  zec: {
    id: "ZEC",
    currency_id: "",
    system_id: ".zec",
    display_ticker: "ZEC",
    display_name: "Zcash",
    alt_names: [],
    theme_color: "#000000",
    website: "https://z.cash/",
    fee: 10000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [IS_ZCASH],
    proto: "btc",
    dlight_endpoints: dlightServers.zec,
    decimals: DEFAULT_DECIMALS,
  },
  dash: {
    id: "DASH",
    currency_id: "",
    system_id: ".dash",
    display_ticker: "DASH",
    theme_color: "#0D8DE4",
    display_name: "Dash",
    alt_names: [],
    website: "https://www.dash.org/",
    fee: 10000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [],
    proto: "btc",
    decimals: DEFAULT_DECIMALS,
  },
  ltc: {
    id: "LTC",
    currency_id: "",
    system_id: ".ltc",
    display_ticker: "LTC",
    display_name: "Litecoin",
    alt_names: [],
    theme_color: "#345D9D",
    website: "https://litecoin.org/",
    fee: 30000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [],
    proto: "btc",
    decimals: DEFAULT_DECIMALS,
  },
  zilla: {
    id: "ZILLA",
    currency_id: "zilla",
    system_id: ".kmd",
    display_ticker: "ZILLA",
    display_name: "ChainZilla",
    alt_names: [],
    theme_color: "#111126",
    website: "https://chainzilla.io/",
    fee: 10000,
    compatible_channels: [ELECTRUM, GENERAL],
    tags: [IS_ZCASH],
    proto: "btc",
    decimals: DEFAULT_DECIMALS,
  },
  usdt: {
    id: "USDT",
    currency_id: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    system_id: ".eth",
    display_ticker: "USDT",
    display_name: "Tether",
    alt_names: [],
    theme_color: "#50AF95",
    website: "https://tether.to",
    compatible_channels: [ERC20, GENERAL, WYRE_SERVICE],
    dominant_channel: ERC20,
    decimals: STABLECOIN_DECIMALS,
    tags: [],
    proto: "erc20",
  },
  usdc: {
    id: "USDC",
    currency_id: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    system_id: ".eth",
    display_ticker: "USDC",
    display_name: "USDC",
    alt_names: [],
    theme_color: "#4E4E50",
    website: "https://www.centre.io/usdc",
    compatible_channels: [ERC20, GENERAL, WYRE_SERVICE],
    dominant_channel: ERC20,
    decimals: STABLECOIN_DECIMALS,
    tags: [],
    proto: "erc20",
    rate_url_params: { coin_paprika: "usdc-usd-coin" },
  },
  aave: {
    id: "AAVE",
    currency_id: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
    system_id: ".eth",
    display_ticker: "AAVE",
    display_name: "AAVE",
    alt_names: [],
    theme_color: "#B6509E",
    website: "https://aave.com/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: "erc20",
    rate_url_params: { coin_paprika: "aave-new" },
  },
  crv: {
    id: "CRV",
    currency_id: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    system_id: ".eth",
    display_ticker: "CRV",
    display_name: "Curve DAO Token",
    alt_names: [],
    theme_color: "#000000",
    website: "https://www.curve.fi/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: "erc20",
    rate_url_params: { coin_paprika: "crv-curve-dao-token" },
  },
  sushi: {
    id: "SUSHI",
    currency_id: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
    system_id: ".eth",
    display_ticker: "SUSHI",
    display_name: "SushiToken",
    alt_names: [],
    theme_color: "#0e0f23",
    website: "https://sushi.com/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: "erc20",
    rate_url_params: { coin_paprika: "sushi-sushi" },
  },
  mkr: {
    id: "MKR",
    currency_id: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    system_id: ".eth",
    display_ticker: "MKR",
    display_name: "Maker",
    alt_names: [],
    theme_color: "#1AAB9B",
    website: "https://makerdao.com/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: ETHERS,
    tags: [],
    proto: "erc20"
  },
  wbtc: {
    id: "WBTC",
    currency_id: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    system_id: ".eth",
    display_ticker: "wBTC",
    display_name: "Wrapped BTC",
    alt_names: [],
    theme_color: "#282137",
    website: "https://wbtc.network/",
    compatible_channels: [ERC20, GENERAL],
    dominant_channel: ERC20,
    decimals: DEFAULT_DECIMALS,
    tags: [],
    proto: "erc20",
    rate_url_params: { coin_paprika: "wbtc-wrapped-bitcoin" },
  },
};