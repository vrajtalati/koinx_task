import React from 'react'
import { MiniChart } from "react-ts-tradingview-widgets";



const MinChart = () => {
  return (
    <div className='grid grid-cols-3'>
      <MiniChart colorTheme="dark" width="100%"></MiniChart>
      <MiniChart colorTheme="dark" width="100%"></MiniChart>
      <MiniChart colorTheme="dark" width="100%"></MiniChart>
      <MiniChart colorTheme="dark" width="100%"></MiniChart>
      <MiniChart colorTheme="dark" width="100%"></MiniChart>
    </div>
  )
}

export default MinChart
