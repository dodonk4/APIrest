const express = require('express');
const Router = express();

const controladorProductos = require('../controladores/controladorProductos.js');

const routerApiProductos = new Router();

routerApiProductos.use(express.json());
routerApiProductos.use(express.urlencoded({ extended: true }));

routerApiProductos.get('/api/productos', controladorProductos.getAll);

module.exports = routerApiProductos;