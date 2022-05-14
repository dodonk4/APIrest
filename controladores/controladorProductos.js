const databaseProductos = require('../databases/productosDatabase.js');
const productosDatabase = require('../databases/productosDatabase.js');

const controladoresApi = {
    getAll: (req, res) => {
        res.json(productosDatabase.obtenerTodos());
    },
    getById: (req, res) =>{
        const id = req.params.id;
        res.json(databaseProductos.obtenerPorId(id))
    },
    create: (req, res) =>{
        res.json(databaseProductos.crearProducto(req.body));
    },
    borrar: (req, res) =>{
        const id = req.params.id;
        try {
            databaseProductos.borrarProducto(id);
            res.sendStatus(204);
        } catch (error) {
                res.json({ error: error.message });
        }
    },
    replace: (req, res) =>{
        const id = req.params.id;
        const datos = req.body;
        try {
            const productoReemplazado = databaseProductos.reemplazar(id, datos)
            res.json(productoReemplazado)
        } catch (error) {
                res.json({ error: error.message })
        }
    }
};



module.exports = controladoresApi;