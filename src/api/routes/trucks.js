const express = require('express');
const trucks = require('../services/trucks');

const router = new express.Router();

/**
 * Gets all trucks
 */
router.get('/', async (req, res, next) => {
  const id = req.body.id || '2'
  try {
    const result = await trucks.getTrucks(2);
    console.log('we should have the somethinf~!~~' + result);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
