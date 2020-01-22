const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  add,
  update,
  remove
}

function find() {
  return db('cars');
}

function findById(id) {
  return db('cars').where({ id }).first();
}

function add(newCar) {
  return db('cars').insert(newCar);
}

function update(id, newInfo) {
  return db('cars').where({ id }).update(newInfo);
}


function remove(id) {
  return db('cars').where({ id }).del();
}