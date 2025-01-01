import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Herogearup = () => {
  return (
    <>
 
 <section className="px-4 md:px-8 lg:px-16 py-8">
      <h2 className="text-[#111111] text-xl sm:text-2xl text-center sm:text-left font-bold mb-8">
        Gear Up
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">

        <div>
          <div className="flex justify -center sm:justify-end gap-4 mb-6">
            <h3 className="text-[#111111] text-md md:text-lg font-medium ml-3">Shop Men&apos;s</h3>
            <div className="flex space-x-2 mr-2">
              <button className="p-3 bg-gray-200 rounded-full hover:bg-gray-300">
              <IoIosArrowBack />
              </button>
              <button className="p-3 bg-gray-200 rounded-full hover:bg-gray-300">
              <IoIosArrowForward />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            
            <div className="p-4  transition-transform duration-300 ease-in-out transform hover:scale-110">
              <Image
                src="/cart.jpg"
                alt="image"
                width={300}
                height={400}
                className="rounded-lg"
              />
                <div className="flex justify-between w-[284px]">
                <div className="flex flex-col w-[231px] ">

              <h4 className="text-[#111111] mt-4 text-sm md:text-base font-medium">
                Nike Dri-FIT ADV TechKnit Ultra
              </h4>
              <p className="text-base text-left font-normal text-[#757575]">
                Men&apos;s Short-Sleeve Running Top
              </p>
              </div>
              <p className="text-[#111111] mt-4 text-sm font-semibold">₹ 3 895</p>
            </div>
            </div>

            <div className="p-4 transition-transform duration-300 ease-in-out transform hover:scale-110 ">
              <Image
                src="/nike2.jpg"
                alt="image"
                width={300}
                height={400}
                className="rounded-lg"
              />
               <div className="flex justify-between w-[284px]">
               <div className="flex flex-col w-[231px] ">  

              <h4 className=" text-[#111111] mt-4 text-sm md:text-base font-medium">
                Nike Dri-FIT Challenger
              </h4>
              <p className="text-base text-left font-normal text-[#757575]">
                Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts
              </p>
              </div>
              <p className=" mtext-[#111111] mt-4 text-sm font-semibold">₹ 2 495</p>
            </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify -center sm:justify-end gap-4  mb-6">
            <h3 className=" text-[#111111] text-md md:text-lg font-medium ml-3">Shop Women&apos;s</h3>
            <div className="flex space-x-2 mr-2">
              <button className="p-3 bg-gray-200 rounded-full hover:bg-gray-300">
              <IoIosArrowBack />
              </button>
              <button className="p-3 bg-gray-200 rounded-full hover:bg-gray-300">
              <IoIosArrowForward />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            
            <div className="p-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
              <Image
                src="/girl.jpg"
                alt="image"
                width={300}
                height={400}
                className="rounded-lg"
              />
              <div className="flex justify-between w-[284px]">
              <div className="flex flex-col w-[231px] ">

              <h4 className="text-[#111111] mt-4 text-sm md:text-base font-medium">
                Nike Dri-FIT ADV Run Division
              </h4>
              <p className="text-base text-left font-normal text-[#757575]">
                Women&apos;s Long-Sleeve Running Top
              </p>
              </div>
              <p className="text-[#111111] mt-4 text-sm font-semibold">₹ 5 295</p>
            </div>
            </div>

            <div className="flex flex-col p-4 transition-transform duration-300 ease-in-out transform hover:scale-110 ">
              <Image
                src="/nike3.jpg"
                alt="image"
                width={300}
                height={400}
                className="rounded-lg"
              />
              <div className="flex justify-between w-[284px]">
              <div className="flex flex-col w-[231px] ">
              <h4 className=" text-[#111111] mt-4 text-sm md:text-base font-medium">
                Nike Fast
              </h4>
              <p className="text-base text-left font-normal text-[#757575]">
                Women&apos;s Mid-Rise 7/8 Running Leggings with Pockets
              </p>
              </div>
              <p className=" text-[#111111] mt-4 text-sm font-semibold">₹3 795</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Herogearup;
