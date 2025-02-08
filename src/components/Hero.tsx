import Image from 'next/image';
import React from 'react';
import NewArrivals from './new-arrivals';
import TopSelling from './top-sell';

const Hero = () => {
  return (
    <div>
      <div className='w-full sm:flex bg-[#F2F0F1] sm:justify-between sm:pl-24 sm:pr-11 mt-5'>
        <div className='ml-4 pt-[87px]'>
          <h1 className='leading-none font-bold text-4xl w-[315px] sm:text-[64px] sm:w-[577px]'>
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className='text-[#00000099] w-[354px] text-sm h-[50px] sm:w-[545px] sm:h-[33px] mt-2'>
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className='bg-black px-32 text-white mt-8 border rounded-[62px] py-4 sm:px-[54px] sm:font-medium'>
            Shop Now
          </button>
        </div>
        {/* Right section */}
        <div className='flex'>
          <Image src={'/images/banner web.png'} alt='main banner' width={450} height={680} className='w-full h-[500px] object-cover mt-10' />
        </div>
      </div>

      {/* Logos Section */}
      <div className='bg-black text-white flex flex-wrap justify-center gap-6 sm:flex-nowrap sm:gap-20 h-auto sm:h-24  py-2'>
        <Image src={'/images/group-2.svg'} alt='logo' width={100} height={100} />
        <Image src={'/images/zara.svg'} alt='logo' width={80} height={80} className='w-16' />
        <Image src={'/images/gucci.svg'} alt='logo' width={100} height={100} />
        <Image src={'/images/prada.svg'} alt='logo' width={100} height={100} />
        <Image src={'/images/group-3.svg'} alt='logo' width={100} height={100}  />
      </div>

      <NewArrivals />
      <TopSelling />
    </div>
  );
};

export default Hero;
