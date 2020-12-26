import { NavLink } from 'react-router-dom';

import './Nav.scss';

export const Nav = () => {
  return (
    <div className="Nav">
      <NavLink to="/" exact>Home</NavLink>
    </div>
  )
};

export default Nav;
