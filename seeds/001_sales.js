exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("sales").truncate();
  await knex("sales").insert([
    {
      ID: 1,
      cost: 20000,
      date: "12/21/2019"
    }
  ]);
};
