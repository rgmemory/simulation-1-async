const bodyParser = require('body-parser');
const express = require('express');
const massive = require('massive');
const controller = require('./controller')
require('dotenv').config();
//shelf






const app = express();


massive(process.env.CONNECTION_STRING).then(db => {
    console.log('db works')
    app.set('db', db);
})



app.get('/api/shelves', controller.getShelves)

app.get('/api/shelf/:id', controller.getShelf)

app.get('/api/getbin/:shelf_id/:bin_id', controller.getBin)

app.listen(3005, () => {
    console.log("working on 3005");
})