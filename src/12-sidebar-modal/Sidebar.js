import React, { useContext } from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { AppContext } from './context'

const Sidebar = () => {
  const { isSideBarOpen, closeSidebar } = useContext(AppContext);


  return <aside className={`${(isSideBarOpen) ? 'sidebar show-sidebar' : 'sidebar'}`}>
    <div className='sidebar-header'>
      <img src={logo} className='logo' alt='debarshi' />
      <button className='close-btn' onClick={closeSidebar}>
        <FaTimes />
      </button>
    </div>
    <ul className='links'>
      {links.map((links) => {
        const { id, url, text, icon } = links;
        return <li key={id}>
          <a href={url}>
            {icon}
            {text}
          </a>
        </li>
      })}
    </ul>
    <ul className='social-icons'>
      {social.map((link) => {
        const { id, url, icon } = link;
        return <li key={id}>
          <a href={url}>{icon}</a>
        </li>
      })}
    </ul>
  </aside>
}

export default Sidebar
