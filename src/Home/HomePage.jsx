import React from 'react'
import HomeBanner from './UI/HomeBanner'
import AboutUs from './UI/AboutUs'
import OurServices from './UI/OurServices'


import data from '../assets/data/brand_data'
import SwiperUi from '../Components/SwiperUi'
import GoogleReviews from './UI/GoogleReviews'


const HomePage = ({ darkMode }) => {
  return (
    <div className='p-10'>
      <HomeBanner darkMode={darkMode} />
      <AboutUs darkMode={darkMode} />
      <OurServices darkMode={darkMode} />
      <SwiperUi data={data} darkMode={darkMode} />
      <GoogleReviews darkMode={darkMode} />
    </div>
  )
}

export default HomePage