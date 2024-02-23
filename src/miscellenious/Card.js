import React from 'react'
import image from '../images/image1.svg';
const Card = (props) => {
  return (
    <div style={{backgroundColor:"#E8F4FD"}} className=' p-3 grid sm:grid-cols-12'>
      <div className='sm:col-span-2'>
        <img src={image}></img>
        <h1 className=''>name</h1>
         <h3>Designation</h3>
      </div>
      <div className=' sm:col-span-10'>
        <p className='text-m pt-3'>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
      </div>
    </div>
  )
}

export default Card
