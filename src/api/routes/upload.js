const express = require('express');
const upload = require('../services/upload');

const router = new express.Router();

/**
 * Truck uploads by users or truck sellers
 */
router.post('/', async (req, res, next) => {
  const options = {
    truck: req.body['truck']
  };

  try {
    const result = await upload.postUpload(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
