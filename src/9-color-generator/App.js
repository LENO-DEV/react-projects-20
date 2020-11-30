import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(15));

  const handelSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  }

  return <>
    <section className='container'>
      <h3>color generator</h3>
      <form onSubmit={handelSubmit}>
        <input
          type='text'
          placeholder='#f15025'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className={`${error ? 'error' : null}`}
        />
        <button type='submit' className='btn'>Submit</button>
      </form>
    </section>
    <section className='colors'>
      {
        list.map((el, index) => {
          return <SingleColor key={index} {...el} hexColor={el.hex} index={index} />
        })
      }
    </section>
  </>
}

export default App;
