'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProveedorsSchema extends Schema {
  up () {
    this.create('proveedors', (table) => {
      table.increments()
      table.string('nombre',50).notNullable()
      table.string('apellido',50).notNullable()
      table.string('correo',50).notNullable().unique().index()
      table.timestamps()
    })
  }

  down () {
    this.drop('proveedors')
  }
}

module.exports = ProveedorsSchema
