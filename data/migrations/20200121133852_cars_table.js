
exports.up = function(knex) {
  //REMEMBER THE RETURN
  return knex.schema.createTable('cars', tbl => {
    //ID Column -> Primary ID
    tbl.increments();
    //VIN # -> Number | Unique | Required
    tbl.integer('vinNumber', 17).unique().notNullable();
    //Make -> Text | Required
    tbl.text('make').notNullable();
    //Model -> Text | Required
    tbl.text('model').notNullable();
    //Mileage -> Number | Required
    tbl.integer('mileage').notNullable();
    //Title -> Text | Optional
    tbl.text('title');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
