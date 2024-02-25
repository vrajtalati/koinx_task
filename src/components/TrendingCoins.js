import React from 'react'
import { useState,useEffect } from 'react';

const TrendingCoins = () => {

    const [trendingCoins, setTrendingCoins] = useState([]);
    

    const fetchTrendingCoins = () => {
      // Fetch top 3 trending coins from Coingecko API
      fetch("https://api.coingecko.com/api/v3/search/trending")
        .then(response => response.json())
        .then(data => {
          setTrendingCoins(data.coins.slice(0, 3));
        })
        .catch(error => console.error("Error fetching trending coins:", error));
    };
    console.log(trendingCoins);
    
    
  
    useEffect(() => {
      // Fetch data on mount
      fetchTrendingCoins();
  
      // Fetch data every 5 minutes (adjust as needed)
      const intervalId = setInterval(fetchTrendingCoins, 5 * 60 * 1000);
  
      // Cleanup interval on component unmount
      return () => clearInterval(intervalId);
    }, []);
  return (

  
  
    <div className='bg-white p-5 rounded-md'>
      <h1  className='text-xl font-bold font-Inter pb-6'>Trending Coins (24h)</h1>
      <div>
      {trendingCoins.map((coin, index) => (
    <div className='grid grid-cols-12 p-2'>
   
    <span className='col-span-2' ><img src={coin.item.thumb}></img></span>
    <span className='col-span-3'> {`${coin.item.name}`}</span>
    <div className=' grid justify-items-end col-span-6'>
      <div className= 'bg-green-200 grid grid-cols-2 w-20 h-8 pr-8'>
      <div className="" style={{   width: '0',
    height: '0',
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderBottom: '5px solid black',
    margin: 'auto',}}></div>
       <div className=''>{`${(coin.item.data.price_change_percentage_24h.usd).toFixed(1)}`}%</div>
      </div>
   
    </div>
    
    </div>
  ))}
      </div>
    </div>
  )
}

export default TrendingCoins


