import React, { useState } from 'react';
import Logo from '../images/Logo.svg';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='bg-white p-3'>
      <div className='container mx-auto flex items-center justify-between'>
        {/* Logo */}
        <div>
          <img className='h-12 ml-5' src={Logo} alt='Logo'></img>
        </div>

        {/* Navigation Buttons or Hamburger Menu */}
        <nav className='flex gap-4 items-center'>
          {/* Hamburger Menu Icon for small screens */}
          <div className='lg:hidden'>
            <button onClick={toggleMenu} className='text-gray-800 focus:outline-none'>
              <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
              </svg>
            </button>
          </div>

          {/* Navigation Buttons for larger screens */}
          <div className={`hidden lg:flex gap-4 ${showMenu ? 'flex' : 'hidden'}`}>
            <button className='text-gray-800 hover:text-blue-500 focus:outline-none'>Crypto Taxes</button>
            <button className='text-gray-800 hover:text-blue-500 focus:outline-none'>Free Tools</button>
            <button className='text-gray-800 hover:text-blue-500 focus:outline-none'>Resource Center</button>
            <button style={{ background: "#0052FE", color: "white" }} className='p-2 rounded-md focus:outline-none'>Get Started</button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
