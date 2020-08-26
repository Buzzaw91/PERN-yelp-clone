import React, { useState } from 'react';

const AddRestaurant = () => {
  const [name, setName] = useState('');
  const [location, setlocation] = useState('');
  const [priceRange, setPriceRange] = useState('Price Range');

  return (
    <div className="mb-4">
      <form action>
        <div className="form-row">
          <div className="col">
            <input
              value={name} onChange={e => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="col">
            <input
              value={location}
              onChange={e => setlocation(e.target.value)}
              type="text"
              className="form-control"
              placeholder="location"
            />
          </div>
          <div className="col">
            <select
              className="custom-select my-1 mr-sm-2"
              value={priceRange}
              onChange={e => setPriceRange(e.target.value)}
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
            <button className="btn btn-primary">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddRestaurant;
