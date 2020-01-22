
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vinNumber: 84739506918273485, make: 'Ford', model: 'Mustang', mileage: 45897, title :'clean'},
        {vinNumber: 48392059483920195, make: 'Porsche', model: '911', mileage: 28594, title :''},
        {vinNumber: 47584919204957684, make: 'Fiat', model: '124 Spider', mileage: 758490, title :'salvaged'},
      ]);
    });
};
