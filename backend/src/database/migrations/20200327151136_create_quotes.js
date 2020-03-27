exports.up = function(knex) {
  return knex.schema.createTable('quotes', table => {
    table.increments()
    table.string('title').notNullable()
    table.string('msg').notNullable()

    table.string('user_sign').notNullable()
    table.string('user_id').notNullable()

    table
      .foreign('user_id')
      .references('id')
      .inTable('users')
    table
      .foreign('user_sign')
      .references('signature')
      .inTable('users')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('quotes')
}
