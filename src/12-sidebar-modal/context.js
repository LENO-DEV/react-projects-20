import React, { useState, useContext, createContext } from 'react'


const AppContext = createContext();

const AppProvider = ({ children }) => {

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openSideBar = () => {
    setIsSideBarOpen(true);
  }
  const closeSidebar = () => {
    setIsSideBarOpen(false);
  }

  const openModal = () => {
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  }

  return <AppContext.Provider value={{
    isModalOpen, isSideBarOpen, openModal, openSideBar, closeModal, closeSidebar
  }}>
    {children}
  </AppContext.Provider>
}

export { AppContext, AppProvider };