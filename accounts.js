const Web3 = require('web3');


const provider = 'https://rinkeby.infura.io/v3/2331a8e7d2f6477caf84d15714ec2d9b';
const web3 = new Web3(provider);

function createAccount(){
    const account = web3.eth.accounts.create();
    console.log(account);
    return account;
}

function privateKeyToAccount(privateKey){
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    console.log(account);
    return account;
}

exports.createAccount = createAccount;
exports.privateKeyToAccount = privateKeyToAccount;



