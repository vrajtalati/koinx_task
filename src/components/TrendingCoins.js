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

  
  
    <div className='bg-white'>
      <h1  className='text-xl font-Inter'>Trending Coins (24h)</h1>
      <div>
      {trendingCoins.map((coin, index) => (
    <div className='grid grid-cols-12'>
   
    <span className='col-span-2' ><img src={coin.item.thumb}></img></span>
    <span className='col-span-2'> {`${coin.item.name}`}</span>
    
    </div>
  ))}
      </div>
    </div>
  )
}

export default TrendingCoins


