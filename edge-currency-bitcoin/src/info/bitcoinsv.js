// @flow

import type { EngineCurrencyInfo } from '../engine/currencyEngine.js'
import type { NetworkInfo } from '../utils/bcoinUtils/types.js'
import type { EdgeCurrencyInfo } from '../utils/flowTypes.js'
import { imageServerUrl } from './constants.js'

const bcoinInfo: NetworkInfo = {
  type: 'bitcoinsv',
  magic: 0xd9b4bef9,
  supportedBips: [44, 32],
  keyPrefix: {
    privkey: 0x80,
    xpubkey: 0x0488b21e,
    xprivkey: 0x0488ade4,
    xpubkey58: 'xpub',
    xprivkey58: 'xprv',
    coinType: 145
  },
  addressPrefix: {
    pubkeyhash: 0x00,
    scripthash: 0x05,
    cashAddress: 'bitcoincash'
  },
  replayProtection: {
    SIGHASH_FORKID: 0x40,
    forcedMinVersion: 1,
    forkId: 0
  }
}

const engineInfo: EngineCurrencyInfo = {
  network: 'bitcoinsv',
  currencyCode: 'BSV',
  gapLimit: 10,
  maxFee: 1000000,
  defaultFee: 10000,
  feeUpdateInterval: 60000,
  customFeeSettings: ['satPerByte'],
  simpleFeeSettings: {
    highFee: '20',
    lowFee: '3',
    standardFeeLow: '5',
    standardFeeHigh: '10',
    standardFeeLowAmount: '1000000',
    standardFeeHighAmount: '65000000'
  }
}

const currencyInfo: EdgeCurrencyInfo = {
  // Basic currency information:
  currencyCode: 'BSV',
  currencyName: 'Bitcoin SV',
  pluginName: 'bitcoinsv',
  denominations: [
    { name: 'BSV', multiplier: '100000000', symbol: '₿' },
    { name: 'mBSV', multiplier: '100000', symbol: 'm₿' },
    { name: 'cash', multiplier: '100', symbol: 'ƀ' }
  ],

  // Configuration options:
  defaultSettings: {
    customFeeSettings: ['satPerByte'],
    electrumServers: [
      'electrum://bch.electrumx.cash:50001',
      'electrums://bch.electrumx.cash:50002',
      'electrums://satoshi.vision.cash:50002',
      'electrum://sv1.hsmiths.com:60003',
      'electrums://sv1.hsmiths.com:60004',
      'electrum://electrumx-sv.1209k.com:50001',
      'electrums://electrumx-sv.1209k.com:50002',
      'electrum://electroncash.cascharia.com:50001',
      'electrums://electroncash.cascharia.com:50002'
    ],
    disableFetchingServers: false
  },
  metaTokens: [],

  // Explorers:
  blockExplorer: 'https://bsvexplorer.info/#/block/%s',
  addressExplorer: 'https://bsvexplorer.info/#/address/%s',
  transactionExplorer: 'https://bsvexplorer.info/#/tx/%s',

  // Images:
  symbolImage: `${imageServerUrl}/bitcoinsv-logo-solo-64.png`,
  symbolImageDarkMono: `${imageServerUrl}/bitcoinsv-logo-solo-64.png`
}

export const bitcoinsv = { bcoinInfo, engineInfo, currencyInfo }
