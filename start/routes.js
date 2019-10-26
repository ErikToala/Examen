'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')


Route.get('proveedor','ProveedorController.index')

//añadir proveedor
Route.post('proveedor/create', 'ProveedorController.store')

//Editar Proveedor
Route.put('proveedor/editar/:id', 'ProveedorController.update')


//Eliminar proveedor
Route.get('proveedor/eliminar/:id','ProveedorController.destroy')

//----------------------------------------------------------------

Route.get('productos','ProductoController.index')

//añadir producto
Route.post('productos/create', 'ProductoController.store')

//Editar Producto
Route.put('productos/editar/:id', 'ProductoController.update')


//Eliminar producto
Route.get('productos/eliminar/:id','ProductoController.destroy')


//----------------------------------------------------------------

Route.get('inventarios','InventarioController.index')

//añadir inventario
Route.post('inventarios/create', 'InventarioController.store')

//Editar inventario
Route.put('inventarios/editar/:id', 'InventarioController.update')


//Eliminar inventario
Route.get('inventarios/eliminar/:id','InventarioController.destroy')

