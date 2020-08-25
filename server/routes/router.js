const { Router } = require('express');

const router = Router();

router.get('/api/v1/restaurants', (req, res) => {
  res.status(200);

});

router.get('/api/v1/restaurants:id', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      restaurant: 'mcdonalds'
    }
  });
});

router.post('/api/v1/restaurants', (req, res) => {
  res.status(201).json({
    status: 'success',
    data: {
      restaurant: 'mcdonalds'
    }
  });
});

router.put('/api/v1/restaurants:id', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      restaurant: 'mcdonalds'
    }
  });
})

router.delete('/api/v1/restaurants:id', (req, res) => {

});


module.exports = router;
