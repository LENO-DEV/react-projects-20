import React, { useState, useEffect } from 'react'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 1500);
    // console.log('hello');   
    // 2 times logged bcoz of alert value is changing twice..........
  }, [alert])


  return <article
    className={`color ${index > 8 && `color-light`}`}
    style={{ backgroundColor: `rgb(${bcg})` }}
    onClick={() => {
      setAlert(true)
      navigator.clipboard.writeText('#' + hexColor);
    }}
  >
    <p className='percent-value'>{weight}%</p>
    <p className='color-value'>{'#' + hexColor}</p>
    {alert && <p className='alert'>Copied to clipboard</p>}
  </article>
}

export default SingleColor;
