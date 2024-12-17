import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Herogearup = () => {
  return (
    <>
      <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#111111] text-xl sm:text-2xl font-bold mb-12 text-left">
            Gear Up
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
            <div className="flex flex-col items-start md:flex-row md:items-center md:space-x-4">
              <h2 className="text-[#111111] text-base md:text-xl font-bold">
                Shop Men
              </h2>
              <button className="flex items-center justify-center p-3 bg-[#F5F5F5] rounded-full ml-0 md:ml-2">
                <IoIosArrowBack />
              </button>
              <button className="flex items-center justify-center p-3 bg-[#E5E5E5] rounded-full ml-2">
                <IoIosArrowForward />
              </button>
            </div>
            <div className="flex flex-col items-start md:flex-row md:items-center md:space-x-4">
              <h2 className="text-[#111111] text-base md:text-xl font-bold">
                Shop Women
              </h2>
              <button className="flex items-center justify-center p-3 bg-[#F5F5F5] rounded-full ml-0 md:ml-2">
                <IoIosArrowBack />
              </button>
              <button className="flex items-center justify-center p-3 bg-[#E5E5E5] rounded-full ml-2">
                <IoIosArrowForward />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col p-1 text-center items-center transition-transform duration-300 ease-in-out transform hover:scale-110 ">
              <Image
                src="/cart.jpg"
                alt="image"
                width={300}
                height={400}
                className="rounded-lg"
              />
              <div className="flex justify-between w-[284px]">
                <div className="flex flex-col w-[231px] ">
                  <p className="font-medium  text-[#111111] text-left  text-sm mt-2">
                    Nike Dri-FIT ADV TechKnit Ultra
                  </p>
                  <p className="text-[#757575] text-base text-left font-normal">
                    Men&apos;s Short-Sleeve Running Top
                  </p>
                </div>
                <p className="text-sm text-[#111111] mt-2">₹ 3,895</p>
              </div>
            </div>

            <div className="flex flex-col p-1 text-center items-center transition-transform duration-300 ease-in-out transform hover:scale-110">
              <Image
                src="/nike2.jpg"
                alt="image"
                width={300}
                height={400}
                className="rounded-lg"
              />
              <div className="flex justify-between w-[284px]">
                <div className="flex flex-col w-[231px] ">
                  <p className="font-medium text-[#111111] text-left  text-sm mt-2 ">
                    Nike Dri-FIT Challenger
                  </p>
                  <p className="text-[#757575] text-base text-left font-normal">
                    Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts
                  </p>
                </div>
                <p className="text-[#757575] text-sm mt-2">₹ 2,495</p>
              </div>
            </div>

            <div className="flex flex-col p-1 text-center items-center transition-transform duration-300 ease-in-out transform hover:scale-110">
              <Image
                src="/girl.jpg"
                alt="image"
                width={300}
                height={400}
                className="rounded-lg"
              />
              <div className="flex justify-between w-[284px]">
                <div className="flex flex-col w-[231px] ">
                  <p className="text-[#111111] font-medium  text-left  text-sm mt-2">
                    Nike Dri-FIT ADV Run Division
                  </p>
                  <p className="text-[#757575] text-base text-left font-normal">
                    Women&apos;s Long-Sleeve Running Top
                  </p>
                </div>
                <p className="text-sm text-[#757575] mt-2">₹ 5,295</p>
              </div>
            </div>

            <div className="flex flex-col p-1 text-center items-center transition-transform duration-300 ease-in-out transform hover:scale-110 ">
              <Image
                src="/nike3.jpg"
                alt="image"
                width={300}
                height={400}
                className="rounded-lg"
              />
              <div className="flex justify-between w-[284px]">
                <div className="flex flex-col w-[231px] ">
                  <p className="font-medium text-[#111111] text-left  text-sm mt-2">
                    Nike Fast
                  </p>
                  <p className="text-[#757575] text-base text-left font-normal">
                    Women&apos;s Mid-Rise 7/8 Running Leggings with Pockets
                  </p>
                </div>
                <p className="text-sm text-[#757575] mt-2 ">₹ 3,795</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herogearup;
