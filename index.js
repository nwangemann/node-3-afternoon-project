require('dotenv').config();
const express = require('express');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const app = express();
const ctrl = require('./controller/products_controller')
app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set("db", db)
    console.log('connected to db')
}).catch(err => {
    console.log(err)
})

app.get('/api/products', ctrl.getAll);
app.get(`/api/products/:id`, ctrl.getOne);
app.put(`/api/products/:id`, ctrl.update);
app.post(`/api/products`, ctrl.create);
app.delete(`/api/products/:id`, ctrl.delete);

app.listen(SERVER_PORT, () => console.log(`Servin up some heat on Port ${SERVER_PORT}`))