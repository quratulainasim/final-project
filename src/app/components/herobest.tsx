import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const Herobest = () => {
  return (
    <>
      <div className="relative bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-2">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="font-bold text-xl text-[#111111] sm:text-2xl ml-0 md:ml-14">
            Best of Air Max
          </h2>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 space-x-0 md:space-x-2 mt-4 md:mt-0">
            <button className="px-4 py-2 font-bold text-[#111111]">Shop</button>
            <div className="flex space-x-2 pr-0 md:pr-12">
              <button className="flex items-center justify-center font-bold p-3 bg-[#F5F5F5] rounded-full">
                <IoIosArrowBack />
              </button>
              <button className="flex items-center justify-center p-3 bg-[#E5E5E5] rounded-full">
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="border border-white rounded-md p-1">
            <Image
              src="/Women.jpg"
              alt="image"
              width={440}
              height={440}
              className="mx-auto"
            />
            <div className="mt-4">
              <h3 className="text-center font-medium text-lg text-[#111111]">
                Nike Air Max Pulse
              </h3>
              <p className="text-center text-sm text-[#757575]">Women Shoes</p>
              <p className="text-center font-bold mt-1 text-[#111111]">
                ₹ 13,995
              </p>
            </div>
          </div>
          <div className="border border-white rounded-md p-1">
            <Image
              src="/men.jpg"
              alt="image"
              width={440}
              height={440}
              className="mx-auto"
            />
            <div className="mt-4">
              <h3 className="text-center font-medium text-lg text-[#111111]">
                Nike Air Max Pulse
              </h3>
              <p className="text-center text-[#757575] text-sm">Men Shoes</p>
              <p className="text-center font-bold mt-1 text-[#111111]">
                ₹ 13,995
              </p>
            </div>
          </div>
          <div className="border border-white rounded-md p-1">
            <Image
              src="/nikemax.jpg"
              alt="image"
              width={440}
              height={440}
              className="mx-auto"
            />
            <div className="mt-4">
              <h3 className="text-center font-medium text-lg text-[#111111]">
                Nike Air Max 97 SE
              </h3>
              <p className="text-center text-[#757575] text-sm">Men Shoes</p>
              <p className="text-center font-bold mt-1 text-[#111111]">
                ₹ 16,995
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herobest;
