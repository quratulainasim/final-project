import React from "react";
import Image from "next/image";

const Herodontmiss = () => {
  return (
    <>
<div className="py-16 px-8">
        <div className="mx-auto w-full">
          <h2 className="text-[#111111] text-xl font-bold mb-8 text-left font-sans">Don&apos;t Miss</h2>
          <div className=" w-full">
      <div className="max-w-full relative">
        <Image
          src="/nike4.jpg" 
          alt="image"
          width={1300}
          height={700}
          className="mx-auto"
        />
      </div>
        </div>
        </div>
        </div>
       
        <div className="relative py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
        
          <h1 className="text-[52px]  leading-[60px] text-center text-[#111111] font-bold">
            Flight Essentials
          </h1>
          <p className="mt-4 text-lg text-[#111111]">
            Your buit to last all weeks wears-but with style only Joran Brand can deliver
          </p>
          <button className="mt-6 px-6 py-3 bg-[#111111] text-white font-medium rounded-full">
            Shop
          </button>
        </div>
      </div>

    </>
  );
}

export default Herodontmiss;
