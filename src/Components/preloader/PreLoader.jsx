import React from 'react'
import preLoader from '../../assets/image/logo/preloader/cobrand.svg'

import './preloader.css'
const PreLoader = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='spinner'>
        </div>
        <img src={preLoader} alt="pre loader" />
      </div>
    </div>
  )
}

export default PreLoader