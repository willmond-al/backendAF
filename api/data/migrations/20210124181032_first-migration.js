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
      tbl.string("instructorcode")
    })
    .createTable("classes", tbl => {
        tbl.increments()
        tbl.string("name").notNullable()
        tbl.string("intensity")
        tbl.string("time").notNullable()
        tbl.string("duration").notNullable()
        tbl.string("location").notNullable()
        tbl.integer("instructor").notNullable()
        .unsigned()
        .references("id")
        .inTable("instructors")
        .onDelete("RESTRICT")
        .onUpdate('CASCADE')
        tbl.integer("classMember")
        .unsigned()
        .references("id")
        .inTable("clients")
        .onDelete("RESTRICT")
        .onUpdate('CASCADE')
    })
}

exports.down = async (knex) => {
  await knex.schema
  .dropTableIfExists("classes")
  .dropTableIfExists("instructors")
  .dropTableIfExists("clients")
  .dropTableIfExists('userw')
}
