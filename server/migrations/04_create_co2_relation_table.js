/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('co2_relation', (table) => {
      table.increments('id').primary();
      table
        .string("mode");
      table
        .float("co2_saved_per_km");
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('co2_relation');
  };
  