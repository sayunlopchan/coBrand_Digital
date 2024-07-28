import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'




const RootLayout = ({ darkMode, setDarkMode }) => {
  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Outlet context={{ darkMode, setDarkMode }} />
      </main>

    </div>
  )
}

export default RootLayout