import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const nextBtn =(e) =>{
    e.preventDefault()
  }

  return <AppContext.Provider value={{
    nextBtn

  }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
