const express = require('express');
const controller = require('./controller.js');

const router = express.Router();

router
  .route('/todos')
  .get(controller.get)
  .post(controller.post);

router
  .route('/todos/:_id')
  .delete(controller.delete)
  .put(controller.put);

module.exports = router;
