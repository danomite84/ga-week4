const express = require('express');
const app = express();

// method GET
app.get('/somedata', (req, res) => {
    res.send('here is your requested data');
});

app.get('/about', (req, res) => {
    res.send('this page is all about me');
});



app.listen(3000, () => {
    console.log('App is listening on port 3000'); //sanity check. 
});
// these 3 lines created a server for port 3000
