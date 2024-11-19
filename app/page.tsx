import { IoMdStar } from "react-icons/io";
import { TfiStar } from "react-icons/tfi";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* First half */}

      <div className=" bg-gradient-to-b from-[#000001] to-[#012864]">
        <header>
          <h1 className="items-center text-center w-full pt-28 text-4xl text-[#ffffff]">
            Find Used Cars in Pakistan
          </h1>
          <p className="items-center text-center w-full pt-0 p-2 text-lg text-[#ffffff]">
            With thousands of cars, we have just the right one for you
          </p>

          <div className="flex justify-center items-center h-24 w-full">
            <button className="bg-[#ffffff] text-[#464e60] font-bold pl-2 py-1 px-28 h-10 border border-solid rounded-l-md">
              Car Make or Model
            </button>
            <button className="bg-[#ffffff] text-[#464e60] font-bold pl-2 py-1 px-20 h-10 border border-solid ">
              All Cities
            </button>
            <button className="bg-[#ffffff] text-[#464e60] font-bold pl-2 py-1 px-20 h-10 border border-solid ">
              Price Range
            </button>
            <button className="bg-[#3eb549] text-[#ffffff] font-bold text-xl pl-2 py-1 px-4 h-10 border border-solid rounded-r-md border-[#3eb549]">
              q
            </button>
          </div>
        </header>
      </div>

      {/* Second half */}

      <div className=" bg-[#ffffff]">
        <header>
          <h1 className="items-center text-center font-bold text-2xl w-full p-6 text-[#404040]">
            Sell Your Car on PakWheels and Get the Best Price
          </h1>
          <div className="flex justify-center items-center h-72 w-full -mt-10">
            <div className="flex justify-left items-center h-60 w-2/5 bg-[#ffffff] border-[#e6e6e6] border-2 pl-8">
              <ul>
                <li className="text-[#233d7b] text-xl font-bold mb-2">
                  Post your Ad on PakWheels
                </li>
                <li className="text-[#434343] text-sm mb-1">
                  Post your Ad for Free in 3 Easy Steps
                </li>
                <li className="text-[#434343] text-sm mb-1">
                  Get Genuine offers from Verified Buyers
                </li>
                <li className="text-[#434343] text-sm mb-1">
                  Sell your car Fast at the Best Price
                </li>
                <li>
                  <button className="bg-[#b73439] text-white text-bold text-xl rounded-md text-nowrap py-2 px-3 h-12 w-48 mt-3 mr-14 border border-solid border-transparent">
                    Post Your Ad
                  </button>
                </li>
              </ul>
            </div>

            <div className="flex justify-left items-center h-60 w-2/5 bg-[#ffffff] border-[#e6e6e6] border-2 pl-8">
              <ul>
                <li className="text-[#233d7b] text-xl font-bold mb-2">
                  Try PakWheels Sell It For Me
                </li>
                <li className="text-[#434343] text-sm mb-1">
                  Dedicated Sales Expert to Sell your Car
                </li>
                <li className="text-[#434343] text-sm mb-1">
                  We Bargain for you and share the Best Offer
                </li>
                <li className="text-[#434343] text-sm mb-1">
                  We ensure Safe & Secure Transaction
                </li>
                <li>
                  <button className="bg-[#518ecb] text-white text-bold text-xl rounded-md text-nowrap py-2 px-3 h-12 w-48 mt-3 mr-14 border border-solid border-transparent">
                    Register Your Car
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
      {/* Third half */}
      <div className=" bg-[#f2f3f3]">
      <header>
        <h1 className="item-center text-start font-bold text-2xl w-full p-8 pl-28 text-[#404040]">
            Featured New Cars
          </h1>
          <ul className="flex text-start text-[#434343] text-xl ml-32 pt-0 gap-10">
            <li className="font-bold hover:underline hover:underline-offset-8">Popular</li>
            <li className="hover:underline hover:underline-offset-8">Upcoming</li>
            <li className="hover:underline hover:underline-offset-8">Newly Launched</li>
          </ul>
        <nav className="flex justify-center items-center gap-x-4 bg-transparent h-96 w-full">
          <div className="flex justify-center items-center bg-[#ffffff] h-72 w-1/4 ml-28 text-center">
          <ul>
          <Link href="/toyota-corolla/">
          <Image className="-mt-4 ml-0"  src="/Toyota-Corolla.jpg" width={270} height={100} alt="Toyota Corolla" />
          </Link>
          <li className="text-[#233d7b] font-bold">Toyota Corolla</li>
          <li className="text-[#3eb549] text-sm">PKR 59.7-75.5 lacs</li>
          <li className="text-[#7b8397] text-sm pt-1 flex justify-center">
            <span className="text-yellow-400 flex mr-2"> <IoMdStar /><IoMdStar /><IoMdStar /><TfiStar /><TfiStar /></span> 621 Reviews</li>
          </ul>
          </div>
          <div className="flex justify-center items-center bg-[#ffffff] h-72 w-1/4 text-center">
          <ul>
          <Link href="/suzuki-alto/">
          <Image className="-mt-4 ml-0"  src="/Suzuki-Alto.jpg" width={270} height={100} alt="Suzuki Alto" />
          </Link>
          <li className="text-[#233d7b] font-bold">Suzuki Alto</li>
          <li className="text-[#3eb549] text-sm">PKR 23.3-30.5 lacs</li>
          <li className="text-[#7b8397] text-sm pt-1 flex justify-center">
            <span className="text-yellow-400 flex mr-2"> <IoMdStar /><IoMdStar /><IoMdStar /><TfiStar /><TfiStar /></span> 200 Reviews</li>
          </ul>
          </div>
          <div className="flex justify-center items-center bg-[#ffffff] h-72 w-1/4 text-center">
          <ul>
          <Link href="/honda-city/">
          <Image className="-mt-4 ml-0"  src="/Honda-City.jpg" width={270} height={100} alt="Honda City" />
          </Link>
          <li className="text-[#233d7b] font-bold">Honda City</li>
          <li className="text-[#3eb549] text-sm">PKR 46.5-58.5 lacs</li>
          <li className="text-[#7b8397] text-sm pt-1 flex justify-center">
            <span className="text-yellow-400 flex mr-2"> <IoMdStar /><IoMdStar /><IoMdStar /><TfiStar /><TfiStar /></span> 458 Reviews</li>
          </ul>
          </div>
          <div className="flex justify-center items-center bg-[#ffffff] h-72 w-1/4 mr-28 text-center">
          <ul>
          <Link href="/honda-civic/">
          <Image className="-mt-4 ml-0"  src="/Honda-Civic.jpg" width={270} height={100} alt="Honda Civic" />
          </Link>
          <li className="text-[#233d7b] font-bold">Honda Civic</li>
          <li className="text-[#3eb549] text-sm">PKR 86.6-99.0 lacs</li>
          <li className="text-[#7b8397] text-sm pt-1 flex justify-center">
            <span className="text-yellow-400 flex mr-2"> <IoMdStar /><IoMdStar /><IoMdStar /><TfiStar /><TfiStar /></span> 358 Reviews</li>
          </ul>
          </div>
        </nav>
      </header>
      </div>
    </div>
  );
}
