import { useState } from 'react';
import Image from 'next/image';

const AirportPickupPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage <= 1 ? 1 : currentPage - 1);
  };

  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <div className="w-[95%] mt-[3rem] text-center"> 
    
        <p className="text-white mt-[1rem] mb-[1rem] font-black" style={{ fontSize: '25px' }}>AIRPORT PICKUP</p>
        {currentPage === 1 && (
          <>
            <p className="text-white mt-[1rem] mb-[1.5rem] font-extrabold" style={{ fontSize: '16px' }}>MEET UP POINT</p>
            <div className="netflix-light text-white font-bold" style={{ fontSize: '14px' }}>Incheon Airport</div>
            <div className="netflix-light text-white mb-[1rem]" style={{ fontSize: '12px' }}>Terminal 1, 1st floor | Gate 5</div>
            <div className="netflix-light text-white font-bold" style={{ fontSize: '14px' }}>Gimpo Airport</div>
            <div className="netflix-light text-white mb-[1rem]" style={{ fontSize: '12px' }}>International terminal, 1st floor | Gate 1</div>
            <div className="flex justify-center w-[30%] mx-auto gray-500">
              <div className='flex'></div>
              <div className="flex justify-center w-full mx-auto gray-500">
                <hr className='w-[70%]'></hr>
              </div>
            </div>
            <p className="text-white mt-[2rem] mb-[1.5rem] font-extrabold" style={{ fontSize: '25px' }}>WHO WILL BE WAITING?</p>
            <div className="netflix-light text-white" style={{ fontSize: '12px' }}>Please find a staff member wearing</div>
            <div className="netflix-light text-white mb-[1rem]" style={{ fontSize: '12px' }}>a gray suit and holding a Netflix sign below.</div>
            <div className='flex'>
           
            </div>
          </>
        )}
        {currentPage === 2 && (
          <div>
            <p className="netflix-bold text-white mt-[1rem] mb-[1.5rem] font-extrabold" style={{ fontSize: '16px' }}>NETFLIX VAN DEPARTURE TIME</p>
            <div className="netflix-light text-white mb-[1rem]" style={{ fontSize: '12px' }}>Please check your assigned shuttle pickup<br/>time according to when you arrive.</div>
            <div className="netflix-light text-white" style={{ fontSize: '12px' }}>If you have any delays, please contact<br/>us at the emergency number below.</div>
            <div className="flex justify-center w-[30%] mx-auto gray-500 my-[3rem]">
              <div className='flex'></div>
              <div className="flex justify-center w-full mx-auto gray-500">
                <hr className='w-[70%]'></hr>
              </div>
            </div>
            <p className="text-white mb-[1.5rem] font-black text-center" style={{ fontSize: '25px' }}>EMERGENCY CONTACT</p>
            <div className='flex w-full mx-auto justify-center align-items'>
              <div className="netflix-light font-extrabold text-white my-auto" style={{ fontSize: '16px' }}>Dongmin Kim</div>
              <div className="netflix-light text-white my-auto" style={{ fontSize: '12px' }}> (+82 10-7777-9927)</div>
            </div>
            <div className="netflix-light text-white my-auto mb-[1rem]" style={{ fontSize: '12px' }}>dongmin.kim@bitecomm.co.kr</div>
            <div className='flex w-full mx-auto justify-center align-items'>
              <div className="netflix-light font-extrabold text-white my-auto" style={{ fontSize: '16px' }}>Jungwoo Eun</div>
              <div className="netflix-light text-white my-auto" style={{ fontSize: '12px' }}> (+82 10-7922-3829)</div>
            </div>
            <div className="netflix-light text-white my-auto" style={{ fontSize: '12px' }}>jungwoo.eun@bitecomm.co.kr</div>
          </div>
        )}
      </div>
      <div className="w-full flex flex-col justify-center items-center pb-[1.5rem]">
        <div className="flex justify-center w-[30%] mx-auto gray-500">
          {currentPage > 1 &&  (<Image
              className="text-black rounded-lg py-1 px-2" 
              src="/previousbutton.png"
          alt="previousbutton Logo"
              onClick={previousPage}
              width={50}
              height={50}
            />
          )}
          {currentPage < 2 && (
            <div className='flex flex-col'>
             <Image
             src="/NetflixDesktop.png"
             alt="NetflixDesktop Logo"
             className="mx-auto mb-[1rem]"
             width={60}
             height={120}
           />
            <Image
              className="text-black rounded-lg py-1 px-2" 
              src="/nextbutton.png"
          alt="nextbutton Logo"
              onClick={nextPage}
              width={50}
              height={50}
            />
            </div>
          )}
        </div>
        <Image
          src="/NetflixLogo2.png"
          alt="NetflixLogo2 Logo"
          className="mx-auto"
          width={140}
          height={70}
        />
      </div>
    </div>
  );
};

export default AirportPickupPage;
