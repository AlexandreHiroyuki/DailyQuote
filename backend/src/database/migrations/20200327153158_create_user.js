exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.string('id').primary()
    table.string('greet').notNullable()
    table.string('signature').notNullable()
    table.string('email').notNullable()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('users')
}
