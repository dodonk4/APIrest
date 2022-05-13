const productosDatabase = require('../databases/productosDatabase.js');

const controladoresApi = {
    getAll: (req, res) => {
        res.json(productosDatabase.obtenerTodos)
    }
};

module.exports = controladoresApi;