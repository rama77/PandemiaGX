const Web3 = require('web3');
const EthereumTx = require('ethereumjs-tx');
const solc = require('solc');
const fs = require('fs');

const provider = 'https://rinkeby.infura.io/v3/2331a8e7d2f6477caf84d15714ec2d9b';
const web3 = new Web3(provider);

const address1 = '0xE7777A90d554DF52f9E35E9FE80921f4a4eE0424';
const address2 = '0xb93E2b84EC974d1731FD9784A1d90eD76CA78BE8';

const address1Key = new Buffer.from('323A98BB606C28EFA6F26FD19EBDB9348E44369AE1A6D5A3CC4F86E51337540F','hex');
const address2Key = new Buffer.from('AEB1845DFB351CDED27ABBF7785497ADAC3DF4EDB1ECBFADE91F10B3F63713D4','hex');

const content = fs.readFileSync('./contracts/communityfactory.sol').toString();

const objectSolc = {
    language: 'Solidity',
    sources: {
        'CommunityFactory': {
            content: content
        }
    },
    settings: {
        outputSelection: {
            '*':{
                '*': [ '*']
            }
        }
    }
}
const output = JSON.parse(solc.compile(JSON.stringify( objectSolc)));

const bytecodeContract = output.contracts.CommunityFactory.CommunityFactory.evm.bytecode.object

web3.eth.getTransactionCount(address1,(err,txCount) => {
    let txObject = {
        nonce: web3.utils.toHex(txCount),
        gasPrice: web3.utils.toHex(web3.utils.toWei('2','gwei')),
        gasLimit: web3.utils.toHex(1000000),
        to: null,
        data: '0x' + bytecodeContract
    }
    let tx = new EthereumTx(txObject);
    tx.sign(address1Key);
    serializedTx = tx.serialize().toString('hex');

    web3.eth.sendSignedTransaction('0x' + serializedTx).on('receipt', receipt  => {
        console.log("Contrato subido: " + receipt.contractAddress  );
    })

})

//0x91bfc517fc12d4d62b3b52aaf727fafde77600cd