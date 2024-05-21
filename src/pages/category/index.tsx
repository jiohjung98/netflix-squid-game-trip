import Link from 'next/link';

const CategoryPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-[95%] h-[90%] my-auto border-red-700"> 
          <h2 className="text-4xl font-bold text-black text-center my-[4rem]">Contents</h2>
        <div className="space-y-4">
          <Link href="/weather">
            <div className="block rounded-lg" style={{ backgroundColor: '#E50914' }}>
              <p className="text-white font-bold py-4 px-4 rounded-lg text-left mb-8">Weather Forecast</p>
            </div>
          </Link>
          <Link href="/airport">
            <div className="block rounded-lg rounded-lg" style={{ backgroundColor: '#E50914' }}>
              <p className="text-white font-bold py-4 px-4 rounded-lg text-left mb-8">Airport Pickup</p>
            </div>
          </Link>
          <Link href="/hotel">
            <div className="block rounded-lg" style={{ backgroundColor: '#E50914' }}>
              <p className="text-white font-bold py-4 px-4 rounded-lg text-left mb-8">Hotel Information</p>
            </div>
          </Link>
          <Link href="/style">
            <div className="block rounded-lg" style={{ backgroundColor: '#E50914' }}>
              <p className="text-white font-bold py-4 px-4 rounded-lg text-left mb-8">Style Guide</p>
            </div>
          </Link>
          <Link href="/seoul">
            <div className="block rounded-lg" style={{ backgroundColor: '#E50914' }}>
              <p className="text-white font-bold py-4 px-4 rounded-lg text-left mb-8">Exploring Seoul</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
