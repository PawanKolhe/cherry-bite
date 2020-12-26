import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Home.scss';

import Category from '../../components/Category/Category';

export const Home = () => {
  const [holidayRecipies, setHolidayRecipies] = useState({
    results: []
  });

  useEffect(() => {
    const getHolidayRecipies = async () => {
      const options = {
        method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
        params: {
          query: 'new year',
          diet: '',
          excludeIngredients: 'coconut',
          intolerances: 'egg, gluten',
          number: '10',
          offset: '0',
          type: 'main course'
        },
        headers: {
          'x-rapidapi-key': '78205131a8msh4c0798445fb5aecp1128a5jsn7cf3d0e889e1',
          'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        console.log(response.data);
        setHolidayRecipies(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }

    getHolidayRecipies();
  }, []);

  return (
    <div className="Home">
      <div className="inner-container">
        <Category title="Holiday Special" recipies={holidayRecipies.results} />
      </div>
    </div>
  );
};

export default Home;
