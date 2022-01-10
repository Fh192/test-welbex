const Router = require('express');
const router = new Router();
const citiesController = require('../controllers/cities.controller');

router.get('/cities', citiesController.getCities);

module.exports = router;
