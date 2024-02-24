import React from 'react';
// import Box from '../miscellenious/b';
import Box from '../miscellenious/Box';

const Performance = () => {
  return (
    <div>
      <h1>Fundamentals</h1>
      <div className='grid sm:grid-cols-2'>
        <div className='font-inter text-base font-medium leading-5 m-2'>
          <Box title="Bitcoin Price" value="$16,815.46"/>
          <Box title="24h Low / 24h High" value="$16,382.07 / $16,874.12"/>
          <Box title="Bitcoin Price" value="$16,815.46"/>
          <Box title="Bitcoin Price" value="$16,815.46"/>
          
        </div>
        <div className='font-inter text-base font-medium leading-5 m-2'>
        <Box title="Bitcoin Price" value="$16,815.46"/>
          <Box title="24h Low / 24h High" value="$16,382.07 / $16,874.12"/>
          <Box title="Bitcoin Price" value="$16,815.46"/>
          <Box title="Bitcoin Price" value="$16,815.46"/>
        </div>
      </div>
    </div>
  )
}

export default Performance
