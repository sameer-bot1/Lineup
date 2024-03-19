"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { IoMdArrowDropdown } from "react-icons/io";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='sticky top-0 z-50 bg-gradient-to-r from-indigo-900 to-indigo-950 border-b-2 border-gray-300'>
      <div className='flex justify-between p-3 px-10 md:hidden'>
        <Image src='/QA.webp' alt='logo' width={140} height={30} />
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className={`md:flex md:justify-between md:p-3 md:px-10 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className='flex gap-10'>
          <Image src='/QA.webp' alt='logo' width={140} height={30} />
        </div>
        <div className='md:flex gap-6'>
          <div className='relative group flex hover:bg-gray-100 hover:text-black cursor-pointer transition-all'>
            <h2 className='hover:bg-gray-100 hover:text-black p-2 rounded-md cursor-pointer transition-all text-white flex'>
              Services <IoMdArrowDropdown className="text-2xl text-orange-600 cursor-pointer ml-1 "/>
            </h2>
            <div className='absolute hidden group-hover:block top-full left-0  z-10 bg-white p-4 rounded shadow-md'>
              <p>Ethereum </p>
              <p>Polygon </p>
              <p>BSC Audit</p>
              <p>Solana Audit</p>
            </div>
          </div>
          <div className='relative group flex hover:bg-gray-100 hover:text-black cursor-pointer transition-all'>
            <h2 className='hover:bg-gray-100 hover:text-black p-2 rounded-md cursor-pointer transition-all text-white flex'>
              Tools <IoMdArrowDropdown className="text-2xl text-orange-600 cursor-pointer ml-1 "/>
            </h2>
            <div className='absolute hidden group-hover:block top-full left-0 z-10 bg-white p-4 rounded shadow-md'>
              <p>Explore All Tools</p>
              <p>QuillAI</p>
              <p>QuillCheck</p>
              <p>QuillMonitor</p>
              <p>QuillShield</p>
            </div>
          </div>
          <h2 className='hover:bg-gray-100 hover:text-black p-2 rounded-md cursor-pointer transition-all text-white'>Our Audits</h2>
          <h2 className='hover:bg-gray-100 hover:text-black p-2 rounded-md cursor-pointer transition-all text-white'>Resources</h2>
          <h2 className='hover:bg-gray-100 hover:text-black p-2 rounded-md cursor-pointer transition-all text-white'>Refer-Earn-Secure</h2>
          <button className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all text-white hover:text-black border-2 border-blue-500 bg-blue-500'>Request An Audit</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
