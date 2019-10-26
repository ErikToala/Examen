'use strict'

const Product = use('App/Models/Producto')

class ProductoController {

    async index ({ request, response, view }) {
        
        let producto = await Product.all()
        return response.json(producto)
    
    
    }

    async store({ request, response, view }) {
        const nuevoProducto = new Product(); 
        nuevoProducto.codigo = request.input('codigo');
        nuevoProducto.nombre = request.input('nombre');
        nuevoProducto.precio = request.input('precio');
        nuevoProducto.cantidad = request.input('cantidad');
        nuevoProducto.marca = request.input('marca');
        nuevoProducto.proveedor_id = request.input('proveedor_id');
        await nuevoProducto.save();
        
    
    
    }

    async update({ params, request, response }) {
        
        const editarProducto = await Product.find(params.id);
        editarProducto.codigo = request.input('codigo');
        editarProducto.nombre = request.input('nombre');
        editarProducto.precio = request.input('precio');
        editarProducto.cantidad = request.input('cantidad');
        editarProducto.marca = request.input('marca');
        editarProducto.proveedor_id = request.input('proveedor_id');
        await editarProducto.save();
        
        
    }

    async destroy ({ params, request, response}) {

        const productoId = await Product.find(params.id);
        await productoId.delete();
        return response.json(productoId);
        
        
      }


}

module.exports = ProductoController
