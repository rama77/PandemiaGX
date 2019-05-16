const express = require('express');
// initializing the app
const app = express();

app.get('*', (request, response) => {
    
    const urlTarget = request.url;
    console.log(request)
    //response.send(urlTarget);
    response.redirect('http://www.genexus.com')
});

// bootstraping the app
app.listen(3000, () => {
  console.log('Express app started on port 3000');
});
