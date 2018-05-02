var express = require('express');
var router = express.Router();
var dummyController = require('../controllers/dummy.controller.js');

router.get('/dummy', dummyController.dummyMessage);

/* GET home page. */
router.get('/', (req, res, next) => {
  res.status(200);
  res.json({message: 'Working!'});
});

module.exports = router;
