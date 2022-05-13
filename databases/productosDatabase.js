const productos = [
    {
        id: 1,
        title: 'Jabón',
        price: 20,
        thumbnail: 'https://t1.uc.ltmcdn.com/es/posts/6/8/3/como_hacer_jabon_de_rosa_mosqueta_23386_orig.jpg'
    },
    {
        id: 2,
        title: 'Toalla',
        price: 50,
        thumbnail: 'https://media.istockphoto.com/photos/white-folded-towel-picture-id811401940'
    }
];

const databaseProductos = {
    obtenerTodos: ()=>{
        return [...productos]
    }
};

module.exports = databaseProductos;