import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ScrollToTop from '../Components/ScrollToTop'

const RootLayout = ({ darkMode, setDarkMode }) => {
  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <ScrollToTop />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Outlet context={{ darkMode, setDarkMode }} />
      </main>
      <footer>
        <Footer darkMode={darkMode} />
      </footer>
    </div>
  )
}

export default RootLayout;
