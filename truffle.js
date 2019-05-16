var HDWalletProvider = require('truffle-hdwallet-provider')

var mnemonic = 'gafas fértil pegar salero rienda dieta anuncio casero moneda goteo opuesto naranja'
var publicNode = 'https://public-node.testnet.rsk.co:443'

module.exports = {
  networks: {
    rsk: {
      provider: () =>
        new HDWalletProvider(mnemonic, publicNode),
      network_id: '*',
      gas: 2500000,
      gasPrice: 183000
    },
    development: {host: "localhost",port: 4444,network_id: "*" },
    ganache: {host: "localhost",port: 7545,network_id: "*" }
  }
}