import React, { useState, useEffect } from 'react';

import './Search.scss';

import RecipeCard from '../../components/RecipeCard/RecipeCard';

import { getRecipes } from '../../services/Recipes';

export const Search = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getRecipes('new year').then(data => {
      setRecipes(data);
    });
  }, []);

  const search = (term) => {
    if(!term) {
      return;
    }
    getRecipes(term).then(data => {
      setRecipes(data);
    });
  }

  return (
    <div className="Search">
      <div className="inner-container">
        <div className="searchbar-container">
          <input
            className="searchbar-input"
            type="text"
            placeholder="Search recipes"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button className="searchbar-button" onClick={() => search(searchTerm)}>Search</button>
        </div>
        {recipes.length === 0 ? <div className="no-video-found-text">No Recipes Found :(</div> : ''}
        <div className="Videos-grid">
          {recipes?.slice(0, 8)?.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} alternateStyle={true} />)}
        </div>
      </div>
    </div>
  );
};

export default Search;
