import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const allCategory = ['all', ...new Set(items.map((el) => el.category))];
    setCategories(allCategory);
  },[]); 

  const filterItems = (category) => {
    if (category === 'all') return setMenuItems(items);
    let newItems = items.filter((item) => {
      return item.category === category;
    });
    setMenuItems(newItems);
  }


  return <main>
    <section className='menu section'>
      <div className='title'>
        <h2>Our menu</h2>
        <div className='underline'></div>
      </div>
      <Categories filterItems={filterItems} allCategories={categories} />
      <Menu items={menuItems} />
    </section>
  </main>;
}

export default App;
