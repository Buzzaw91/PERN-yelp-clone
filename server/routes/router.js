const { Router } = require('express');
const controller = require('../controllers/controller');

const router = Router();

router.get('/api/v1/restaurants', controller.getRestaurants);

router.get('/api/v1/restaurants/:id', controller.getOneRestaurant);

router.post('/api/v1/restaurants', controller.createRestaurant);

router.put('/api/v1/restaurants/:id', controller.updateRestaurant);

router.delete('/api/v1/restaurants/:id', controller.deleteRestaurant);


module.exports = router;
