import './RecipeCard.scss';

import { saveRecipeToDB, deleteRecipeFromDB } from '../../services/Database';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faBookmark, faTrash } from '@fortawesome/free-solid-svg-icons';

import { useAlert } from "react-alert";

export const RecipeCard = ({ recipe, alternateStyle, disableSaveButton, recipeDeleted }) => {
  const { id, title, image, readyInMinutes, servings } = recipe;
  const alert = useAlert();

  const saveRecipe = () => {
    saveRecipeToDB(recipe).then(data => {
      alert.success("Recipe saved!");
    }).catch(err => {
      alert.error("Failed to save recipe.");
    });
  }

  const deleteRecipe = () => {
    deleteRecipeFromDB(recipe.db_id).then(data => {
      alert.success("Recipe removed!");
      if(recipeDeleted) {
        recipeDeleted(id);
      }
    }).catch(err => {
      alert.error("Failed to delete recipe.");
    });
  }

  return (
    <div className="RecipeCard" style={alternateStyle ? {width: 'unset', textAlign: 'left'} : {}}>
      <div className="Recipe-image-container">
        <img className="Recipe-image" style={alternateStyle ? {width: '100%'} : {}} src={image.startsWith("http") ? image : `https://spoonacular.com/recipeImages/${image}`} alt="recipe" />
        {disableSaveButton ? 
          <div className="Recipe-button Recipe-delete-button" onClick={() => deleteRecipe()}>
            <FontAwesomeIcon icon={faTrash} />
          </div> 
        : <div className="Recipe-button Recipe-save-button" onClick={() => saveRecipe()}>
          <FontAwesomeIcon icon={faBookmark} />
          </div>}
      </div>
      <div className="Recipe-text-container">
        <div className="RecipeCard-title">{title}</div>
        <div className="RecipeCard-readyInMinutes">Ready in: {readyInMinutes} mins</div>
        <div className="RecipeCard-servings">Servings: {servings}</div>
        <a href={`/recipe/${id}`} className="RecipeCard-link">
          <FontAwesomeIcon icon={faArrowCircleRight} />
        </a>
      </div>
    </div>
  )
};

export default RecipeCard;
