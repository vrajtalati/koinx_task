import React from 'react';

const Toolbar = () => {
  return (
    <div className='overflow-auto w-100 flex flex-row flex-wrap  gap-6'>
      <button className='hover:text-blue-500 hover:underline'>Overview</button>
      <button className='hover:text-blue-500 hover:underline'>Fundamentals</button>
      <button className='hover:text-blue-500 hover:underline'>News Insights</button>
      <button className='hover:text-blue-500 hover:underline'>Sentiment</button>
      <button className='hover:text-blue-500 hover:underline'>Team</button>
      <button className='hover:text-blue-500 hover:underline'>Technicals</button>
      <button className='hover:text-blue-500 hover:underline'>Tokenomics</button>
    </div>
  );
}

export default Toolbar;
