import RecipeCard from '../RecipeCard/RecipeCard';

import './Category.scss';

import ScrollMenu from 'react-horizontal-scrolling-menu';
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

export const Category = ({ title, recipies }) => {
  console.log(title);
  return (
    <div className="Category">
      <h2 className="Category-title">{title}</h2>
      <div className="Category-recipies">
        <ScrollMenu
          alignCenter={false}
          translate={0}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          hideSingleArrow={true}
          data={recipies.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
        />
      </div>
    </div>
  )
};

export default Category;
