import React, { useState, useEffect } from 'react';

import './Saved.scss';

import RecipeCard from '../../components/RecipeCard/RecipeCard';

import { getRecipesFromDB } from '../../services/Database';

export const Saved = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipesFromDB().then(data => {
      setRecipes(data);
    });
  }, []);

  const recipeDeleted = function(id) {
    console.log("DEBUG recipeDeleted", id, recipes);
    setRecipes(recipes.filter(recipe => recipe.id.toString() !== id.toString()));
  }

  return (
    <div className="Saved">
      <div className="inner-container">
        <div className="Saved-recipes-container">
          <div className="recipe-section-title">Saved Recipes</div>
          <div className="Saved-recipes">
            {recipes?.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} alternateStyle={true} disableSaveButton={true} recipeDeleted={recipeDeleted} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saved;
