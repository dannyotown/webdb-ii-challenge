exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("cars").truncate();
  await knex("cars").insert([
    {
      VIN: "12AB34CD",
      make: "Dodge",
      model: "Challenger",
      mileage: 11111,
      transmissionType: "Manual",
      titleStatus: "Clean"
    },
    {
      VIN: "56DBHG21",
      make: "Nissan",
      model: "Altima",
      mileage: 68903,
      transmissionType: "Manual",
      titleStatus: "Clean"
    },
    {
      VIN: "123BC567",
      make: "Dodge",
      model: "Charger",
      mileage: 22222,
      transmissionType: "Automatic"
    },
    {
      VIN: "12356BC7",
      make: "Chrysler",
      model: "300C",
      mileage: 50000,
      transmissionType: "Automatic"
    }
  ]);
};
