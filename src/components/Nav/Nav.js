import { NavLink } from 'react-router-dom';

import './Nav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

export const Nav = () => {
  return (
    <div className="Nav">
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/search" exact>Search</NavLink>
      <NavLink to="/videos" exact>Videos</NavLink>
      <NavLink to="/random" exact>Random</NavLink>
      <NavLink to="/saved" exact><FontAwesomeIcon icon={faBookmark} /><span className="icon-text">Saved</span></NavLink>
    </div>
  )
};

export default Nav;
