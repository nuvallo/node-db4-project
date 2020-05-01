exports.seed = function (knex) {
  return knex("recipes").insert([
    { recipeName: "Cereal" },
    { recipeName: "Hamburgers" },
    { recipeName: "Scrambled eggs" },
  ]);
};
