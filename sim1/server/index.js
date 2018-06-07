const bodyParser = require('body-parser');
const express = require('express');
const massive = require('massive');
const controller = require('./controller')
require('dotenv').config();
//shelves

const app = express();

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(db => {
    console.log('db works')
    app.set('db', db);
})

app.get('/api/shelf/:id', controller.getShelf)

app.get('/api/getbin/:shelf_id/:bin_id', controller.getBin)

app.put('/api/edit/:shelf_id/:bin_id', controller.editBin)

app.post('/api/add/:shelf_id/:bin_id', controller.addItem)

app.delete('/api/delete/:shelf_id/:bin_id', controller.deleteItem)

app.listen(3005, () => {
    console.log("working on 3005");
})