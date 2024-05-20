import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative h-screen w-screen flex flex-col justify-between items-center">
      <Image
        src="/mainPage.png"
        alt="Main Page Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="flex flex-col justify-center items-center text-center text-white z-10">
        <div className="w-[95%] mt-10">
          <div className="netflix-light mb-4" style={{ fontSize: '14px' }}>
            Embark on an unforgettable
          </div>
          <p className="font-black text-4xl mb-8">
            K-content<br/>Adventure
          </p>
          <div className="netflix-light mb-8" style={{ fontSize: '14px' }}>
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
        <Link href="/category">
          <div className="flex justify-center items-center">
            <Image
              className="text-black rounded-lg"
              src="/nextbutton.png"
              alt="Next Button"
              width={100}
              height={100}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
