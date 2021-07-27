import WyreProvider from "../services/WyreProvider"
import { WYRE_SERVICE } from "./intervalConstants"

export const WYRE_SERVICE_ID = 'wyre_service'

export const CONNECTED_SERVICE_DISPLAY_INFO = {
  [WYRE_SERVICE_ID]: {
    title: "Wyre",
    description: "Connecting your wallet with Wyre allows you to seamlessly convert between cryptocurrency and fiat"
  }
}

export const CONNECTED_SERVICE_CHANNELS = {
  [WYRE_SERVICE_ID]: WYRE_SERVICE
}

export const CONNECTED_SERVICE_PROVIDERS = {
  [WYRE_SERVICE_ID]: WyreProvider
}

export const CONNECTED_SERVICES = [WYRE_SERVICE_ID]