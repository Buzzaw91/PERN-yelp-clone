import React, { useEffect, useContext } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';
import { useHistory } from 'react-router-dom';
import StarRating from './StarRating';

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  let history = useHistory()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get('/');
        setRestaurants(response.data.data.restaurant);
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const deleteHandler = async (e, id) => {
    e.stopPropagation();
    const response = await RestaurantFinder.delete(`/${id}`);
    setRestaurants(restaurants.filter(restaurant => {
      return restaurant.id !== id;
    }));
  };

  const updateHandler = (e, id) => {
    e.stopPropagation();
    history.push(`/restaurants/${id}/update`);
  };

  const selectRestaurantHandler = (id) => {
    history.push(`/restaurants/${id}`);
  };

  const renderRating = (restaurant) => {

    if (!restaurant.count) {
      return <span className="text-warning">0 Reviews</span>
    }
    return (
      <>
        <StarRating rating={restaurant.average_rating} />
        <span className="text-warning ml-1">{restaurant.count}</span>
      </>
    );
  }

  return (
    <div className="list-group">
      <table className="table table-dark table-hover">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants && restaurants.map(restaurant => {
            return (
              <tr onClick={() => { selectRestaurantHandler(restaurant.id) }} key={restaurant.id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{"$".repeat(restaurant.price_range)}</td>
                <td>{renderRating(restaurant)}</td>
                <td><button onClick={(e) => updateHandler(e, restaurant.id)} className="btn btn-warning">Update</button></td>
                <td><button onClick={(e) => deleteHandler(e, restaurant.id)} className="btn btn-danger">Delete</button></td>
              </tr>
            );
          })}
          {/* <tr>
            <td>McDonalds</td>
            <td>New York</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Hesburger</td>
            <td>Helsinki</td>
            <td>$$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default RestaurantList;
