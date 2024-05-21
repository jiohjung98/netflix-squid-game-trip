import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
    <div className="w-full my-auto text-center"> 
        <Image
          src="/mainPhotos.png"
          alt="mainPhotos"
          layout="responsive"
          width={1920} 
          height={300} 
          quality={100}
          priority
        />
      </div>
      <div className="top-minus-value flex flex-col justify-between items-center z-10 t-">
        <div className="my-auto text-center z-10">
          <div
            className="netflix-light text-white my-auto mb-[1rem] font-light z-10"
            style={{ fontSize: "14px" }}
          >
            Embark on an unforgettable
          </div>
          <p
            className="text-white mt-[1rem] mb-[1rem] font-black z-10"
            style={{ fontSize: "30px" }}
          >
            NETFLIX JOURNEY
          </p>
          <div
            className="netflix-light text-white my-auto mb-[1rem] z-10"
            style={{ fontSize: "12px" }}
          >
            Join us for an exclusive journey through Korea,
            <br />
            featuring an exciting lineup of activities<br />
            that will leave you craving more.<br />
            Pack your bags and prepare for an incredible experience!
            <br />
            <br />
            Upon arrival, you'll be warmly welcomed by a Netflix host, <br />
            and we've arranged hotel transfers for your convenience.
          </div>
        </div>
      </div>

      <div className="bottom-10 w-full flex justify-center items-center pb-[2.2rem] z-10">
        <Link href="/category">
        <div
            className="text-white mt-[1rem] mb-[1rem] font-black z-10"
            style={{ fontSize: "25px" }}
          >
            ENTER
          </div>
        </Link>
      </div>
    </div>
  );
}
