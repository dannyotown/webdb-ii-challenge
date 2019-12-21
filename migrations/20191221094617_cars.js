exports.up = async function(knex) {
  await knex.schema.createTable("cars", table => {
    table.increments("ID");
    table
      .string("VIN")
      .notNull()
      .unique(),
      table.string("make").notNull(),
      table.string("model").notNull(),
      table.float("mileage").notNull(),
      table.text("transmissionType"),
      table.text("titleStatus");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars");
};
