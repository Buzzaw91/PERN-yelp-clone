import React from 'react';

import Header from '../components/Header';
import AddRestaurant from '../components/AddRestaurant';
import RestaurantList from '../components/RestaurantList';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <AddRestaurant />
      <RestaurantList />
    </React.Fragment>
  );
}

export default Home;
