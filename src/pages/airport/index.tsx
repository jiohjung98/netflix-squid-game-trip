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
      <p className="text-white mt-[2.5rem] mb-[1rem] font-black" style={{ fontSize: '25px' }}>AIRPORT PICKUP</p>
       <div className='w-full flex flex-col justify-center text-center items-center flex-grow'>
        {currentPage === 1 && (
          <>
            <p className="text-white mt-[1rem] mb-[1rem] font-extrabold" style={{ fontSize: '20px' }}>MEET UP POINT</p>
            <div className="netflix-light text-white font-bold" style={{ fontSize: '14px' }}>Incheon Airport</div>
            <div className="netflix-light text-white font-light" style={{ fontSize: '13px' }}>Terminal 1, 1st floor | Gate 5</div>
            <Image
             src="/airport3.png"
             alt="airport3 Logo"
             className="mx-auto mt-[0.3rem] mb-[1rem]"
             width={340}
             height={200}
             priority
           />
            <div className="netflix-light text-white font-light" style={{ fontSize: '13px' }}>Terminal 2, 1st floor | Gate 5</div>
            <Image
             src="/airport2.png"
             alt="airport2 Logo"
             className="mx-auto mt-[0.3rem] mb-[1rem]"
             width={340}
             height={200}
             priority
           />
            <div className="flex justify-center w-full mx-auto gray-500 my-[0.5rem]">
                <hr className='w-[30%]'></hr>
              </div>
            <div className="netflix-light text-white font-bold" style={{ fontSize: '14px' }}>Gimpo Airport</div>
            <div className="netflix-light text-white font-light" style={{ fontSize: '13px' }}>International terminal, 1st floor | Gate 1</div>
            <Image
             src="/airport4.png"
             alt="airport4 Logo"
             className="mx-auto mt-[0.3rem] mb-[1rem]"
             width={340}
             height={200}
             priority
           />
          </>
        )}
        {currentPage === 2 && (
          <div>
            <p className="text-white mt-[2rem] mb-[1.5rem] font-extrabold" style={{ fontSize: '20px' }}>WHO WILL BE WAITING?</p>
            <div className="netflix-light text-white font-light" style={{ fontSize: '13px' }}>Please find a staff member wearing</div>
            <div className="netflix-light text-white mb-[1rem] font-light" style={{ fontSize: '13px' }}>a gray suit and holding a Netflix sign below.</div>
            <Image
             src="/NetflixDesktop.png"
             alt="NetflixDesktop Logo"
             className="mx-auto mb-[1rem]"
             width={100}
             height={200}
             priority
           />
            <div className="flex justify-center w-full mx-auto gray-500 my-[3rem]">
                <hr className='w-[30%]'></hr>
              </div>
            <p className="netflix-bold text-white mt-[1rem] mb-[1.5rem] font-extrabold" style={{ fontSize: '20px' }}>NETFLIX VAN DEPARTURE TIME</p>
            <div className="netflix-light text-white mb-[1rem] font-light" style={{ fontSize: '13px' }}>Please check your assigned shuttle pickup<br/>time according to when you arrive.</div>
            <div className="netflix-light text-white font-light" style={{ fontSize: '13px' }}>If you experience any delays,<br/>please reach out to your Netflix handler.</div>
          </div>
        )}

      </div>
      <div className="w-full flex flex-col justify-center items-center pb-[1.5rem]">
        <div className="flex justify-center w-[30%] mx-auto gray-500">
          {currentPage > 1 &&  (<Image
              className="text-black rounded-lg py-1 px-2 mx-auto" 
              src="/previousbutton.png"
          alt="previousbutton Logo"
              onClick={previousPage}
              width={50}
              height={50}
              priority
            />
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
        </div>
        <Image
          src="/NetflixLogo2.png"
          alt="NetflixLogo2 Logo"
          className="mx-auto pt-[1rem]"
          width={140}
          height={70}
          priority
        />
      </div>
    </div>
  );
};

export default AirportPickupPage;
