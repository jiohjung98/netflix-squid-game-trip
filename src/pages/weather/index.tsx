import Image from 'next/image';
import Link from 'next/link';

const WeatherForcastPage = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <div className="w-[95%] my-auto mt-[1.5rem] text-center flex flex-col justify-center items-center h-full"> 
      
        <p className="text-white mt-[1rem] mb-[1rem] font-extrabold" style={{ fontSize: '25px' }}>WEATHER FORECAST</p>
        
        <div className='w-full flex flex-col justify-center items-center flex-grow'>
          <div className="text-white mt-[1rem] mb-[1rem] font-medium" style={{ fontSize: '22px' }}>May 29 Wednesday<br/>16°C / 26°C (78°F)</div>
          <div className="text-white mt-[1rem] mb-[1rem] font-medium" style={{ fontSize: '22px' }}>May 30 Thursday<br/>17°C / 26°C (77°F)</div>
          <div className="text-white mt-[1rem] mb-[1rem] font-medium" style={{ fontSize: '22px' }}>May 31 Friday<br/>16°C / 26°C (78°F)</div>
        </div>
        
        {/* <div className="netflix-light text-white mb-[1.5rem]" style={{ fontSize: '14px' }}>Avg. daytime weather: 24°C (75.2°F)</div>
        <div className="netflix-light text-white mb-[1.5rem]" style={{ fontSize: '14px' }}>Avg. night time weather: 15°C (59°F)</div>
        <div className="netflix-light text-white mb-[1.5rem]" style={{ fontSize: '14px' }}>Avg. daily temperature range: 9°C (48.2°F)</div>
        <div className="flex justify-center w-full mx-auto gray-500 my-[3rem]">
                <hr className='w-[30%]'></hr>
              </div>
        <p className="text-white mt-[2rem] mb-[1.5rem] font-extrabold" style={{ fontSize: '25px' }}>ADDITIONAL THINGS<br/>RECOMMENDED TO BRING</p>
        <div className="netflix-light text-white mb-[1.5rem]" style={{ fontSize: '14px' }}>Umbrella, sunscreen</div>
        <div className="netflix-light text-white mb-[1.5rem]" style={{ fontSize: '14px' }}>Adapter (Korea uses 220V), portable charger</div>
        <div className="netflix-light text-white mb-[1.5rem]" style={{ fontSize: '14px' }}>Any necessary medications</div> */}
      </div>
      
      <div className="w-full flex flex-col justify-center items-center pb-[1.5rem]">
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

export default WeatherForcastPage;
