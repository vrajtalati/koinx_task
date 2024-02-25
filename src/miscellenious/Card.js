import React from 'react';
import image from '../images/image1.svg';

const Card = () => {
  return (
    <div className='m-2 bg-blue-100 p-3 grid sm:grid-cols-12 rounded-md'>
      <div className='grid items-center justify-center sm:col-span-2'>
        <img className='object-contain h-auto w-auto' src={image} alt='Profile'></img>
        <h1 className='text-center'>Name</h1>
        <h3 className='text-center'>Designer</h3>
      </div>
      <div className='sm:col-span-10'>
        <p className='text-sm pt-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In justo rutrum, fermentum urna vel, hendrerit urna. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdum.
        </p>
      </div>
    </div>
  );
}

export default Card;
