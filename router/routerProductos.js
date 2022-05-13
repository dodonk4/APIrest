const express = require('express');
const Router = require('express');

const controladorProductos = require('../controladores/controladorProductos.js');

const routerApiProductos = new Router();

routerApiProductos.use(express.json());
routerApiProductos.use(express.urlencoded({ extended: true }));

routerApiProductos.get('/api/productos', controladorProductos.getAll);
routerApiProductos.get('/api/productos/:id', controladorProductos.getById)


module.exports = routerApiProductos;