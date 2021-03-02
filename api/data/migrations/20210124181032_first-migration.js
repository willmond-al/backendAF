exports.up = async (knex) => {
  await knex.schema
    .createTable("clients", tbl => {
      tbl.increments()
      tbl.string("username").notNullable().unique()
      tbl.string("password").notNullable()
    })
    .createTable("instructors", tbl => {
      tbl.increments()
      tbl.string("username").notNullable().unique()
      tbl.string("password").notNullable()
    })
    .createTable("classes", tbl => {
        tbl.increments()
        tbl.string("name").notNullable()
        tbl.string("intensity")
        tbl.string("time").notNullable()
        tbl.string("duration").notNullable()
        tbl.string("location").notNullable()
        // tbl.integer("instructor")
        // .unsigned()
        // .references("instructors.id")
        // .inTable("instructors")
        // .onDelete("CASCADE")
        // .onUpdate('CASCADE')
        // tbl.integer("classMember")
        // .unsigned()
        // .references("clients.id")
        // .inTable("clients")
        // .onDelete("CASCADE")
        // .onUpdate('CASCADE')
  
    })
}

exports.down = async (knex) => {
  await knex.schema
  .dropTableIfExists("classes")
  .dropTableIfExists("instructors")
  .dropTableIfExists("clients")
  .dropTableIfExists('userw')
}
