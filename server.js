const http = require('http');

const routerProductos = require('./router/routerProductos.js');
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    console.log('Hola');
    res.send('hola');
});


app.use(routerProductos);

const PORT = 8080;
const server = app.listen(PORT, () =>{
    console.log(`Escuchando en puerto ${server.address().port}`)
});
server.on('error', error => { console.log(error.message) });
