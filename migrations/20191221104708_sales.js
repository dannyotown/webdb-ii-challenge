exports.up = async function(knex) {
  await knex.schema.createTable("sales", table => {
    table
      .integer("id")
      .unsigned()
      .notNull();
    table
      .foreign("ID")
      .references("ID")
      .inTable("cars"),
      table
        .integer("cost")
        .notNull()
        .unsigned(),
      table.date("date").notNull();
  });
};

exports.down = function(knex) {};
