const databaseProductos = require('../databases/productosDatabase.js');
const productosDatabase = require('../databases/productosDatabase.js');

const controladoresApi = {
    getAll: (req, res) => {
        res.json(productosDatabase.obtenerTodos());
    },
    getById: (req, res) =>{
        const id = req.params.id;
        res.json(databaseProductos.obtenerPorId(id))
    }
};



module.exports = controladoresApi;