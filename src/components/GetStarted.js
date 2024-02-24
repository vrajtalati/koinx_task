import React from 'react'
import image from '../images/Frame.svg'

const GetStarted = () => {
  return (
    <div style={{background:"#0052FE"}} className=' p-7 rounded-xl grid grid-row-3 gap-4 place-items-center'>
      <div className='grid grid-row-2 place-items-center'>
      <h1 className=' text-lg   '>Get Started with KoinX </h1>
      <h1 className=' text-lg   '> for FREE</h1>
      </div>  
      <div className='font-inter text-base text-m leading-6 tracking-normal text-center'>With our range of features that you can equip for free,
KoinX allows you to be more educated and aware of your tax reports.</div>
   
    <div className='flex justify-center'>
        <img src={image}></img>
    </div>
    <div className=' w-100 '>
    <button className='bg-white rounded-xl pr-4 pl-4 pt-2 pb-2'>Get Started for FREE </button>
    </div>
    </div>
  )
}

export default GetStarted
