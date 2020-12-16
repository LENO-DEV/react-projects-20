import React, { useState, useRef, useEffect, useContext } from 'react'
import { AppContext } from './context';

const Submenu = () => {
  const { isSubmenuOpen } = useContext(AppContext);

  
  return <aside className={`${(isSubmenuOpen) ?
    'submenu show' : 'shubmenu'}`}>
    
  </aside>
}

export default Submenu;
