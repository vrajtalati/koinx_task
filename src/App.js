import { useEffect,useState } from 'react';
import './App.css';
import Graph from './components/Graph';
import Team from './components/Team';
import Performance from './components/Performance';
import GetStarted from './components/GetStarted';
import TrendingCoins from './components/TrendingCoins';
import Toolbar from './components/Toolbar';
import MiChart from './components/MinChart';

function App() {

 
  return (
    <>
    <div className='bg-blue-900 w-full h-12'></div>
    <div className='grid m-7  gap-9 sm:grid-cols-12'>
      <div className=' h-2/3 sm:col-span-8'>
     
      <div className='h-2/3'><Graph/></div>
      <div className='w-full '><Toolbar/></div>
      <div><Performance/></div>
      <div><Team/></div>
      </div>
      <div className='bg-blue-200 sm:col-span-4'>
        <div className='flex ' ><GetStarted/></div>
        <div><TrendingCoins/></div>
      </div>
      <div><MiChart/></div>
      
      
    </div>
    
    
    </>
  );
}

export default App;
