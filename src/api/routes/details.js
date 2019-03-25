const express = require('express');
const details = require('../services/details');

const router = new express.Router();

/**
 * Get truck details based on truck id
 */
router.get('/', async (req, res, next) => {
  const options = {
    id: req.query['id']
  };

  try {
    const result = await details.getDetails(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
