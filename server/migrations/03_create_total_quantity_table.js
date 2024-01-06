/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('total_quantity', (table) => {
      table.increments('id').primary();
      table
        .float("total_distance");
      table
        .float("total_co2_saved");
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('total_quantity');
  };
  