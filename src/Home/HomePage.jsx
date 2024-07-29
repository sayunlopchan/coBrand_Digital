import React from 'react'
import HomeBanner from './UI/HomeBanner'
import AboutUs from './UI/AboutUs'

const HomePage = ({ darkMode }) => {
  return (
    <div>
      <HomeBanner darkMode={darkMode} />
      <AboutUs darkMode={darkMode} />
    </div>
  )
}

export default HomePage