// import { useState } from 'react';
// import Image from 'next/image';

// const ExploringPage = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const nextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const previousPage = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   return (
//     <div className="flex flex-col justify-between items-center h-screen">
//       <div className="w-[95%] mt-[1.5rem] text-center"> 
//         {currentPage === 1 && (
//           <>
//             <p className="text-white mt-[1rem] mb-[1.5rem] font-black" style={{ fontSize: '25px' }}>PLACES TO VISIT<br/>IN SEOUL</p>
//             <div className="netflix-light font-extrabold text-white mb-[1.5rem]" style={{ fontSize: '20px' }}>RESTAURANT<br/>&<br/>BAR RECOMMENDATIONS</div>
//             <div className="netflix-light font-bold text-white my-auto" style={{ fontSize: '16px' }}>1. Buja Pizza</div>
//             <div className="netflix-light text-white mb-[0.7rem] font-light" style={{ fontSize: '13px' }}>A popular spot known<br/>for its delicious and unique pizzas.</div>
        
//             <div className="netflix-light font-bold text-white my-auto" style={{ fontSize: '16px' }}>2. Champ Coffee</div>
//             <div className="netflix-light text-white mb-[0.7rem] font-light" style={{ fontSize: '13px' }}>A cozy cafe famous for its<br/>high-quality coffee and inviting atmosphere.</div>

//             <div className="netflix-light font-bold text-white my-auto" style={{ fontSize: '16px' }}>3. Myeongdong Kyoja</div>
//             <div className="netflix-light text-white mb-[0.7rem] font-light" style={{ fontSize: '13px' }}>A well-loved restaurant famous for<br/>its Korean dumplings and noodle dishes. (Michelin)</div>

//             <div className="netflix-light font-bold text-white my-auto" style={{ fontSize: '16px' }}>4. Kieari</div>
//             <div className="netflix-light text-white mb-[0.7rem] font-light" style={{ fontSize: '13px' }}>Famous Dessert cafe making a healthy cake<br/>(no butter)</div>

//             {/* <div className="netflix-light font-bold text-white my-auto" style={{ fontSize: '16px' }}>5. Bo Market</div>
//             <div className="netflix-light text-white mb-[0.7rem]" style={{ fontSize: '13px' }}>A trendy market-style venue offering a variety of<br/>food and drink options in a lively atmosphere.</div> */}

//           </>
//         )}
//         {currentPage === 2 && (
//             <>
//             <p className="text-white mt-[1rem] mb-[1.5rem] font-black" style={{ fontSize: '25px' }}>PLACES TO VISIT<br/>IN SEOUL</p>
//             <div className="netflix-light font-extrabold text-white mb-[1.5rem]" style={{ fontSize: '20px' }}>TOURIST SPOTS<br/>AROUND THE HOTEL</div>
//             <div className="netflix-light font-bold text-white my-auto" style={{ fontSize: '16px' }}>1. Hyundai Vinyl & Plastic</div>
//             <div className="netflix-light text-white mb-[0.7rem] font-light" style={{ fontSize: '13px' }}>An experiential space where you can<br/>freely listen to and handle vinyl records.</div>
        
//             <div className="netflix-light font-bold text-white my-auto" style={{ fontSize: '16px' }}>2. TAMBURINS Hannam flagship store</div>
//             <div className="netflix-light text-white mb-[0.7rem] font-light" style={{ fontSize: '13px' }}>The flagship store of TAMBURINS,<br/>a contemporary beauty and lifestyle brand.</div>

//             <div className="netflix-light font-bold text-white my-auto" style={{ fontSize: '16px' }}>3. Leeum Museum of Art</div>
//             <div className="netflix-light text-white mb-[0.7rem] font-light" style={{ fontSize: '13px' }}>A renowned museum showcasing a mix<br/>of traditional Korean art and contemporary works.</div>

//             <div className="netflix-light font-bold text-white my-auto" style={{ fontSize: '16px' }}>4. NATIONAL MUSEUM OF KOREA</div>
//             <div className="netflix-light text-white mb-[0.7rem] font-light" style={{ fontSize: '13px' }}>The premier cultural institution showcasing<br/>the rich history and diverese heritage.</div>
//             <div className='flex flex-col w-full mt-auto'>
//           </div>
//           </>
//         )}
//         {currentPage === 3 && (
//            <>
//            <p className="text-white mt-[1rem] mb-[2.5rem] font-black" style={{ fontSize: '25px' }}>PLACES TO VISIT<br/>IN SEONGSU</p>
//            <div className="netflix-light font-bold text-white my-auto" style={{ fontSize: '16px' }}>1. Dior Seongsu</div>
//            <div className="netflix-light text-white mb-[0.7rem] font-light" style={{ fontSize: '13px' }}>Gorgeous boutique café from Dior</div>
       
