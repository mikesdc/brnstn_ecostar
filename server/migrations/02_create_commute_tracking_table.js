/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('commute_tracking', (table) => {
      table.increments('id').primary();
      table
        .integer('user_id')
        .unsigned()
        .references('users.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .dateTime("date").defaultTo(knex.fn.now(6));
      table
        .string("start_location").notNullable();
      table
        .string("end_location").notNullable();
      table
        .float("distance");
      table
        .string("commute_mode");
      table
        .float("co2_saved");
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('commute_tracking');
  };
  