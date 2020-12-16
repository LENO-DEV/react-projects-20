import React, { useState, createContext } from 'react'
import sublinks from './data'


const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setisSubmenuOpen] = useState(false);


  const openSidebar = () => {
    setIsSidebarOpen(true);
  }
  const openSubmenu = () => {
    setisSubmenuOpen(true);
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }
  const closeSubmenu = () => {
    setisSubmenuOpen(false);
  }


  return <AppContext.Provider value={{
    openSidebar, openSubmenu, closeSubmenu, closeSidebar,
    isSidebarOpen, isSubmenuOpen
  }}>
    {children}
  </AppContext.Provider>
}

export { AppProvider, AppContext };
