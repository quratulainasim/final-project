import React from "react";
import Image from "next/image";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
const Productdetail = () => {
  return (
    <>
    <Header />
      <div className="w-[1200px] h-[1125px] pt-12 mx-auto">
        <div className="mx-auto flex flex-wrap">
          <div>
            <Image
              src="/p3.jpg"
              alt="image"
              width={653}
              height={653}
              className="pt-[100px] rounded"
            />
          </div>
          <div className="w-[376px] h-[1041px] ml-[80px] mt-[90px]">
            <h1 className="w-[376px] h-[96px] text-[#111111] text-5xl font-medium mb-6">
              Nike Air Force 1 PLT.AF.ORM
            </h1>

            <div className="w-[376px] h-[413px] pt-1">
              <p className="w-[374px] h-[252px] text-sm font-normal text-[#111111] leading-7">
                Turn style on its head with this crafted take on the Air Jordan
                1 Mid. Its &quot;inside out&quot;-inspired construction, including unique
                layering and exposed foam accents, ups the ante on this timeless
                Jordan Brand silhouette. Details like the deco stitching on the
                Swoosh add coveted appeal, while the unexpected shading, rich
                mixture of materials and aged midsole aesthetic give this
                release an artisan finish.
              </p>

              <div className="w-[294px] h-[90px] ">
                <span className="w-[292px] h-[34px] font-medium text-4xl text-[#111111]">
                  ₹ 8 695.00
                </span>
              </div>
            </div>
            <div className="w-[174px] h-[44px] rounded-full mt-[-90px] bg-[#111111] flex justify-center items-center gap-2 ">
              <Image
                src="/button.png"
                alt="image"
                width={29}
                height={29}
                className="text-white font-medium text-[15px]"
              />
              <span className="w-[99px] h-[29px] font-medium text-sm text-center p-1 text-white">
                Add To Cart
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Productdetail;
