import React, { useState, useEffect } from 'react';
import {
  useParams
} from "react-router-dom";

import './RecipeDetail.scss';
import scoreIcon from '../../assets/images/score.svg';
import priceIcon from '../../assets/images/price.svg';
import timeIcon from '../../assets/images/time.svg';
import heartIcon from '../../assets/images/heart.svg';

import Tag from '../../components/Tag/Tag';
import RecipeCard from '../../components/RecipeCard/RecipeCard';

import { getRecipeById, getRandomRecipe, getRelatedRecipes } from '../../services/Recipes';

const ingredientImageUrl = 'https://spoonacular.com/cdn/ingredients_100x100';

export const RecipeDetail = () => {
  let { id } = useParams();

  const [recipe, setRecipe] = useState({});
  const [relatedRecipes, setRelatedRecipes] = useState([]);

  useEffect(() => {
    if(id) {
      getRecipeById(id).then(data => {
        setRecipe(data);
      });
      getRelatedRecipes(id).then(data => {
        setRelatedRecipes(data);
      });
    } else {
      getRandomRecipe().then(data => {
        setRecipe(data);
        getRelatedRecipes(data.id).then(data => {
          setRelatedRecipes(data);
        });
      });
    }
  }, [id]);

  return (
    <div className="RecipeDetail">
      <div className="inner-container">
        <h1 className="Recipe-title">
          {recipe.title}
        </h1>
        <div className="Recipe-full-image-container">
          <img className="Recipe-full-image" src={recipe.image} alt="recipe" />
        </div>
        <div className="Recipe-tags">
          {recipe.vegetarian ? <Tag text="Vegetarian" /> : ''}
          {recipe.vegan ? <Tag text="Vegan" /> : ''}
          {recipe.glutenFree ? <Tag text="Gluten Free" /> : ''}
          {recipe.dairyFree ? <Tag text="Dairy Free" /> : ''}
          {recipe.veryHealthy ? <Tag text="Very Healthy" /> : ''}
          {recipe.cheap ? <Tag text="Cheap" /> : ''}
          {recipe.veryPopular ? <Tag text="Very Popular" /> : ''}
        </div>
        <div className="Recipe-highlights">
          <div className="Recipe-highlight">
            <div className="Recipe-highlight-icon"><img src={timeIcon} alt="icon" /></div>
            <div className="Recipe-highlight-text">Ready in {recipe.readyInMinutes} mins</div>
          </div>
          <div className="Recipe-highlight">
            <div className="Recipe-highlight-icon"><img src={priceIcon} alt="icon" /></div>
            <div className="Recipe-highlight-text">${recipe.pricePerServing} per serving</div>
          </div>
          <div className="Recipe-highlight">
            <div className="Recipe-highlight-icon"><img src={heartIcon} alt="icon" /></div>
            <div className="Recipe-highlight-text">Health Score: {recipe.healthScore}</div>
          </div>
          <div className="Recipe-highlight">
            <div className="Recipe-highlight-icon"><img src={scoreIcon} alt="icon" /></div>
            <div className="Recipe-highlight-text">Spoonacular Score: {recipe.spoonacularScore}</div>
          </div>
        </div>
        <div className="Recipe-summary-container">
          <div className="recipe-section-title">Summary</div>
          <div className="Recipe-summary">
            <div dangerouslySetInnerHTML={{ __html: recipe.summary?.replace(/<\/?a[^>]*>/g, "") }} />
          </div>
        </div>
        <div className="Recipe-ingredients-container">
          <div className="recipe-section-title">Ingredients</div>
          <div className="Recipe-ingredients-servings">
            Servings: {recipe.servings}
          </div>
          <div className="Recipe-ingredients">
            {recipe.extendedIngredients?.map(ingredient => 
              <div className="Recipe-ingredient">
                <div className="Recipe-ingredient-image-container">
                  <img className="Recipe-ingredient-image" src={`${ingredientImageUrl}/${ingredient.image}`} alt="ingredient" />
                </div>
                <div className="Recipe-ingredient-name">{ingredient.name}</div>
                <div className="Recipe-ingredient-amount">{ingredient.amount} {ingredient.unit}</div>
              </div>
            )}
          </div>
        </div>
        {recipe.analyzedInstructions ? <div className="Recipe-instructions-container">
          <div className="recipe-section-title">Instructions</div>
          <div className="Recipe-instructions">
            {recipe?.analyzedInstructions[0]?.steps?.map(instruction => 
              <div className="Recipe-instruction">
                <div className="Recipe-instruction-number">{instruction.number}</div>
                <div className="Recipe-instruction-step">{instruction.step}</div>
              </div>
            )}
          </div>
        </div> : ''}
        <div className="Recipe-related-recipes-container">
          <div className="recipe-section-title">Related Recipes</div>
          <div className="Recipe-related-recipes">
            {relatedRecipes?.slice(0, 8)?.map(relatedRecipe => <RecipeCard key={relatedRecipe.id} recipe={relatedRecipe} alternateStyle={true} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
