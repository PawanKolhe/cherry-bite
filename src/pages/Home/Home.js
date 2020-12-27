import './Home.scss';

import Category from '../../components/Category/Category';

export const Home = () => {
  return (
    <div className="Home">
      <div className="inner-container">
        <Category title="Holiday Special" search="new year" />
        <Category title="Dessert" search="dessert" />
        <Category title="Cakes" search="cake" />
        <Category title="Non-Veg" search="meat" />
        <Category title="Sea Food" search="sea food" />
        <Category title="Drinks" search="drink" type="beverage,drink" />
      </div>
    </div>
  );
};

export default Home;
