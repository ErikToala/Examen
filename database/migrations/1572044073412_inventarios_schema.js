'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InventariosSchema extends Schema {
  up () {
    this.create('inventarios', (table) => {
      table.increments()
      table.integer('producto_id').unsigned().references('id').inTable('productos')
      table.date('fecha')
      table.timestamps()
    })
  }

  down () {
    this.drop('inventarios')
  }
}

module.exports = InventariosSchema
