import React from 'react';

const StarRating = ({ rating }) => {
  const stars = [];


  for (let i = 1; i <= 5; i++) {
    let rand = Math.ceil(Math.random() * 100);
    if (i <= rating) {
      stars.push(<i key={i + rand} className="fas fa-star text-warning"></i>);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<i key={i + rand} className="fas fa-star-half-alt text-warning"></i>)
    } else {
      stars.push(<i key={i + rand} className="far fa-star text-warning"></i>);
    }
  }

  return <>{stars}</>
}

export default StarRating;
