
import { useState } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import ThemeContext from './Context/ThemeContext';
import MainRoutes from './routes/MainRoutes';

function App() {

   const [theme,setTheme] =  useState('dark')

  return (
    <>
      <ThemeContext.Provider value={{theme,setTheme}}>
        <div id="app-wrapper" data-theme={theme}>
          <Navbar/> 
          <MainRoutes/>
        </div>
      </ThemeContext.Provider>
      
    </>
  )
}

export default App
