import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const [error, setError] = useState(false);

  const handleEvent = (e) => {
    const number = e.target.value;
    if (number < 0) {
      setText([]);
      setError(true);
    }
    else {
      setError(false);
      setCount(number);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data.slice(0, count));
  }

  return (
    <section className='section-center'>
      <h3>Tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'> Paragraphs: </label>
        <input
          type='number'
          id='amount'
          onChange={handleEvent}
          value={count}
        />
        <button type='submit' className='btn'> generate </button>
      </form>
      <article className='lorem-text'>
        {
          text.map((el, i) => {
            return <p key={i}>{el}</p>
          })
        }
      </article>
      <p className='lead'> {(error) && `Sorry, Number can't be nagative!`}</p>
    </section>
  )
}

export default App;
