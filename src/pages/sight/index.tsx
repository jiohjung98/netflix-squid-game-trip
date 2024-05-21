import Image from 'next/image';
import Link from 'next/link';

const SightSeeingPage = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <div className="w-[95%] my-auto mt-[1.5rem] text-center flex flex-col justify-center items-center h-full"> 
      
        <p className="text-white my-[1rem] font-extrabold" style={{ fontSize: '25px' }}>SIGHTSEEING</p>
        
        <div className='w-full flex flex-col justify-center items-center flex-grow'>
          <div className="text-white mt-[1rem] font-bold" style={{ fontSize: '18px' }}>1. Gyeongbokgung Palace</div>
          <div className="text-white font-light" style={{ fontSize: '16px' }}>the largest of the 5 Grand Palaces built<br/>during the Joseon dynasty</div>
          <div className="text-white mt-[1rem] font-bold" style={{ fontSize: '18px' }}>2. Changdeokgung Palace</div>
          <div className="text-white font-light" style={{ fontSize: '16px' }}>known for its garden,<br/>and a UNESCO World Heritage site</div>
          <div className="text-white mt-[1rem] font-bold" style={{ fontSize: '18px' }}>3. Bukchon Hanok Village</div>
          <div className="text-white font-light" style={{ fontSize: '16px' }}>features traditional Korean houses,<br/>and has cates and shops</div>
          <div className="text-white mt-[1rem] font-bold" style={{ fontSize: '18px' }}>4. Cheonggyecheon Stream</div>
          <div className="text-white font-light" style={{ fontSize: '16px' }}>10.9km long stream that cuts through Seoul</div>
        </div>
      </div>
      
      <div className="w-full flex flex-col justify-center items-center pb-[1.5rem]">
      <a href="https://maps.app.goo.gl/pdsDko7ZEo2vT9Np6" target="_blank" rel="noopener noreferrer">
        <Image
        className="text-black rounded-lg mx-auto mb-[0.5rem]"
        src="/location.png"
        alt="Location Button"
        width={100}
        height={100}
        priority />
    </a>
    <div className="netflix-light text-white mb-[0.7rem] text-center" style={{ fontSize: '13px' }}>click here to open maps</div>
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

export default SightSeeingPage;
