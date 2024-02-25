import React, { useState, useEffect } from 'react';
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const Graph = () => {
  const [bitcoinData, setBitcoinData] = useState({
    usd: 0,
    inr: 0,
    percentageChange: 0,
    id: '',
    symbol: '',
    logoUrl: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true');
        const data = await response.json();

        const detailsResponse = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin');
        const detailsData = await detailsResponse.json();

        // Extracting values from the response
        const usdValue = data.bitcoin.usd;
        const inrValue = data.bitcoin.inr;
        const percentageChange = data.bitcoin.usd_24h_change;
        const id = detailsData.name;
        const symbol = detailsData.symbol;
        const logoUrl = detailsData.image?.large;

        // Updating state with fetched data
        setBitcoinData({
          usd: usdValue,
          inr: inrValue,
          percentageChange: percentageChange,
          id: id,
          symbol: symbol,
          logoUrl: logoUrl,
        });
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs once on component mount

  const isPositiveChange = bitcoinData.percentageChange >= 0;

  return (
    <div className='w-full h-full flex flex-col'>
      <div className='ml-5 flex items-center'>
        {loading ? (
          <span>Loading...</span>
        ) : (
          <img className='h-12 w-12' src={bitcoinData.logoUrl} alt='Bitcoin Logo'></img>
        )}
        <div className='ml-2 font-bold '>{bitcoinData.id} (BTC)</div>
      </div>
      <div className='ml-6 flex items-center'>
        <span className='text-2xl font-bold'>$ {bitcoinData.usd}</span>
        <span className={`ml-2 grid grid-cols-2 w-20 h-8 pr-2 ${isPositiveChange ? 'bg-green-200' : 'bg-red-200'}`}>
          <div className="" style={{
            width: '0',
            height: '0',
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderBottom: '5px solid black',
            margin: 'auto',
          }}></div>
          <div className='text-center text-sm'>{(bitcoinData.percentageChange).toFixed(2)}%</div>
        </span>
      </div>
      <div className='ml-6'>
        <span className='text-sm'>Rs {bitcoinData.inr}</span>
      </div>
      <div className='h-4/5'>
        <AdvancedRealTimeChart theme="light" symbol='btcusd' autosize></AdvancedRealTimeChart>
      </div>
    </div>
  );
}

export default Graph;
