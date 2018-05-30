
exports.up = (knex, Promise) => {
  return knex.schema.createTable('books', (table) => {
    table.increments();
    table.string('title');
    table.string('author');
    table.integer('pages');
    table.timestamps(true, true);
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('books');
};
