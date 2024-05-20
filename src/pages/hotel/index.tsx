import Image from 'next/image';

const HotelInformationPage = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <div className="w-[95%] mt-[3rem] text-center"> 
        <p className="text-white mt-[1rem] mb-[1.5rem] font-black" style={{ fontSize: '25px' }}>HOTEL INFORMATION</p>
              <div className="netflix-light font-extrabold text-white my-auto" style={{ fontSize: '16px' }}>Hotel</div>
              <div className="netflix-light text-white my-auto mb-[1rem]" style={{ fontSize: '14px' }}>Mondrian Seoul Itaewon</div>
              <div className="netflix-light font-extrabold text-white my-auto" style={{ fontSize: '16px' }}>Address</div>
              <div className="netflix-light text-white my-auto" style={{ fontSize: '14px' }}>23 Jangmun-ro, Yongsan-gu, Seoul, Korea</div>
              <div className="flex justify-center w-full mx-auto gray-500 my-[2rem]">
                <hr className='w-[30%]'></hr>
              </div>
              <p className="text-white mt-[1rem] mb-[1.5rem] font-extrabold" style={{ fontSize: '22px' }}>CHECK-IN PROCESS</p>
              <div className="netflix-light font-extrabold text-white my-auto mb-[1rem]" style={{ fontSize: '16px' }}>Registration desk is located<br/>on the 1st floor of Mondrian Hotel</div>
              <div className="netflix-light font-extrabold text-white my-auto" style={{ fontSize: '16px' }}>Registration desk opens in May 29th, 9:00AM</div>
              <div className="netflix-light text-white my-auto" style={{ fontSize: '14px' }}>For early check-ins, please provide<br/>your name on the 2nd floor registration desk</div>
              <div className="flex justify-center w-full mx-auto gray-500 my-[2rem]">
                <hr className='w-[30%]'></hr>
              </div>
              <p className="text-white mt-[1rem] mb-[1.5rem] font-extrabold" style={{ fontSize: '22px' }}>HOTEL FACILITIES</p>
                <div className="netflix-light text-white my-auto font-medium" style={{ fontSize: '12px' }}>Gym</div>
                <div className="netflix-light text-white my-auto mb-[0.5rem]" style={{ fontSize: '11px' }}>Mondrian Hotel, 5F |06:00 AM - 10:00 PM</div>
                <div className="netflix-light text-white my-auto font-medium" style={{ fontSize: '12px' }}>Swimming Pool</div>
                <div className="netflix-light text-white my-auto mb-[0.5rem]" style={{ fontSize: '11px' }}>Mondrian Hotel, B2F | 06:00 AM</div>
                <div className="netflix-light text-white my-auto font-medium" style={{ fontSize: '12px' }}>Breakfast</div>
                <div className="netflix-light text-white my-auto mb-[0.5rem]" style={{ fontSize: '11px' }}>Mondrian Hotel, 1F CLEO restaurant | 06:30 - 10:00 AM</div>

      </div>
      <div className="w-full flex flex-col justify-center items-center pb-[1.5rem]">
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

export default HotelInformationPage;
