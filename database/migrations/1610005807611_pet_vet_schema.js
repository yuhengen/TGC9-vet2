'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PetVetSchema extends Schema {
  up () {
    this.create('pet_vet', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('pet_vet')
  }
}

module.exports = PetVetSchema
