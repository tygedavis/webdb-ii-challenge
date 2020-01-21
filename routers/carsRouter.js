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
      res.status(500).json({ error: 'Fallied to get info' });
    });
});

//POST Request -> Create on cars-table
router.post('/', (req, res) => {
  db('cars').insert(req.body)
    .then(newCar => {
      console.log("New Car entry Success!", newCar);
      res.status(201).json(newCar);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to post new car" });
    });
});

//PUT Request -> Update car on cars-table
router.put('/:id', (req, res) => {
  db('cars').where({ id: req.params.id}).update(req.body)
    .then(updated => {
      res.status(200).json(updated)
    })
    .catch(err => {
      res.status(500).json({ error: "Could not update the car info" });
    });
});

//DELETE Request -> Delete car on cars-table

module.exports = router;