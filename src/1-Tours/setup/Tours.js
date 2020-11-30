import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {
  return <section>
    <div className='title'>
      <h2>Ours tours</h2>
      <div className='underline'></div>
    </div>
    <div>
      {tours.map((el) => {
        return <Tour
          key={el.id}
          {...el}
          removeTour={removeTour}
        ></Tour>
      })}
    </div>
  </section>
};

export default Tours;
