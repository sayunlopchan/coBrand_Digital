import React from 'react'
import HomeBanner from './UI/HomeBanner'
import AboutUs from './UI/AboutUs'
import OurServices from './UI/OurServices'


import data from '../assets/data/brand_data'

import SwiperUi from '../Components/SwiperUi'
import GoogleReviews from './UI/GoogleReviews'
import Testimonials from './UI/Testimonials'



const HomePage = ({ darkMode }) => {
  return (
    <div className='px-10'>
      <HomeBanner darkMode={darkMode} />
      <AboutUs darkMode={darkMode} />
      <OurServices darkMode={darkMode} />
      <SwiperUi data={data} darkMode={darkMode} />
      <Testimonials />
      <GoogleReviews darkMode={darkMode} />
    </div>
  )
}

export default HomePage