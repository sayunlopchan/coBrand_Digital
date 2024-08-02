import React from 'react'
import { useNavigate } from 'react-router-dom'

import PNF from '../../../assets/image/404error/404.svg'



const PageNotFound = () => {

  const nav = useNavigate();
  return (
    <div className='p-10 mt-10 flex flex-col items-center justify-center gap-5'>
      <div>
        <img src={PNF} alt="404" className='w-[400px]' />
      </div>
      <div>
        <button
          className='font-bold px-5 py-2 bg-white border border-blue-500 rounded-md hover:bg-blue-700 hover:text-white hover:border-white'
          onClick={() => nav('/')}>Go back</button>
      </div>
    </div>
  )
}

export default PageNotFound