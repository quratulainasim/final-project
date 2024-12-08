import React from "react";
import Image from "next/image";
function Hero() {
  return (
    <>
      <div className="flex w-[1440px] h-[44px] flex-col justify-center items-center pt-[10px] pb-[4px] bg-[#F5F5F5] flex-shrink-0">
        <div className="flex w-[105.153px] h-[17px] flex-col justify-center flex-shrink-0 text-center text-black text-sm font-normal mt-2">
          {" "}
          Hello Nike App
        </div>
        <div className="flex w-[1440px] h-[44px] flex-col justify-center items-center gap-[3px] flex-shrink-0 ">
          <p className="text-center text-[11px] font-normal text-black">
            Download the app to access everything Nike
            <span className="text-black  text-[11px] font-medium underline ml-[5px]">
              Get Your Great
            </span>
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1440px] h-[5442.359px] flex-shrink-0">
        <div className="flex w-full max-w-[1344px] flex-col justify-center items-center gap-12 ">
          <Image src="/shoe1.jpg" alt="image" width={1200} height={1200} />
          <div className="w-[1008px] h-[229px]  mr-[168px] ml-[168px] ">
            <p className="text-center text-[15px] font-medium leading-[24px] text-black">
              First Look
            </p>
            <p className="text-center text-[56px] font-medium leading-[60px] text-black">
              Nike Air Max Pulse
            </p>
            <p className="text-center text-[14px] font-normal leading-[24px] p-1 w-auto-[511px] ml-[248px] mr-[248px] text-black">
              Extreme comfort.Hyper durable.Max volume.Introducing the Air Max
              Pulse —designed to push you past your limits and help you go to
              the max.
            </p>
            <div className="w-[1008px] h-[45px] mr-[379px] ml-[373px] mt-2 items-center flex gap-2">
              <div className="w-[110px] h-[39px] rounded-3xl pr-4 pt-2 pl-2 text-sm text-white text-center items-center  bg-black">
                Notify Me
              </div>
              <div className="w-[138px] h-[39px] rounded-3xl pr-4 pt-2 pl-2 text-sm text-white text-center items-center  bg-black">
                Shop Air Max
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
