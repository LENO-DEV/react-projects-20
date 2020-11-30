import React from 'react';

const Categories = ({ filterItems, allCategories }) => {
  return <div className='btn-container'>
    {
      allCategories.map((el, index) => {
        return <button className='filter-btn' key={index} onClick={() => filterItems(el)}>
          {el}
        </button>
      })
    }
  </div>;
};

export default Categories;
