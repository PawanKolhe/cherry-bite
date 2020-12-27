import React, { useState, useEffect } from 'react';

import './Videos.scss';

import VideoCard from '../../components/VideoCard/VideoCard';

import { getVideoRecipes } from '../../services/Recipes';

export const Videos = () => {
  const [videoRecipes, setVideoRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getVideoRecipes('new year').then(data => {
      setVideoRecipes(data);
    });
  }, []);

  const search = (term) => {
    if(!term) {
      return;
    }
    getVideoRecipes(term).then(data => {
      setVideoRecipes(data);
    });
  }

  return (
    <div className="Videos">
      <div className="inner-container">
        <div className="searchbar-container">
          <input
            className="searchbar-input"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button className="searchbar-button" onClick={() => search(searchTerm)}>Search</button>
        </div>
        {videoRecipes.length === 0 ? <div className="no-video-found-text">No Videos Found :(</div> : ''}
        <div className="Videos-grid">
          {videoRecipes.map(video => <VideoCard video={video} />)}
        </div>
      </div>
    </div>
  );
};

export default Videos;
