import React, { useState, useEffect } from 'react';

import './FoodJoke.scss';

import { getFoodJoke } from '../../services/Recipes';

export const FoodJoke = () => {
  const [foodJoke, setFoodJoke] = useState('');

  useEffect(() => {
    getFoodJoke().then(data => {
      setFoodJoke(data);
    });
  }, []);

  return (
    <div className="FoodJoke">
      {foodJoke}
    </div>
  )
};

export default FoodJoke;
