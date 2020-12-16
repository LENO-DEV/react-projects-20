import React, { useContext } from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { AppContext } from './context'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useContext(AppContext);

  const Submenu = (e) => {
    const page = e.target.textContext;
    const tempBtn = e.target.getBoundingClientRect();
    openSubmenu();
  }


  return <nav className='nav'>
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} className='nav-logo' alt='debarshi' />
        <button onClick={openSidebar} className='btn toggle-btn'><FaBars /></button>
      </div>
      <ul className='nav-links'>
        <li>
          <button onMouseOver={Submenu} className='link-btn'>products</button>
        </li>
        <li>
          <button onMouseOver={Submenu} className='link-btn'>developers</button>
        </li>
        <li>
          <button onMouseOver={Submenu} className='link-btn'>company</button>
        </li>
      </ul>
      <button className='btn signin-btn'> SignIn </button>
    </div>
  </nav>
}

export default Navbar
