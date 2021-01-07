'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OwnerSchema extends Schema {
  up() {
    this.create('owners', (table) => {
      table.increments()
      table.string('firstname', 254).notNullable()
      table.string('lastname', 254).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('owners')
  }
}

module.exports = OwnerSchema
