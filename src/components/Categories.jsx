import React from 'react';

const categories = ['All', 'Mexican', 'Vegetarian', 'Spicy'];

function Categories({ categoryId, setCategoryId }) {
  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={category}
            onClick={() => setCategoryId(index)}
            className={categoryId === index ? 'active' : ''}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
