const db = require('../db');

module.exports.getRestaurants = async (req, res) => {
  try {
    // const results = await db.query("SELECT * FROM restaurants;");
    const restaurantRatingsData = await db.query(`
    SELECT * FROM restaurants LEFT JOIN (SELECT restaurant_id, COUNT(*), trunc(AVG(rating),1) AS average_rating FROM reviews
    GROUP BY restaurant_id) reviews ON restaurants.id = reviews.restaurant_id;
    `);
    res.status(200).json({
      status: 'success',
      results: restaurantRatingsData.rows.length,
      data: {
        restaurant: restaurantRatingsData.rows
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
    const restaurant = await db.query(`
    SELECT * FROM restaurants LEFT JOIN (SELECT restaurant_id, COUNT(*), trunc(AVG(rating),1) AS average_rating FROM reviews
    GROUP BY restaurant_id) reviews ON restaurants.id = reviews.restaurant_id WHERE id = $1;
    `, [param]);

    const reviews = await db.query(`SELECT * FROM reviews WHERE restaurant_id = $1;`, [param]);

    res.status(200).json({
      status: 'success',
      results: restaurant.rows.length,
      data: {
        restaurant: restaurant.rows[0],
        reviews: reviews.rows
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
    res.status(204).json({
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

module.exports.addReview = async (req, res) => {
  const param = req.params.id;
  const data = req.body;
  try {
    const newReview = await db.query(`INSERT INTO reviews (
      restaurant_id,
      name,
      review,
      rating
    )
    values(
      $1,
      $2,
      $3,
      $4
    ) returning * `, [param, data.name, data.review, data.rating]);
    console.log(newReview);
    res.status(201).json({
      status: 'success',
      data: {
        review: newReview.rows[0]
      }
    })

  } catch (err) {
    console.log(err);
  }

};
