import Image from 'next/image';

const HotelInformationPage = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <div className="w-[95%] mt-[1.5rem] text-center"> 
        <p className="text-white mt-[1rem] mb-[1.5rem] font-black z-10" style={{ fontSize: '25px' }}>HOTEL INFORMATION</p>
              <div className="netflix-light font-extrabold text-white my-auto z-10" style={{ fontSize: '16px' }}>Hotel</div>
              <div className="netflix-light text-white my-auto mb-[1rem] z-10 font-light" style={{ fontSize: '14px' }}>Mondrian Seoul Itaewon<br/>몬드리안 서울 이태원</div>
              <div className="netflix-light font-extrabold text-white my-auto z-10" style={{ fontSize: '16px' }}>Address</div>
              <div className="netflix-light text-white my-auto z-10 font-light" style={{ fontSize: '14px' }}>23 Jangmun-ro, Yongsan-gu, Seoul, Korea<br/>서울 용산구 장문로 23</div>
              <div className="flex justify-center w-full mx-auto gray-500 my-[1.5rem]  z-10">
                <hr className='w-[30%] z-10'></hr>
              </div>
              <p className="text-white mb-[1rem] font-extrabold z-10" style={{ fontSize: '20px' }}>CHECK-IN PROCESS</p>
              <div className="netflix-light font-bold text-white my-auto mb-[1rem] z-10" style={{ fontSize: '16px' }}>Registration desk is located<br/>on the 2nd floor of the hotel.<br/>Please provide your name at the desk.</div>
              <div className="flex justify-center w-full mx-auto gray-500 my-[1.5rem] z-10">
                <hr className='w-[30%]'></hr>
              </div>
              <p className="text-white mb-[1rem] font-extrabold z-10" style={{ fontSize: '20px' }}>HOTEL FACILITIES</p>
                <div className="netflix-light text-white my-auto font-bold z-10" style={{ fontSize: '16px' }}>Gym</div>
                <div className="netflix-light text-white my-auto mb-[0.5rem] z-10 font-light" style={{ fontSize: '14px' }}>Mondrian Hotel, 5F | 06:00 AM - 10:00 PM</div>
                <div className="netflix-light text-white my-auto font-bold z-10" style={{ fontSize: '16px' }}>Swimming Pool</div>
                <div className="netflix-light text-white my-auto mb-[0.5rem] z-10 font-light" style={{ fontSize: '14px' }}>Mondrian Hotel, B2F | 06:00 AM - 10:00 PM</div>
                <div className="netflix-light text-white my-auto font-bold z-10" style={{ fontSize: '16px' }}>Breakfast</div>
                <div className="netflix-light text-white my-auto mb-[0.5rem] z-10 font-light" style={{ fontSize: '14px' }}>Mondrian Hotel, 1F CLEO restaurant | 06:30 - 10:00 AM</div>
      </div>
      <div className="w-full flex flex-col justify-center items-center pb-[1.5rem]">
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

export default HotelInformationPage;
