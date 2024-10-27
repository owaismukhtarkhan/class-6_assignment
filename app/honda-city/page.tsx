import Image from "next/image";
import Link from "next/link";

export default function Honda_City() {
  return (
    <div className=" bg-gradient-to-b from-[#000001] to-[#012864]">
        <h1 className="item-center text-center w-full pt-2 text-4xl text-[#233d7b] bg-[#ffffff]">
        Honda City 2024 Price in Pakistan, Images, Reviews & Specs</h1>
      <div className="flex justify-center bg-[#ffffff] text-center">
        <ul>
          <Image
            className="ml-48"
            src="/Honda-City.jpg"
            width={400}
            height={100}
            alt="Honda City"
          />
          <div className="flex gap-10 -mt-10">
            <button className="bg-[#ffffff] text-[#4980b7] font-bold px-6 h-10 border border-solid rounded-md border-[#4980b7] hover:bg-[#4980b7] hover:text-[#ffffff]">
              Book A Test Drive
            </button>
            <button className="bg-[#ffffff] text-[#4980b7] font-bold px-6 h-10 border border-solid rounded-md border-[#4980b7] hover:bg-[#4980b7] hover:text-[#ffffff]">
              Request Bank Finance
            </button>
            <button className="bg-[#ffffff] text-[#4980b7] font-bold px-6 h-10 border border-solid rounded-md border-[#4980b7] hover:bg-[#4980b7] hover:text-[#ffffff]">
              Visit Place
            </button>
            <button className="bg-[#ffffff] text-[#4980b7] font-bold px-6 h-10 border border-solid rounded-md border-[#4980b7] hover:bg-[#4980b7] hover:text-[#ffffff]">
              Car Inspection
            </button>
          </div>
          <li className="text-[#233d7b] font-bold text-xl mt-4">Vehicle Description</li>
          <div className="flex justify-center text-[#000000] text-sm gap-x-2 mt-4">
            <h1 className="font-bold">Number of Doors</h1>
            <h1>4</h1>
            <h1 className="font-bold">Engine</h1>
            <h1>1800 CC</h1>
            <h1 className="font-bold">Condition</h1>
            <h1>8.5 / 10</h1>
            <h1 className="font-bold">Driven</h1>
            <h1>9,500 KM</h1>
            <h1 className="font-bold">Suspension Type</h1>
            <h1>Soft Suspension</h1>
          </div>
          <li className="text-[#3eb549] text-xl font-bold mt-4">PKR 46.5-58.5 lacs</li>
          <Link href="/forms/">
          <button className="bg-[#ffffff] text-[#4980b7] font-bold px-6 h-10 border border-solid rounded-md border-[#4980b7] hover:bg-[#4980b7] hover:text-[#ffffff] mt-4 mb-4">
              Buy Now
            </button>
            </Link>
        </ul>
      </div>
    </div>
  );
}
