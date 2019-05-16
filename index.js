// installed on node_modules folder
const express = require('express');
const account = require('./accounts.js')
const crypto = require('crypto');

// initializing the app
const app = express();

// the main route of our app
app.get('/createAccount', (request, response) => {
    const newaccount = account.createAccount();
    console.log("nueva cuenta: " + newaccount);
    response.send(newaccount);
});
app.get('/privateKeyToAccount', (request, response) => {
    
    const secret = request.query.privateKey;
    const privateKey = '0x' + crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');
    //console.log(privateKey);

    const newaccount = account.privateKeyToAccount(privateKey);
    response.send(newaccount);
});

// bootstraping the app
app.listen(3000, () => {
  console.log('Express app started on port 3000');
});
