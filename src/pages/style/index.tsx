import Image from 'next/image';

const StyleGuildPage = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <div className="w-[95%] mt-[3rem] text-center"> 
        <p className="text-white mt-[1rem] mb-[1.5rem] font-black" style={{ fontSize: '25px' }}>STYLE GUIDE</p>
              <div className="netflix-light font-extrabold text-white" style={{ fontSize: '20px' }}>DAY 1</div>
              <div className="netflix-light font-bold text-white my-auto mb-[1rem]" style={{ fontSize: '18px' }}>May 29</div>
              <div className="netflix-light text-white my-auto" style={{ fontSize: '14px' }}>Casual outfit of your choice</div>
              <div className="flex justify-center w-full mx-auto gray-500 my-[2rem]">
                <hr className='w-[30%]'></hr>
              </div>
              <div className="netflix-light font-extrabold text-white" style={{ fontSize: '20px' }}>DAY 2</div>
              <div className="netflix-light font-bold text-white my-auto mb-[1rem]" style={{ fontSize: '18px' }}>May 30</div>
              <div className="netflix-light text-white my-auto" style={{ fontSize: '14px' }}>Casual outfit of your choice</div>
              <div className="flex justify-center w-full mx-auto gray-500 my-[2rem]">
                <hr className='w-[30%]'></hr>
              </div>
              <div className="netflix-light font-extrabold text-white" style={{ fontSize: '20px' }}>DAY 3</div>
              <div className="netflix-light font-bold text-white my-auto mb-[1rem]" style={{ fontSize: '18px' }}>May 31</div>
              <div className="netflix-light font-extrabold text-white" style={{ fontSize: '20px' }}>Set Visit</div>
              <div className="netflix-light text-white mb-[1rem]" style={{ fontSize: '14px' }}>VIP themed attire.<br/>
VIP facial masks will be given out at the set in Daejeon</div>
<div className="netflix-light font-extrabold text-white" style={{ fontSize: '20px' }}>Dinner</div>
              <div className="netflix-light text-white mb-[1rem]" style={{ fontSize: '14px' }}>VIP themed attire.<br/>
              We'll stop by the hotel between set visit<br/>
and dinner for you to take a break and change if necessary</div>
             
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

export default StyleGuildPage;
