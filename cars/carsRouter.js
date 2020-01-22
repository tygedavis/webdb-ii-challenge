const express = require('express');
const knex = require('knex');

const Cars = require('./cars-model');

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
  Cars.find()
    .then(car => {
      //console.log('Car GET Success!', car)
      res.status(200).json(car);
    })
    .catch(err => {
      res.status(500).json({ error: 'Fallied to get info' });
    });
});

//POST Request -> Create on cars-table
router.post('/', (req, res) => {
  Cars.add(req.body)
    .then(newCar => {
      console.log("New Car entry Success!", newCar);
      res.status(201).json(newCar);
    })
    .catch(err => {
      //console.log(err);
      res.status(500).json({ error: "Failed to post new car" });
    });
});

//PUT Request -> Update car on cars-table
router.put('/:id', (req, res) => {
  const id = req.params.id;

  Cars.findById(id)
    .then(car => {
      if(car){
      Cars.update(id, req.body)
        .then(updatedCar => {
          res.status(200).json(updatedCar);
        })
      } else {
        res.status(404).json({ error: "Car not found" });
      };
    })
    .catch(err => {
      res.status(500).json({ error: "Could not update the car info" });
    });
});

//DELETE Request -> Delete car on cars-table
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Cars.remove(id)
    .then(deleted => {
      res.status(200).json(deleted);
    })
    .catch(err => {
      res.status(500).json({ error: "Could not delete car info" });
    });
});

module.exports = router;