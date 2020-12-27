import './VideoCard.scss';

export const VideoCard = ({ video }) => {
  const { title, thumbnail, youTubeId, views, length } = video;

  return (
    <div className="VideoCard">
      <div className="VideoCard-video">
        <iframe title={youTubeId} height="180" frameborder="0" allowfullscreen="1" src={`https://www.youtube.com/embed/${youTubeId}`}></iframe>
      </div>
      <div className="VideoCard-title">{title}</div>
      <div className="VideoCard-views">Views: {views}</div>
      <div className="VideoCard-length">Duration: {Math.floor(length / 60)}:{length % 60}</div>
      {/* <div className="Recipe-image-container">
        <img className="Recipe-image" src={`https://spoonacular.com/recipeImages/${image}`} alt="recipe" />
      </div>
      <div className="Recipe-text-container">
        <div className="RecipeCard-title">{title}</div>
        <div className="RecipeCard-readyInMinutes">Ready in: {readyInMinutes} mins</div>
        <div className="RecipeCard-servings">Servings: {servings}</div>
        <a href={url} target="_blank" rel="noopener noreferrer" className="RecipeCard-link">
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      </div> */}
    </div>
  )
};

export default VideoCard;
