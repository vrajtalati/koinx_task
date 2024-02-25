import { useEffect, useState } from 'react';
import Graph from './components/Graph';
import Team from './components/Team';
import Performance from './components/Performance';
import GetStarted from './components/GetStarted';
import TrendingCoins from './components/TrendingCoins';
import Toolbar from './components/Toolbar';

import Header from './components/Header';

function App() {
  return (
    <div style={{ background: "#EFF2F5" }} className='w-full h-screen flex flex-col'>
      <div><Header /></div>
      
      <div className='flex-1 bg-gray-200'>
        {/* Single column layout for small screens */}
        <div className='sm:hidden overflow-auto p-5'>
          <div className='h-1/4'><Graph /></div>
          <div className='w-full mt-3 mb-5'><Toolbar /></div>
          <div className='bg-white mb-5'><Performance /></div>
          <div className='bg-white'><Team /></div>
          <div className='mb-3'><GetStarted /></div>
          <div><TrendingCoins /></div>
        </div>

        {/* Two column layout for larger screens */}
        <div className='hidden sm:grid grid-cols-12 gap-3 p-5'>
          <div className='sm:col-span-8'>
            <div className='h-1/3 rounded-lg bg-white'><Graph /></div>
            <div className='w-full mt-3 mb-5'><Toolbar /></div>
            <div className='bg-white'><Performance /></div>
            <div className='bg-white mb-5'><Team /></div>
          </div>
          <div className='sm:col-span-4'>
            <div className='mb-4'><GetStarted /></div>
            <div><TrendingCoins /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
