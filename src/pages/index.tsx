import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <div className="w-[40%] mt-[5rem] text-center">
        <Image
          src="/mainLogo.png"
          alt="mainLogo"
          layout="responsive"
          width={200}
          height={200}
          quality={100}
          priority
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center flex-grow">
        <div className="my-auto text-center z-10 flex flex-col justify-center items-center h-full">
          <div
            className="netflix-light text-white font-light z-10 mb-[4rem]"
            style={{ fontSize: "14px" }}
          >
            Embark on an unforgettable
          </div>
          <p
            className="text-white mt-[1rem] mb-[1rem] font-black z-10"
            style={{ fontSize: "32px" }}
          >
            NETFLIX JOURNEY
          </p>
          <div
            className="netflix-light text-white mt-[3rem] mb-[1rem] z-10"
            style={{ fontSize: "12px" }}
          >
            Join us for an exclusive journey through Korea,
            <br />
            featuring an exciting lineup of activities
            <br />
            that will leave you craving more.
            <br />
            Pack your bags and prepare for an incredible experience!
            <br />
            <br />
            Upon arrival, you'll be warmly welcomed by a Netflix host,
            <br />
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
