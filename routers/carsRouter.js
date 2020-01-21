const express = require('express');
const knex = require('knex');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './data/car-dealer.db3'
  },
  useNullAsDefault: true
});

const router = express.Router();

//GET Request -> Read on cars-table
router.get('/', (req, res) => {
  db('cars')
    .then(car => {
      console.log('Car GET Success!', car)
      res.status(200).json(car);
    })
    .catch(err => {
      res.status(500).json({ message: 'Fallied to get info' });
    });
});

//POST Request -> Create on cars-table

module.exports = router;