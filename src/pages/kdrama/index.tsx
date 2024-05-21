import Image from 'next/image';
import Link from 'next/link';

const KdramaPage = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <div className="w-[95%] my-auto mt-[1.5rem] text-center flex flex-col justify-center items-center h-full"> 
      
        <p className="text-white my-[1rem] font-extrabold" style={{ fontSize: '25px' }}>ICONIC K-DRAMA<br/>FILMING LOCATIONS</p>
        
        <div className='w-full flex flex-col justify-center items-center flex-grow'>
          <div className="text-white mt-[1rem] font-bold" style={{ fontSize: '18px' }}>1. Hyundai Mall</div>
          <div className="text-white font-light" style={{ fontSize: '14px' }}>If you're a Queen of Tears fan,<br/>this will be all too familiar</div>
          <div className="text-white mt-[1rem] font-bold" style={{ fontSize: '18px' }}>2. Namsan Tower (N Seoul Tower)</div>
          <div className="text-white font-light" style={{ fontSize: '14px' }}>Popular date spot in K-dramas<br/>and was featured in Boys Over Flower,<br/>The Legend of the Blue Sea, Itaewon Class etc</div>
          <div className="text-white mt-[1rem] font-bold" style={{ fontSize: '18px' }}>3. Yonsei University</div>
          <div className="text-white font-light" style={{ fontSize: '14px' }}>One of the top universities and filming location<br/>for dramas such as Reply 1994,<br/>My Sassy Girl, Abyss etc</div>
        </div>
      </div>
      
      <div className="w-full flex flex-col justify-center items-center pb-[1.5rem]">
      <a href="https://maps.app.goo.gl/VccPpXryj4SieFKE9" target="_blank" rel="noopener noreferrer">
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

export default KdramaPage;
