import axios from 'axios';

const API_ENDPOINT = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com';
const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;
const RAPID_API_HOST = 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com';
const RAPID_HEADER = {
  'x-rapidapi-key': RAPID_API_KEY,
  'x-rapidapi-host': RAPID_API_HOST
};

const getRecipes = async (search, type) => {
  const options = {
    method: 'GET',
    url: `${API_ENDPOINT}/recipes/search`,
    params: {
      query: search,
      number: '20',
      offset: '0',
      type: type ? type : ''
    },
    headers: RAPID_HEADER
  };

  let data = [];
  await axios.request(options).then(function (response) {
    console.log(response.data);
    data = response.data.results;
  }).catch(function (error) {
    console.error(error);
  });
  return data;
}

const getRecipeById = async (id) => {
  const options = {
    method: 'GET',
    url: `${API_ENDPOINT}/recipes/${id}/information`,
    headers: RAPID_HEADER
  };

  let data = {};
  await axios.request(options).then(function (response) {
    console.log(response.data);
    data = response.data;
  }).catch(function (error) {
    console.error(error);
  });
  return data;
}

const getRandomRecipe = async () => {
  const options = {
    method: 'GET',
    url: `${API_ENDPOINT}/recipes/random`,
    params: {
      number: '1', 
      tags: 'christmas'
    },
    headers: RAPID_HEADER
  };

  let data = {};
  await axios.request(options).then(function (response) {
    console.log(response.data);
    data = response.data.recipes[0];
  }).catch(function (error) {
    console.error(error);
  });
  return data;
}

const getFoodJoke = async () => {
  const options = {
    method: 'GET',
    url: `${API_ENDPOINT}/food/jokes/random`,
    headers: RAPID_HEADER
  };

  let data = '';
  await axios.request(options).then(function (response) {
    data = response.data?.text;
  }).catch(function (error) {
    console.error(error);
  });
  return data;
}

const getVideoRecipes = async (searchTerm) => {
  const options = {
    method: 'GET',
    url: `${API_ENDPOINT}/food/videos/search`,
    params: {
      query: searchTerm,
      minLength: '0',
      maxLength: '999',
      offset: '0',
      number: '15'
    },
    headers: RAPID_HEADER
  };
  
  let data = [];
  await axios.request(options).then(function (response) {
    data = response.data?.videos;
  }).catch(function (error) {
    console.error(error);
  });
  return data;
}

const getRelatedRecipes = async (id) => {
  const options = {
    method: 'GET',
    url: `${API_ENDPOINT}/recipes/${id}/similar`,
    headers: RAPID_HEADER
  };

  let data = {};
  await axios.request(options).then(function (response) {
    console.log(response.data);
    data = response.data;
    data.map(recipe => {
      recipe.image = `https://webknox.com/recipeImages/${recipe.id}-312x231.jpg`;
      return recipe;
    })
  }).catch(function (error) {
    console.error(error);
  });
  return data;
}

export {
  getRecipes,
  getRecipeById,
  getRandomRecipe,
  getFoodJoke,
  getVideoRecipes,
  getRelatedRecipes
}
