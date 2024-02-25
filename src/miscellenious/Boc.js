import React from 'react'

const Boc = (props) => {
  return (
    
      <div className='flex justify-between '>
      <span style={{color:" #768396"}} className='p-2'>
        {props.title}
      </span>
      <span className=' p-2'>{props.value}</span>
    </div>
   
  )
}

export default Boc
