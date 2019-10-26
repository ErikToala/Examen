'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductosSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.string('codigo',50).notNullable().unique().index()
      table.string('nombre',50).notNullable()
      table.float('precio')
      table.integer('cantidad')
      table.string('marca',50).notNullable()
      table.integer('proveedor_id').unsigned().references('id').inTable('proveedors')
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductosSchema
