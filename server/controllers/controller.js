const db = require('../db');

module.exports.getRestaurants = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM restaurants;");
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: {
        restaurant: results.rows
      }
    });
  }
  catch (error) {
    console.log(error);
  }
};

module.exports.getOneRestaurant = async (req, res) => {
  const param = req.params.id;
  try {
    const results = await db.query(`SELECT * FROM restaurants WHERE id = $1;`, [param]);
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: {
        restaurant: results.rows[0]
      }
    });
  }
  catch (error) {
    console.log(error);
  }
};

module.exports.createRestaurant = async (req, res) => {
  const data = req.body;
  try {
    const results = await db.query(`
    INSERT INTO restaurants (name, location, price_range)
     values ($1, $2, $3) returning *`, [data.name, data.location, data.price_range]);
    res.status(201).json({
      status: 'success',
      data: {
        restaurant: results.rows[0]
      }
    });
  }

  catch (err) {
    console.log(err);
  }
};

module.exports.updateRestaurant = async (req, res) => {
  const param = req.params.id;
  const data = req.body;
  try {
    const results = await db.query(`
    UPDATE restaurants
    SET name=$1, location=$2, price_range=$3 WHERE id = $4 returning *`,
      [data.name, data.location, data.price_range, param]
    );
    res.status(200).json({
      status: 'success',
      data: {
        restaurant: results.rows[0]
      }
    });
  }
  catch (err) {
    console.log(err);
  }
};

module.exports.deleteRestaurant = async (req, res) => {
  const param = req.params.id;
  try {
    const results = await db.query(`
    DELETE FROM restaurants WHERE id = $1 returning *
    `, [param]);
    res.status(200).json({
      status: 'success',
      data: {
        restaurant: results.rows[0]
      }
    });
  }
  catch (err) {
    console.log(err);
  }
};
