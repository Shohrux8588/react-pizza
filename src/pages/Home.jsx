import React from 'react';

import Sort from '../components/Sort';
import Categories from '../components/Categories';

import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../Context';

function Home() {
  const [searchValue] = React.useContext(SearchContext);
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState('rating');
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    const search = searchValue ? `&search=${searchValue}` : '';
    const category = categoryId > 0 ? '&category=' + categoryId : '';
    const url = `https://647974b7a455e257fa6335a5.mockapi.io/items?limit=4&page=${currentPage}&sortBy=${sortType}${search}${category}`;
    setIsLoading(true);
    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setPizzas(data);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const skeleton = new Array(6).fill('a').map((item, index) => <Skeleton key={index} />);
  const items = pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  return (
    <div>
      <div className="content__top">
        <Categories categoryId={categoryId} setCategoryId={setCategoryId} />
        <Sort sortType={sortType} setSortType={setSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : items}</div>
      <Pagination setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default Home;
