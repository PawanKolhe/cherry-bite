import React, { useState, useEffect } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';

import './Category.scss';

import { getRecipes } from '../../services/Recipes';

import ScrollMenu from 'react-horizontal-scrolling-menu';
import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Arrow = ({ className }) => {
  return (
    <div className={className + ' arrow'}>
      {className === 'arrow-prev' ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronRight} />}
    </div>
  );
};

const ArrowLeft = Arrow({ className: 'arrow-prev' });
const ArrowRight = Arrow({className: 'arrow-next' });

export const Category = ({ title, search }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes(search).then(data => {
      setRecipes(data);
    });
  }, [search]);

  return (
    <div className="Category">
      <h2 className="Category-title">{title}</h2>
      <div className="Category-recipies">
        {recipes.length ? 
          <ScrollMenu
            alignCenter={false}
            translate={0}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            hideSingleArrow={true}
            wheel={false}
            data={recipes?.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
          /> : 
          <Loader
            type="Rings"
            color="#881215"
            height={50}
            width={50}
            timeout={3000}
          />
        }
      </div>
    </div>
  )
};

export default Category;
