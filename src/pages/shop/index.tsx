import Image from 'next/image';
import Link from 'next/link';

const ShoppingPage = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <div className="w-[95%] my-auto mt-[1.5rem] text-center flex flex-col justify-center items-center h-full"> 
      
        <p className="text-white my-[1rem] font-extrabold" style={{ fontSize: '25px' }}>SHOPPING</p>
        
        <div className='w-full flex flex-col justify-center items-center flex-grow'>
          <div className="text-white mt-[1rem] font-bold" style={{ fontSize: '18px' }}>1. Gangnam District</div>
          <div className="text-white font-light" style={{ fontSize: '16px' }}>epitomizes modern Seoult<br/>with its high-rise buildings and luxury brands</div>
          <div className="text-white mt-[1rem] font-bold" style={{ fontSize: '18px' }}>2. Myeongdong</div>
          <div className="text-white font-light" style={{ fontSize: '16px' }}>the center for all things K-beauty and street food.<br/>Myeongdong Kyoja is also a well-loved restaurant<br/>famous for its Korean dumplings and noodle dishes</div>
          <div className="text-white mt-[1rem] font-bold" style={{ fontSize: '18px' }}>3. Hongdae</div>
          <div className="text-white font-light" style={{ fontSize: '16px' }}>located near Hongik University,<br/>this area is known for its music scene and bars</div>
          <div className="text-white mt-[1rem] font-bold" style={{ fontSize: '18px' }}>4. Hannam-dong</div>
          <div className="text-white font-light" style={{ fontSize: '16px' }}>known for boutique shopping, cates and restaurants</div>
          <div className="text-white mt-[1rem] font-bold" style={{ fontSize: '18px' }}>5. Gwangjang Market,<br/>Namdaemun Market, Bo Market</div>
          <div className="text-white font-light" style={{ fontSize: '16px' }}>If you're looking to try traditional Korean street food,<br/>this is where you'll want to check out</div>
        </div>
      </div>
      
      <div className="w-full flex flex-col justify-center items-center pb-[1.5rem]">
      <a href="https://maps.app.goo.gl/8PDUo394xKEktHfZ7" target="_blank" rel="noopener noreferrer">
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

export default ShoppingPage;
