import React from 'react';

import Sort from '../components/Sort';
import Categories from '../components/Categories';

import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

function Home({ searchValue }) {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState('rating');
  console.log(sortType);

  React.useEffect(() => {
    setIsLoading(true);
    try {
      fetch(
        `https://647974b7a455e257fa6335a5.mockapi.io/items?sortBy=${sortType}&${
          categoryId > 0 ? 'category=' + categoryId : ''
        }}`,
      )
        .then((response) => response.json())
        .then((data) => {
          setPizzas(data);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }

    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  const skeleton = new Array(6).fill('a').map((item, index) => <Skeleton key={index} />);
  const items = pizzas
    .filter((pizza) => pizza.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  return (
    <div>
      <div className="content__top">
        <Categories categoryId={categoryId} setCategoryId={setCategoryId} />
        <Sort sortType={sortType} setSortType={setSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : items}</div>
    </div>
  );
}

export default Home;