//            <div className="netflix-light font-bold text-white my-auto" style={{ fontSize: '16px' }}>2. SM Entertainment</div>
//            <div className="netflix-light text-white mb-[0.7rem] font-light" style={{ fontSize: '13px' }}>Experiential space for K-POP Entertainment</div>

//            <div className="netflix-light font-bold text-white my-auto" style={{ fontSize: '16px' }}>3. Satur The T-Shirt Shop Pop-Up</div>
//            <div className="netflix-light text-white mb-[0.7rem] font-light" style={{ fontSize: '13px' }}>A pop-up for Satur graphic<br/>tees with a vintage LP vibe</div>

//            <div className="netflix-light font-bold text-white my-auto" style={{ fontSize: '16px' }}>4. Jayeondo Salted Bakery</div>
//            <div className="netflix-light text-white mb-[0.7rem] font-light" style={{ fontSize: '13px' }}>The hottest bakery with salted bread</div>

//            <div className="netflix-light font-bold text-white my-auto" style={{ fontSize: '16px' }}>5. Nudecake Seongsu</div>
//            <div className="netflix-light text-white mb-[0.7rem] font-light" style={{ fontSize: '13px' }}>A museum concept dessert<br/>café that even impresses</div>
          
//          </>
//         )}
//       </div>
//       <div className="w-full flex flex-col justify-center items-center pb-[1.5rem]">
//       <div className='flex flex-col w-full mt-auto'>
//       {currentPage === 2 && (
//       <><a href="https://maps.app.goo.gl/Crscso1JC7vkhEqY6" target="_blank" rel="noopener noreferrer">
//                           <Image
//                               className="text-black rounded-lg mx-auto mt-[1rem]"
//                               src="/location.png"
//                               alt="Location Button"
//                               width={100}
//                               height={100}
//                               priority />
//                       </a><div className="netflix-light text-white mb-[0.7rem] text-center" style={{ fontSize: '13px' }}>click here to open maps</div></>
//       )}
//         {currentPage === 3 && (
//            <><a href="https://maps.app.goo.gl/pdsDko7ZEo2vT9Np6" target="_blank" rel="noopener noreferrer">
//                           <Image
//                               className="text-black rounded-lg mx-auto mt-[1rem]"
//                               src="/location.png"
//                               alt="Location Button"
//                               width={100}
//                               height={100}
//                               priority />
//                       </a><div className="netflix-light text-white mb-[0.7rem] text-center" style={{ fontSize: '13px' }}>click here to open maps</div></>
//         )}
//     </div>
//         <div className="flex justify-center w-[30%] mx-auto">
//         {currentPage > 1 && (
//             <Image
//               className="text-black rounded-lg py-1 px-2"
//               src="/previousbutton.png"
//               alt="Previous Button"
//               onClick={previousPage}
//               width={50}
//               height={50}
//               priority
//             />
//           )}
//           {currentPage < 3 && (
//             <Image
//               className="text-black rounded-lg py-1 px-2"
//               src="/nextbutton.png"
//               alt="Next Button"
//               onClick={nextPage}
//               width={50}
//               height={50}
//               priority
//             />
//           )}
//         </div>

//         <Image
//           src="/NetflixLogo2.png"
//           alt="NetflixLogo2 Logo"
//           className="mx-auto"
//           width={140}
//           height={70}
//           priority
//         />
//       </div>
//     </div>
//   );
// };

// export default ExploringPage;

import Link from 'next/link';

const ExploringPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 rounded-lg shadow-lg w-[95%] h-[90%] my-auto"> 
          <h2 className="font-bold text-white text-center my-[3rem]" style={{ fontSize: "18px" }}>RECOMMENDED<br/>TOURIST SPOTS AND RESTAURANTS</h2>
        <div className="space-y-4">
          <Link href="/sight">
            <div className="block rounded-lg" style={{ backgroundColor: '#E50914' }}>
              <p className="text-white font-bold py-4 px-4 rounded-lg text-left mb-8">Sightseeing</p>
            </div>
          </Link>
          <Link href="/airport">
            <div className="block rounded-lg rounded-lg" style={{ backgroundColor: '#E50914' }}>
              <p className="text-white font-bold py-4 px-4 rounded-lg text-left mb-8">Shopping</p>
            </div>
          </Link>
          <Link href="/hotel">
            <div className="block rounded-lg" style={{ backgroundColor: '#E50914' }}>
              <p className="text-white font-bold py-4 px-4 rounded-lg text-left mb-8">Iconic K-drama Filming Locations</p>
            </div>
          </Link>
          <Link href="/style">
            <div className="block rounded-lg" style={{ backgroundColor: '#E50914' }}>
              <p className="text-white font-bold py-4 px-4 rounded-lg text-left mb-8">Things To Do Near Hotel</p>
            </div>
          </Link>
          <Link href="/seoul">
            <div className="block rounded-lg" style={{ backgroundColor: '#E50914' }}>
              <p className="text-white font-bold py-4 px-4 rounded-lg text-left mb-8">Other Activities</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploringPage;
