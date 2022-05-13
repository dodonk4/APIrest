const productosDatabase = require('../databases/productosDatabase.js');

const controladoresApi = {
    getAll: (req, res) => {
        res.json(productosDatabase.getAll)
    }
};

module.exports = controladoresApi;