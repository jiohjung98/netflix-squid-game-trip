import Image from 'next/image';

const WeatherForcastPage = () => {
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
        <p className="text-white mt-[1rem] mb-[1.5rem]" style={{ fontSize: '25px' }}>WEATHER FORECAST</p>
        <div className="netflix-light text-white mb-[1rem]" style={{ fontSize: '14px' }}>Avg. daytime weather: 24°C (75.2°F)</div>
        <div className="netflix-light text-white mb-[1rem]" style={{ fontSize: '14px' }}>Avg. nighttime weather: 15°C (59°F)</div>
        <div className="netflix-light text-white mb-[1rem]" style={{ fontSize: '14px' }}>Avg. daily temperature range: 9°C (48.2°F)</div>
        <hr className='w-[30%] mx-auto mt-[2rem] gray-500'></hr>
        <p className="text-white mt-[2rem] mb-[1.5rem]" style={{ fontSize: '25px' }}>ADDITIONAL THINGS<br/>RECOMMENDED TO BRING</p>
        <div className="netflix-light text-white mb-[1rem]" style={{ fontSize: '14px' }}>Umbrella, sunscreen</div>
        <div className="netflix-light text-white mb-[1rem]" style={{ fontSize: '14px' }}>Adapter (Korea uses 220V), portable charger</div>
        <div className="netflix-light text-white mb-[1rem]" style={{ fontSize: '14px' }}>Any necessary medications</div>
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

export default WeatherForcastPage;
