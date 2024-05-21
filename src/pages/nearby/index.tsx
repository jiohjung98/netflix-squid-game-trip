import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const NearByPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage <= 1 ? 1 : currentPage - 1);
  };

  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <div className="w-[95%] my-auto mt-[1.5rem] text-center flex flex-col justify-center items-center h-full"> 
      
        <p className="text-white my-[1rem] font-extrabold" style={{ fontSize: '25px',lineHeight: '1.2' }}>THINGS TO DO<br/>NEAR HOTEL</p>
        {currentPage === 1 && (
          <>
        <div className='w-full flex flex-col justify-center items-center flex-grow'>
        <p className="text-white mb-[1rem] font-extrabold z-10" style={{ fontSize: '20px', lineHeight: '1.2' }}>
  RESTAURANT<br/>&<br/>BAR RECOMMENDATIONS
</p>
          <div className="text-white mt-[1rem] font-bold" style={{ fontSize: '18px' }}>1. Buja Pizza</div>
          <div className="text-white font-light" style={{ fontSize: '14px' }}>A popular spot known<br/>for its delicious and unique pizzas.</div>
          <div className="text-white mt-[1rem] font-bold" style={{ fontSize: '18px' }}>2. Champ Coffee</div>
          <div className="text-white font-light" style={{ fontSize: '14px' }}>A cozy cafe famous for its<br/>high-quality coffee and inviting atmosphere</div>
          <div className="text-white mt-[1rem] font-bold" style={{ fontSize: '18px' }}>3. Myeongdong Kyoja</div>
          <div className="text-white font-light" style={{ fontSize: '14px' }}>A well-loved restaurant famous for<br/>its Korean dumplings and noodle dishes. (Michelin)</div>
          <div className="text-white mt-[1rem] font-bold" style={{ fontSize: '18px' }}>4. Kieari</div>
          <div className="text-white font-light" style={{ fontSize: '14px' }}>Famous Dessert cafe making a healthy cake<br/>(no butter)</div>
          <div className="text-white mt-[1rem] font-bold" style={{ fontSize: '18px' }}>Bo Market</div>
          <div className="text-white font-light" style={{ fontSize: '14px' }}>A trendy market-style venue offering a variety<br/>of food and drink options in a lively atmosphere</div>
        </div>
        </>)}
        {currentPage === 2 && (
            <>
            <div className='w-full flex flex-col justify-center items-center flex-grow'>
            <p className="text-white mb-[1rem] font-extrabold z-10" style={{ fontSize: '20px',lineHeight: '1.2' }}>TOURIST SPOTS<br/>AROUND THE HOTEL</p>
              <div className="text-white mt-[1rem] font-bold" style={{ fontSize: '18px' }}>1. Hyundai Vinyl & Plastic</div>
              <div className="text-white font-light" style={{ fontSize: '14px' }}>An experiential space where you can<br/>freely listen to and handle vinyl records</div>
              <div className="text-white mt-[1rem] font-bold" style={{ fontSize: '18px' }}>2. Tamburins Hannam flagship store</div>
              <div className="text-white font-light" style={{ fontSize: '14px' }}>The flagship store of TAMBURINS,<br/>a contemporary beauty and lifestyle brand</div>
              <div className="text-white mt-[1rem] font-bold" style={{ fontSize: '18px' }}>3. Leeum Museum of Art</div>
              <div className="text-white font-light" style={{ fontSize: '14px' }}>A renowned museum showcasing a mix<br/>of traditional Korean art and contemporary works</div>
              <div className="text-white mt-[1rem] font-bold" style={{ fontSize: '18px' }}>4. National Museum of Korea</div>
              <div className="text-white font-light" style={{ fontSize: '14px' }}>The premier cultural institution showcasing<br/>the rich history and dirverse heritage</div>
            </div>
            </>
        )}
      </div>
      
      <div className="w-full flex flex-col justify-center items-center pb-[1.5rem]">
      {currentPage > 1 &&  (
        <><a href="https://maps.app.goo.gl/pdsDko7ZEo2vT9Np6" target="_blank" rel="noopener noreferrer">
                      <Image
                          className="text-black rounded-lg mx-auto mb-[0.5rem]"
                          src="/location.png"
                          alt="Location Button"
                          width={100}
                          height={100}
                          priority />
                          <div className="netflix-light text-white mb-[0.7rem] text-center" style={{ fontSize: '13px' }}>click here to open maps</div>
                  </a><Image
                          className="text-black rounded-lg py-1 px-2 mx-auto"
                          src="/previousbutton.png"
                          alt="previousbutton Logo"
                          onClick={previousPage}
                          width={50}
                          height={50}
                          priority /></>
          )}
           {currentPage < 2 && (
            <div className='flex flex-col'>
            <Image
              className="text-black rounded-lg py-1 px-2 mx-auto" 
              src="/nextbutton.png"
          alt="nextbutton Logo"
              onClick={nextPage}
              width={50}
              height={50}
              priority
            />
            </div>
          )}
        <Image
          src="/NetflixLogo2.png"
          alt="NetflixLogo2 Logo"
          className="mx-auto"
          width={140}
          height={70}
          priority
        />
      </div>
    </div>
  );
};

export default NearByPage;
