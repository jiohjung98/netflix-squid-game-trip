import Image from 'next/image';

const DressCodePage = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <div className="w-[95%] mt-[1.5rem] text-center"> 
        <p className="text-white mt-[1rem] mb-[1.5rem] font-black" style={{ fontSize: '25px' }}>DRESS CODE</p>
              <div className="netflix-light font-extrabold text-white" style={{ fontSize: '20px' }}>DAY 1</div>
              <div className="netflix-light font-bold text-white my-auto mb-[0.5rem]" style={{ fontSize: '14px' }}>May 29</div>
              <div className="netflix-light font-bold text-white my-auto mb-[0.7rem]" style={{ fontSize: '16px' }}>Welcome Dinner</div>
              <div className="netflix-light text-white my-auto font-light" style={{ fontSize: '14px' }}>Casual wear for the welcome dinner</div>
              <div className="flex justify-center w-full mx-auto gray-500 my-[1rem]">
                <hr className='w-[30%]'></hr>
              </div>
              <div className="netflix-light font-extrabold text-white" style={{ fontSize: '20px' }}>DAY 2</div>
              <div className="netflix-light font-bold text-white my-auto mb-[0.5rem]" style={{ fontSize: '14px' }}>May 30</div>
              <div className="netflix-light font-bold text-white my-auto mb-[0.7rem]" style={{ fontSize: '16px' }}>Content Capture Day</div>
              <div className="netflix-light text-white my-auto font-light" style={{ fontSize: '14px' }}>Comfortable and easy to change out of,<br/>as tracksuits will be provided at the content studio</div>
              <div className="flex justify-center w-full mx-auto gray-500 my-[1rem]">
                <hr className='w-[30%]'></hr>
              </div>
              <div className="netflix-light font-extrabold text-white" style={{ fontSize: '20px' }}>DAY 3</div>
              <div className="netflix-light font-bold text-white my-auto mb-[0.5rem]" style={{ fontSize: '14px' }}>May 31</div>
              <div className="netflix-light font-bold text-white my-auto mb-[0.7rem]" style={{ fontSize: '16px' }}>Set Visit & Dinner</div>
              <div className="netflix-light text-white my-auto font-light" style={{ fontSize: '14px' }}>Channel your inner VIP from Squid Game<br/>Wear comfortable shoes, no heels,<br/>as you will be walking around the set</div>
              <div className="font-light-italic netflix-light text-white my-auto font-light" style={{ fontSize: '14px' }}>VIP facial masks will be given out at the set in Daejeon</div>
             
      </div>
      <div className="w-full flex flex-col justify-center items-center pb-[1.5rem]">
      <Image
          src="/dresscode.png"
          alt="dresscode Logo"
          className="mx-auto mt-[0.3rem]"
          width={320}
          height={70}
          priority
        />
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

export default DressCodePage;
