import React from 'react';


import Boc from '../miscellenious/Boc';

const Performance = () => {
  return (
    <div className='p-3'>
      <h1 className='text-xl font-bold'>Performance</h1>


      <div className=' p-5 grid grid-cols-12'>
        <div className='col-span-2  grid  justify-items-center  '>
          <div>Todays Low</div>
          <div>46,930.22</div>
        </div>
        <div style={{background: "linear-gradient(90deg, #FF4949 0%, #FF4E11 15.34%, #FC870A 30.45%, #FFAF11 48.68%, #C2CB21 62.75%, #11EB68 100.03%)"}} className='col-span-8  w-full h-2 mt-6 rounded-lg'>

        </div>
        
        <div className='col-span-2 grid  justify-items-center '>
        <div>Todays Low</div>
          <div>46,930.22</div>
        </div>
      </div>

      
      <div className=' p-5 grid grid-cols-12'>
        <div className='col-span-2  grid  justify-items-center  '>
          <div>Todays Low</div>
          <div>46,930.22</div>
        </div>
        <div style={{background: "linear-gradient(90deg, #FF4949 0%, #FF4E11 15.34%, #FC870A 30.45%, #FFAF11 48.68%, #C2CB21 62.75%, #11EB68 100.03%)"}} className='col-span-8  w-full h-2 mt-6  mb-5 rounded-lg'>

        </div>
        
        <div className='col-span-2 grid  justify-items-center '>
        <div>Todays Low</div>
          <div>46,930.22</div>
        </div>
      </div>



      
      <h1>Fundamentals</h1>
      <div className='grid sm:grid-cols-2'>
        <div className='font-inter text-base font-medium leading-5 m-2'>
          <Boc title="Bitcoin Price" value="$16,815.46"/>
          <Boc title="24h Low / 24h High" value="$16,382.07 / $16,874.12"/>
          <Boc title="Bitcoin Price" value="$16,815.46"/>
          <Boc title="Bitcoin Price" value="$16,815.46"/>
          
        </div>
        <div className='font-inter text-base font-medium leading-5 m-2'>
        <Boc title="Bitcoin Price" value="$16,815.46"/>
          <Boc title="24h Low / 24h High" value="$16,382.07 / $16,874.12"/>
          <Boc title="Bitcoin Price" value="$16,815.46"/>
          <Boc title="Bitcoin Price" value="$16,815.46"/>
        </div>
      </div>
    </div>
  )
}

export default Performance
