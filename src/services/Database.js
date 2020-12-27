import axios from 'axios';

const API_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT || 'http://localhost:1337';

const getRecipesFromDB = async () => {
  const options = {
    method: 'GET',
    url: `${API_ENDPOINT}/recipes`
  };

  let data = [];
  await axios.request(options).then(function (response) {
    console.log(response.data);
    data = response.data;
    data.map(recipe => {
      recipe.db_id = recipe.id;
      recipe.id = recipe.recipe_id;
      return recipe;
    });
  }).catch(function (error) {
    console.error(error);
  });
  return data;
}

const saveRecipeToDB = async (recipe) => {
  const options = {
    method: 'POST',
    url: `${API_ENDPOINT}/recipes`,
    data: {
      recipe_id: recipe.id.toString(),
      title: recipe.title,
      sourceUrl: recipe.sourceUrl,
      image: recipe.image,
      readyInMinutes: recipe.readyInMinutes.toString(),
      servings: recipe.servings.toString(),
    }
  };

  let data = [];
  await axios.request(options).then(function (response) {
    console.log(response.data);
    data = response.data;
  }).catch(function (error) {
    console.error(error);
  });
  return data;
}

const deleteRecipeFromDB = async (id) => {
  const options = {
    method: 'DELETE',
    url: `${API_ENDPOINT}/recipes/${id}`
  };

  let data = [];
  await axios.request(options).then(function (response) {
    console.log(response.data);
    data = response.data;
  }).catch(function (error) {
    console.error(error);
  });
  return data;
}

export {
  getRecipesFromDB,
  saveRecipeToDB,
  deleteRecipeFromDB
}

