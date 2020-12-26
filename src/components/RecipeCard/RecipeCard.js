import './RecipeCard.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export const RecipeCard = ({ recipe }) => {
  const { id, title, image, sourceUrl: url, readyInMinutes, servings } = recipe;

  return (
    <div className="RecipeCard">
      <div className="Recipe-image-container">
        <img className="Recipe-image" src={`https://spoonacular.com/recipeImages/${image}`} alt="recipe" />
      </div>
      <div className="Recipe-text-container">
        <div className="RecipeCard-title">{title}</div>
        <div className="RecipeCard-readyInMinutes">Ready in: {readyInMinutes} mins</div>
        <div className="RecipeCard-servings">Servings: {servings}</div>
        <a href={url} target="_blank" rel="noopener noreferrer" className="RecipeCard-link">
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      </div>
    </div>
  )
};

export default RecipeCard;
