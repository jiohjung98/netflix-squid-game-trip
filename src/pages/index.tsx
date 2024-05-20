import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      <Image
        src="/mainPage.png"
        alt="Main Page Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="relative flex flex-col justify-between items-center h-screen z-10 my-auto">
        <div className="w-[95%] my-auto text-center z-10">
        <div className="netflix-light text-white my-auto mt-[0.5rem] mb-[1rem] z-10" style={{ fontSize: '14px' }}>
          Embark on an unforgettable
          </div>
          <p className="text-white mt-[1rem] mb-[1.5rem] font-black z-10" style={{ fontSize: '30px' }}>
          K-content<br/>Adventure
          </p>
          <div className="netflix-light text-white my-auto mb-[1rem] z-10" style={{ fontSize: '14px' }}>
          Join us for an exclusive journey through Korea,<br/> 
          where you can dive deep into your favorite<br/>
          K-content like never before. We have an exciting<br/>
          lineup of activities that will leave you craving for<br/>
          more. Pack your bags and get ready for an<br/>
          incredible experience in Korea!<br/>
          <br/>
          A Netflix host will warmly welcome you upon<br/>arrival, with hotel transfers already arranged<br/>
          for your convenience.
          </div>
         
        </div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center items-center pb-[2.2rem] z-10">
      <Link href="/category">
        <Image
          className="text-black rounded-lg"
          src="/nextbutton.png"
          alt="Next Button"
          width={100}
          height={100}
        />
        </Link>
      </div>
    </div>
  );
}
