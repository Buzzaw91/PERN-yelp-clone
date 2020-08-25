const db = require('../db');
const { response } = require('express');

module.exports.getRestaurants = async (req, res) => {
  res.status(200);

  try {
    await db.query("SELECT * FROM restaurants;")
      .then(response => console.log(response.fields, response.rows, response.rowCount))
  }
  catch (error) {
    console.log(error);
  }
};

module.exports.getOneRestaurant = async (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      restaurant: 'mcdonalds'
    }
  });
};

module.exports.createRestaurant = async (req, res) => {
  res.status(201).json({
    status: 'success',
    data: {
      restaurant: 'mcdonalds'
    }
  });
};

module.exports.updateRestaurant = async (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      restaurant: 'mcdonalds'
    }
  });
};

module.exports.deleteRestaurant = async (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      restaurant: 'mcdonalds'
    }
  });
};
