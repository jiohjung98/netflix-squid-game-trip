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
        />
      </div>
      <div className="top-minus-value flex flex-col justify-between items-center z-10 t-">
        <div className="my-auto text-center z-10">
          <div
            className="netflix-light text-white my-auto mb-[1rem] font-extrabold z-10"
            style={{ fontSize: "14px" }}
          >
            Embark on an unforgettable
          </div>
          <p
            className="text-white mt-[1rem] mb-[1rem] font-black z-10"
            style={{ fontSize: "30px" }}
          >
            K-content
            <br />
            Adventure
          </p>
          <div
            className="netflix-light text-white my-auto mb-[1rem] z-10"
            style={{ fontSize: "12px" }}
          >
            Join us for an exclusive journey through Korea,
            <br />
            where you can dive deep into your favorite
            <br />
            K-content like never before. We have an exciting
            <br />
            lineup of activities that will leave you craving for
            <br />
            more. Pack your bags and get ready for an
            <br />
            incredible experience in Korea!
            <br />
            <br />
            A Netflix host will warmly welcome you upon
            <br />
            arrival, with hotel transfers already arranged
            <br />
            for your convenience.
          </div>
        </div>
      </div>

      <div className="bottom-10 w-full flex justify-center items-center pb-[2.2rem] z-10">
        <Link href="/category">
          <Image
            className="text-black rounded-lg"
            src="/nextbutton.png"
            alt="Next Button"
            width={80}
            height={80}
          />
        </Link>
      </div>
    </div>
  );
}
