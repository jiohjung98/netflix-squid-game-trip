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
          <Link href="/shop">
            <div className="block rounded-lg rounded-lg" style={{ backgroundColor: '#E50914' }}>
              <p className="text-white font-bold py-4 px-4 rounded-lg text-left mb-8">Shopping</p>
            </div>
          </Link>
          <Link href="/kdrama">
            <div className="block rounded-lg" style={{ backgroundColor: '#E50914' }}>
              <p className="text-white font-bold py-4 px-4 rounded-lg text-left mb-8">Iconic K-drama Filming Locations</p>
            </div>
          </Link>
          <Link href="/nearby">
            <div className="block rounded-lg" style={{ backgroundColor: '#E50914' }}>
              <p className="text-white font-bold py-4 px-4 rounded-lg text-left mb-8">Things To Do Near Hotel</p>
            </div>
          </Link>
          <Link href="/otherActivities">
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
