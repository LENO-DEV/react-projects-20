import React, { useContext } from 'react'
import { AppContext } from './context'
import phoneImg from './images/phone.svg'

const Hero = () => {
  const { closeSubmenu } = useContext(AppContext);


  return <section className='hero'>
    <div className='hero-center'>
      <article className='hero-info'>
        <h1>Payements infrastructure for the Internet</h1>
        <p>
          Millions of companies of all sizes-from startsups ot ccs fkds 
          xsss xgain 
          more proifit e else go to hell
        </p>
      </article>
      <article className='hero-images'>
        <img src={phoneImg} alt='phone-img' />
      </article>
    </div>
  </section>
}

export default Hero;
