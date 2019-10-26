'use strict'

const Invent = use('App/Models/Inventario')

class InventarioController {
    async index ({ request, response, view }) {
        
        let inventario = await Invent.all()
        return response.json(inventario)
    
    
    }

    async store({ request, response, view }) {
        const nuevoInventario = new Invent(); 
        nuevoInventario.producto_id = request.input('producto_id');
        nuevoInventario.fecha = request.input('fecha');
        await nuevoInventario.save();
        
    
    
    }

    async update({ params, request, response }) {
        
        const editarInventario = await Invent.find(params.id);
        editarInventario.producto_id = request.input('producto_id');
        editarInventario.fecha = request.input('fecha');
        await editarInventario.save();
        
        
    }

    async destroy ({ params, request, response}) {

        const inventarioId = await Invent.find(params.id);
        await inventarioId.delete();
        return response.json(inventarioId);
        
        
      }

}

module.exports = InventarioController
