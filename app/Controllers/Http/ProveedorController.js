'use strict'

const Proveer = use('App/Models/Proveedor')

class ProveedorController {

    async index ({ request, response, view }) {
        
        let provedor = await Proveer.all()
        return response.json(provedor)
    
    
    }

    async store({ request, response, view }) {
        const nuevoProveedor = new Proveer(); 
        nuevoProveedor.nombre = request.input('nombre');
        nuevoProveedor.apellido = request.input('apellido');
        nuevoProveedor.correo = request.input('correo');
        await nuevoProveedor.save();
        
    
    
    }

    async update({ params, request, response }) {
        
        const editarProveedor = await Proveer.find(params.id);
        editarProveedor.nombre = request.input('nombre')
        editarProveedor.apellido = request.input('apellido')
        editarProveedor.correo = request.input('correo')
        await editarProveedor.save();
        
        
    }

    async destroy ({ params, request, response}) {

        const provedorId = await Proveer.find(params.id);
        await provedorId.delete();
        return response.json(provedorId);
        
        
      }


}

module.exports = ProveedorController
