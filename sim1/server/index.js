const bodyParser = require('body-parser');
const express = require('express');
const massive = require('massive');
require('dotenv').config();


//shelf

const app = express();


massive(process.env.CONNECTION_STRING).then(db => {
    console.log('db works')
    app.set('db', db);
})

app.get('/get', function(req, res){
    req.app.get('db').getshelf().then(shelf => {
        res.send(shelf);
    })
})

app.listen(3005, () => {
    console.log("working on 3005");
})