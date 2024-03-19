import React from 'react';
import Image from 'next/image';

const Cover = () => {
  return (
    <div className='border-blue-500 bg-gradient-to-r from-indigo-900 to-indigo-950 flex flex-col md:flex-row w-full h-screen items-center relative border-b-2'>
      <div className='bg-gradient-to-r from-lime-950 to-lime-900 w-full lg:w-96 h-96 lg:h-auto  lg:ml-72 p-10 lg:mr-11 rounded-2xl lg:flex-none lg:flex-shrink-0'>
        <div className='mt-20'>
          <Image
            src='/bg.png'
            alt='logo'
            width={270}
            height={80}
          />
        </div>
        <div>
          <p className='text-white text-sm mt-9'>Carpe Diem Pension, a blockchain-based retirement fund, offers permanent payouts through CDP deposits, with a 4.32% annual inflation claimable by depositors.</p>
        </div>
      </div>
      <div className='bg-white absolute right-2/4 top-48 rounded '>
        <Image  
          src='/bg.png'
          alt='logo'
          width={155}
          height={30}
        />
      </div>
      <div className='w-full md:w-2/5 ml-4 mt-8 md:mt-0'>
        <p className='text-3xl font-medium text-white'>Securing Trust: Boosting Security and Strengthening Trust at Carpe Diem Pension</p>
        <p className='text-white text-sm mt-6'>QuillAudits enhances Carpe Diem Pension by addressing 33 vulnerabilities on the Pulse blockchain, boosting security and user trust in digital pensions.</p>
      </div>
      
      <div className='absolute bottom-11 left-72'>
        <p className='text-gray-300 cursor-pointer'>QuillAudits {'->'} Resources {'->'} <span className='text-white font-medium'>Case Studies</span> </p>
      </div>
    </div>
  );
};

export default Cover;
