exports.up = async function (knex) {
  await knex.schema.createTable("recipes", (table) => {
    table.increments("id");
    table.string("recipeName", 30).notNullable().unique();
  });

  await knex.schema.createTable("ingredients", (table) => {
    table.increments("id");
    table.string("ingredientName", 30).notNullable();
    table.integer("quantity", parseFloat(3)).notNullable();
    table.integer("recipeId").references("recipes.Id");
  });

  await knex.schema.createTable("steps", (table) => {
    table.increments("id");
    table.string("recipeStep", 128);
    table.integer("recipeId").references("recipes.Id");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("steps");
  await knex.schema.dropTableIfExists("ingredients");
  await knex.schema.dropTableIfExists("recipes");
};
