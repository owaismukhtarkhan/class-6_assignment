import Link from "next/link";

export default function Forms() {
    return (
      <div className="bg-[#ffffff]">
        <h1 className="text-4xl font-semibold text-center text-[#233d7b] pt-12">
          Enter Your Details
        </h1>
  
        <form className="flex gap-5 justify-center items-center flex-col mt-10">
          <input
            type="name"
            className="border border-[#4980b7] rounded-md py-2 px-2 w-2/6 text-[#4980b7]"
            placeholder="Enter your Name"
          />
          <input
            type="email"
            className="border border-[#4980b7] rounded-md py-2 px-2 w-2/6 text-[#4980b7] mt-4"
            placeholder="Enter your email address"
          />
          <input
            type="password"
            className="border border-[#4980b7] rounded-md py-2 px-2 w-2/6 text-[#4980b7] mt-4"
            placeholder="Enter your Card Number"
          />
          <input
            type="address"
            className="border border-[#4980b7] rounded-md py-2 px-2 w-2/6 text-[#4980b7] mt-4"
            placeholder="Enter your Address"
          />
        <Link href="/thank-you/">
          <button className="bg-[#ffffff] text-[#4980b7] font-bold px-6 h-10 border border-solid rounded-md border-[#4980b7] hover:bg-[#4980b7] hover:text-[#ffffff] mt-4 mb-16">
              Place Order
            </button>
            </Link>  
        </form>
      </div>
    );
  }
  