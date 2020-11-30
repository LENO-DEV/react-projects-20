import React, { useState } from 'react';
import dataItems from './data';
import SingleQuestions from './Questions';

const App = () => {
  const [data, setData] = useState(dataItems);

  return <div className='container'>
    <div className='card main-card shadow-lg'>
      <div className='row'>
        <div className='col-md-5'>
          <h1 className='h1 left-heading'>Frequently Ask Questions!</h1>
        </div>
        <div className='col-7'>
          {
            data.map((el, i) => {
              return <SingleQuestions key={el.id} {...el} index={i} />
            })
          }
        </div>
      </div>
    </div>
  </div>
}

export default App;