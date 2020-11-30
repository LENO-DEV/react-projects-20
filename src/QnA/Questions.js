import React, { useState } from 'react'

const Questions = ({ index, questions, answer }) => {
  const [showAns, setShowAns] = useState(false);

  return (
    <div className='text-dark mt-3 p-1'>
      <h3 className='h4'>{index + 1})&nbsp; {questions}&nbsp;
        <button className='btn btn-primary' onClick={() => setShowAns(!showAns)}>
          <span className='plus'>
            {showAns ? (<span className='ml-1' style={{ fontSize: '2rem' }}>-</span>) : '+'}
          </span>
        </button>
      </h3>
      <p className='text p-1 mr-3'>&nbsp;{showAns && answer}</p>
      <hr />
    </div>
  )
}

export default Questions;
