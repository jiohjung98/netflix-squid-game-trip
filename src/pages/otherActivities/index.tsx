import Image from 'next/image';
import Link from 'next/link';

const OtherActivitiesPage = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <div className="w-[95%] my-auto mt-[1.5rem] text-center flex flex-col justify-center items-center h-full"> 
      
        <p className="text-white my-[1rem] font-extrabold" style={{ fontSize: '25px' }}>OTHER ACTIVITIES</p>
        
        <div className='w-full flex flex-col justify-center items-center flex-grow'>
          <div className="text-white my-[1rem] font-bold" style={{ fontSize: '18px' }}>Personal color analysis</div>
          <div className="text-white font-light" style={{ fontSize: '14px' }}>A hot trend in Korea,<br/>this personalized consultation determines<br/>your complementary color palette<br/>based on your skin tone, hair color and eye color.<br/>It you're looking for English speakers,<br/>try out Cocory</div>
    
        </div>
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

export default OtherActivitiesPage;
