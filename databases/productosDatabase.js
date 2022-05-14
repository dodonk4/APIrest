const productos = [
    {
        id: `${Date.now()}`,
        title: 'Jabón',
        price: 20,
        thumbnail: 'https://t1.uc.ltmcdn.com/es/posts/6/8/3/como_hacer_jabon_de_rosa_mosqueta_23386_orig.jpg'
    },
    {
        id: `${Date.now()}`,
        title: 'Toalla',
        price: 50,
        thumbnail: 'https://media.istockphoto.com/photos/white-folded-towel-picture-id811401940'
    }
];

const databaseProductos = {
    obtenerTodos: ()=>{
        return [...productos];
    },
    obtenerPorId: id =>{
        const productoBuscado = productos.find(p => p.id === id);
        if (!productoBuscado) {
            const error = new Error('producto no encontrado');
            throw error;
        }else{
            return productoBuscado;
        }
        
    },
    crearProducto: datos => {
        const productoACrear = datos;
        productoACrear.id = `${Date.now()}`;
        productos.push(productoACrear);
        return productoACrear;

    },
    borrarProducto: id => {
        const productoBuscado = productos.findIndex(p => p.id === id);
        if (productoBuscado === -1) {
            const error = new Error('producto no encontrado');
            throw error;
        }else{
            productos.splice(productoBuscado, 1);
        }
        
    },
    reemplazar: (id, datos) => {
        const productoBuscado = productos.findIndex(p => p.id === id)
        if (productoBuscado === -1) {
            const error = new Error('producto no encontrado');
            throw error;
        }else{
            const producto = datos;
            producto.id = id;
            productos[productoBuscado] = producto;
            return producto;
        }
        
    }
};



module.exports = databaseProductos;