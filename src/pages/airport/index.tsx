import Image from 'next/image';

const AirportPickupPage = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <div className="w-[95%] my-auto mt-[1rem] text-center"> 
        <Image
          src="/NetflixLogo.png"
          alt="NetflixLogo Logo"
          className="mx-auto"
          width={60}
          height={120}
        />
        <p className="text-white mt-[1rem] mb-[1rem]" style={{ fontSize: '25px' }}>AIRPORT PICKUP</p>
        <p className="text-white mt-[1rem] mb-[1.5rem]" style={{ fontSize: '16px' }}>MEET UP POINT</p>
        <div className="netflix-light text-white font-bold" style={{ fontSize: '14px' }}>Incheon Airport</div>
        <div className="netflix-light text-white mb-[1rem]" style={{ fontSize: '12px' }}>Terminal 1, 1st floor | Gate 5</div>
        <div className="netflix-light text-white font-bold" style={{ fontSize: '14px' }}>Gimpo Airport</div>
        <div className="netflix-light text-white mb-[1rem]" style={{ fontSize: '12px' }}>International terminal, 1st floor | Gate 1</div>

        <hr className='w-[30%] mx-auto mt-[2rem] gray-500'></hr>
        <p className="text-white mt-[2rem] mb-[1.5rem]" style={{ fontSize: '25px' }}>WHO WILL BE WAITING?</p>
        <div className="netflix-light text-white" style={{ fontSize: '12px' }}>Please find a staff member wearing</div>
        <div className="netflix-light text-white mb-[1rem]" style={{ fontSize: '12px' }}>a gray suit and holding a Netflix sign below.</div>
        <Image
          src="/NetflixDesktop.png"
          alt="NetflixDesktop Logo"
          className="mx-auto"
          width={60}
          height={120}
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center pb-[1.5rem]">
        <div className='text-white'>ONLY ON</div>
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
