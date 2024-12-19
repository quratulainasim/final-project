import React from "react";
import Header from "../components/header";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Footer from "../components/footer";

function New() {
  return (
    <>
      <Header />

      <div className="w-[1440px] h-[51px] pt-4">
        <div className="w-[1344px] h-[36px] mx-12 sm:flex flex-col md:flex-row  md:space-y-1 pr-10">
          <div className="w-[1119px] h-[33px]">
            <h1 className="h-[32px] text-2xl text-[#111111] font-medium text-left">
              New (500)
            </h1>
          </div>
          <div className="w-[224px] h-[28px] pt-2 flex-col md:flex-row flex justify-between gap-1">
            <div className="w-[137px] h-[28px] flex-col md:flex-row md:space-y-2 flex justify-between items-center pr-1 ">
              <p className="font-normal text-base text-[#111111]">
                Hide Filters
              </p>
              <Image
                src="/newsymbol.png"
                alt="image"
                width={24}
                height={24}
                className="pr-1"
              />
            </div>
            <div className="w-[86px] h-[28px] pl-2 flex gap-1 items-center ">
              <p className="text-sm font-normal text-[#111111]">Sort</p>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1440px] pt-20 flex gap-3">
        <div className="w-[260px] h-[850px] flex ">
          <div className="hidden md:block w-[192px] h-[2145px] pl-[40px] ">
            <div className="w-[192px] h-[400px] ">
              <ul className="w-[180px] space-y-2 text-[#111111] font-medium text-[15px]">
                <li>Shoes</li>
                <li>Sports Bras</li>
                <li>Tops & T-Shirts</li>
                <li>Hoodies & Sweatshirts</li>
                <li>Jackets</li>
                <li>Trousers & Tights</li>
                <li>Shorts</li>
                <li>Tracksuits</li>
                <li>Jumpsuits & Rompers</li>
                <li>Skirts & Dresses</li>
                <li>Socks</li>
                <li>Accessories & Equipment</li>
              </ul>
            </div>

            <div className="w-[192px] h-[163px] border-t border-b mt-10 ">
              <div className="w-[188px] h-[48px] flex justify-between items-center">
                <p className="w-[58px] text-base font-normal text-[#111111] text-center">
                  Gender
                </p>
                <IoIosArrowUp />
              </div>
              <div className="w-[196px] h-[108px] pt-4 ">
                <div className="w-[188px] h-[24px] flex gap-2 mt-1">
                  <div className="w-[24px] h-[24px] border border-1 rounded-md text-[15px] text-[#111111] font-normal "></div>
                  <p>Men</p>
                </div>
                <div className="w-[188px] h-[24px] flex gap-2 mt-1">
                  <div className="w-[24px] h-[24px] border border-1 rounded-md text-[15px] text-[#111111] font-normal  "></div>
                  <p>Wome</p>
                </div>
                <div className="w-[188px] h-[24px] flex gap-2 mt-1">
                  <div className="w-[24px] h-[24px] border border-1 rounded-md  text-[15px] text-[#111111] font-normal"></div>
                  <p>Unisex</p>
                </div>
              </div>

              <div className="w-[192px] h-[163px]  border-b mt-4 ">
                <div className="w-[188px] h-[48px] flex justify-between items-center">
                  <p className="w-[58px] text-base font-normal text-[#111111] text-center">
                    Kids
                  </p>
                  <IoIosArrowUp />
                </div>
                <div className="w-[196px] h-[108px] pt-4 ">
                  <div className="w-[188px] h-[24px] flex gap-2 mt-1">
                    <div className="w-[24px] h-[24px] border border-1 rounded-md text-[15px] text-[#111111] font-normal "></div>
                    <p>Boys</p>
                  </div>
                  <div className="w-[188px] h-[24px] flex gap-2 mt-1">
                    <div className="w-[24px] h-[24px] border border-1 rounded-md mb-1 text-[15px] text-[#111111] font-normal "></div>
                    <p>Girls</p>
                  </div>
                </div>
              </div>

              <div className="w-[188px] h-[48px] flex justify-between items-center">
                <p className="w-[106px] text-base font-normal text-[#111111] text-center">
                  Shop by Price
                </p>
                <IoIosArrowUp />
              </div>
              <div className="w-[196px] h-[108px] pt-4 ">
                <div className="w-[188px] h-[24px] flex gap-2 mt-1">
                  <div className="w-[24px] h-[24px] border border-1 rounded-md text-[15px] text-[#111111] font-normal "></div>
                  <p>Under ₹ 2 500.00</p>
                </div>
                <div className="w-[188px] h-[24px] flex gap-2 mt-1">
                  <div className="w-[24px] h-[24px] border border-1 rounded-md mb-1 text-[15px] text-[#111111] font-normal"></div>
                  <p>₹ 2 501.00 - ₹</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block w-[11px] h-[849px] pl-[70px]">
            <div className="w-[7px] h-full rounded-md pl-[2px] pt-[2px] bg-black opacity-50 mb-0"></div>
          </div>
        </div>

        <div className="w-full sm:px-6 md:px-8 lg:px-12 sm:items-center md:items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
            <div className="border  border-white rounded-md p-3">
              <Image
                src="/p1.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Air Force 1 Mid &apos;07
                  </h2>
                  <p className="text-gray-500 font-normal text-sm">
                    Men&apos;s Shoes
                  </p>
                </div>
                <p className="font-normal text-sm text-center md:text-left text-gray-500">
                  1 Colour
                </p>
                <p className="text-[#111111] font-medium pt-3 text-center md:text-left text-sm">
                  MRP: ₹ 10,795.00
                </p>
              </div>
            </div>

            <div className="border border-white rounded-md p-3">
              <Image
                src="/p2.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Court Vision Low Next Nature
                  </h2>
                  <p className="text-[#757575] font-medium text-sm">
                    Men&apos;s Shoes
                  </p>
                </div>
                <p className="font-normal text-sm text-center md:text-left text-[#757575]">
                  1 Colour
                </p>
                <p className="text-[#111111] text-center md:text-left font-medium pt-3 text-sm">
                  MRP : ₹ 4 995.00
                </p>
              </div>
            </div>

            <div className="border  border-white rounded-md p-3">
              <Image
                src="/p3.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Air Force 1 PLT.AF.ORM
                  </h2>
                  <p className="text-[#757575] font-normal text-sm">
                    Women&apos;s Shoes
                  </p>
                </div>
                <p className="font-normal text-sm text-center md:text-left text-[#757575]">
                  1 Colour
                </p>
                <p className="text-[#111111] text-center md:text-left font-medium pt-3 text-sm">
                  MRP : ₹ 8 695.00
                </p>
              </div>
            </div>

            <div className="border  border-white rounded-md p-3">
              <Image
                src="/p4.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500]  font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Air Force 1 React
                  </h2>
                  <p className="text-gray-500 font-normal  text-sm">
                    Men&apos;s Shoes
                  </p>
                </div>
                <p className="font-normal text-sm text-center md:text-left text-[#757575]">
                  1 Colour
                </p>
                <p className="text-[#111111] font-medium pt-3  text-center md:text-left text-sm">
                  MRP : ₹ 13 295.00
                </p>
              </div>
            </div>

            <div className="border border-white rounded-md p-3">
              <Image
                src="/p5.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">
                    Promo Exclusion
                  </p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Air Jordan 1 Elevate Low
                  </h2>
                  <p className="text-[#757575] font-medium text-sm">
                    Women&apos;s Shoes
                  </p>
                </div>
                <p className="font-normal text-sm text-center md:text-left text-[#757575]">
                  1 Colour
                </p>
                <p className="text-[#111111] font-medium pt-3  text-center md:text-left text-sm">
                  MRP : ₹ 11 895.00
                </p>
              </div>
            </div>

            <div className="border  border-white rounded-md p-3">
              <Image
                src="/p6.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Standard Issue
                  </h2>
                  <p className="text-[#757575] font-normal text-sm">
                    Women&apos;s Basketball Jersey
                  </p>
                </div>
                <p className="font-normal text-sm text-center md:text-left text-[#757575]">
                  1 Colour
                </p>
                <p className="text-[#111111] font-medium text-center md:text-left pt-3 text-sm">
                  MRP : ₹ 2 895.00
                </p>
              </div>
            </div>

            <div className="border  border-white rounded-md p-3">
              <Image
                src="/p7.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">
                    Promo Exclusion
                  </p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Dunk Low Retro SE
                  </h2>
                  <p className="text-[#757575] font-normal text-sm">
                    Men&apos;s Shoes
                  </p>
                </div>
                <p className="font-normal text-sm text-center md:text-left text-gray-500">
                  1 Colour
                </p>
                <p className="text-[#111111] font-medium pt-3 text-center md:text-left text-sm">
                  MRP : ₹ 9 695.00
                </p>
              </div>
            </div>

            <div className="border border-white rounded-md p-3">
              <Image
                src="/p8.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">
                    Sustainable Materials
                  </p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Dri-FIT UV Hyverse
                  </h2>
                  <p className="text-[#757575] font-medium text-sm">
                    Men&apos;s Short-Sleeve Graphic Fitness Top
                  </p>
                </div>
                <p className="font-normal text-sm text-center md:text-left text-[#757575]">
                  1 Colour
                </p>
                <p className="text-[#111111] text-center md:text-left font-medium pt-3 text-sm">
                  MRP : ₹ 2 495.00
                </p>
              </div>
            </div>

            <div className="border  border-white rounded-md p-3">
              <Image
                src="/p9.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 space-y-1 text-center md:text-left">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Court Vision Low
                  </h2>
                  <p className="text-[#757575] font-normal text-sm">
                    Men&apos;s Shoes
                  </p>
                </div>
                <p className="font-normal text-sm text-center md:text-left text-[#757575]">
                  1 Colour
                </p>
                <p className="text-[#111111]  text-center md:text-left font-medium pt-3 text-sm">
                  MRP : ₹ 5 695.00
                </p>
              </div>
            </div>

            <div className="border  border-white rounded-md p-3">
              <Image
                src="/p10.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Dri-FIT Ready
                  </h2>
                  <p className="text-gray-500 font-normal text-sm">
                    Men&apos;s Short-Sleeve Fitness Top
                  </p>
                </div>
                <p className="font-normal text-sm text-center md:text-left text-[#757575]">
                  3 Colour
                </p>
                <p className="text-[#111111] font-medium pt-3  text-center md:text-left text-sm">
                  MRP : ₹ 2 495.00
                </p>
              </div>
            </div>

            <div className="border border-white rounded-md p-3">
              <Image
                src="/p11.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike One Leak Protection: Period
                  </h2>
                  <p className="text-[#757575] font-normal text-sm">
                    Women&apos;s Mid-Rise 18cm(approx.)Biker Shorts
                  </p>
                </div>
                <br />
                <p className="font-normal text-sm text-center md:text-left text-[#757575]">
                  2 Colour
                </p>
                <p className="text-[#111111]  text-center md:text-left font-medium pt-3 text-sm">
                  MRP : ₹ 3 395.00
                </p>
              </div>
            </div>

            <div className="border  border-white rounded-md p-3">
              <Image
                src="/p12.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Air Force 1 LV8 3
                  </h2>
                  <p className="text-[#757575] font-normal text-sm">
                    Older Kids&apos; Shoe
                  </p>
                </div>
                <p className="font-normal  text-center md:text-left text-sm text-[#757575]">
                  1 Colour
                </p>
                <p className="text-[#111111] text-center md:text-left font-medium pt-3 text-sm">
                  MRP : ₹ 7 495.00
                </p>
              </div>
            </div>

            <div className="border  border-white rounded-md p-3">
              <Image
                src="/p13.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Blazer Low Platform
                  </h2>
                  <p className="text-[#757575] font-normal text-sm">
                    Women&apos;s Shoes
                  </p>
                </div>
                <p className="font-normal text-sm text-center md:text-left text-[#757575]">
                  1 Colour
                </p>
                <p className="text-[#111111] text-center md:text-left font-medium pt-3 text-sm">
                  MRP : ₹ 8 195.00
                </p>
              </div>
            </div>

            <div className="border border-white rounded-md p-3">
              <Image
                src="/p14.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Air Force 1 &apos;07
                  </h2>
                  <p className="text-[#757575] font-normal  text-sm">
                    Women&apos;s Shoes
                  </p>
                </div>
                <p className="font-normal text-center md:text-left text-sm text-[#757575]">
                  2 Colour
                </p>
                <p className="text-[#111111]  text-center md:text-left font-medium pt-3 text-sm">
                  MRP : ₹ 8 195.00
                </p>
              </div>
            </div>

            <div className="border  border-white rounded-md p-3">
              <Image
                src="/p15.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Pro Dri-FIT
                  </h2>
                  <p className="text-[#757575] font-normal text-sm">
                    Men&apos;s Tight-Fit Sleeveless Top
                  </p>
                </div>
                <p className="font-normal text-sm text-center md:text-left text-[#757575]">
                  1 Colour
                </p>
                <p className="text-[#111111] font-medium pt-3 text-center md:text-left text-sm">
                  MRP : ₹ 1 495.00
                </p>
              </div>
            </div>

            <div className="border  border-white rounded-md p-3">
              <Image
                src="/p16.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1  text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Dunk Low Retro
                  </h2>
                  <p className="text-[#757575] font-normal text-sm">
                    Men&apos;s Shoes
                  </p>
                </div>
                <p className="font-normal text-sm text-center md:text-left text-[#757575]">
                  1 Colour
                </p>
                <p className="text-[#111111] text-center md:text-left font-medium pt-3 text-sm">
                  MRP : ₹ 8 695.00
                </p>
              </div>
            </div>

            <div className="border border-white rounded-md p-3">
              <Image
                src="/p17.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Air Max SC
                  </h2>
                  <p className="text-[#757575] font-normal text-sm">
                    Women&apos;s Shoes
                  </p>
                </div>
                <p className="font-normal text-sm  text-center md:text-left text-[#757575]">
                  2 Colour
                </p>
                <p className="text-[#111111] text-center md:text-left font-medium pt-3 text-sm">
                  MRP : ₹ 5 995.00
                </p>
              </div>
            </div>

            <div className="border  border-white rounded-md p-3">
              <Image
                src="/p18.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Dri-FIT UV Miler
                  </h2>
                  <p className="text-[#757575] font-normal text-sm">
                    Men&apos;s Short-Sleeve Running Top
                  </p>
                </div>
                <p className="font-normal text-center md:text-left  text-sm text-[#757575]">
                  1 Colour
                </p>
                <p className="text-[#111111] text-center md:text-left font-medium pt-3 text-sm">
                  MRP : ₹ 1 695.00
                </p>
              </div>
            </div>

            <div className="border  border-white rounded-md p-3">
              <Image
                src="/p19jpg.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1  text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Air Max SYSTM
                  </h2>
                  <p className="text-[#757575] font-normal text-sm">
                    Older Kids&apos; Shoes
                  </p>
                </div>
                <p className="font-normal text-center md:text-left  text-sm text-[#757575]">
                  1 Colour
                </p>
                <p className="text-[#111111] text-center md:text-left font-medium pt-3 text-sm">
                  MRP : ₹ 6 495.00
                </p>
              </div>
            </div>

            <div className="border border-white rounded-md p-3">
              <Image
                src="/p20.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1  text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Alate All U
                  </h2>
                  <p className="text-[#757575] font-normal text-sm">
                    Women&apos;s Light-Support Lightly Lined U-Neck Printed
                    Sports Bra
                  </p>
                </div>
                <br />
                <p className="font-normal text-center md:text-left text-sm  text-[#757575]">
                  1 Colour
                </p>
                <p className="text-[#111111] text-center md:text-left font-medium pt-3 text-sm">
                  MRP : ₹ 2 195.00
                </p>
              </div>
            </div>

            <div className="border  border-white rounded-md p-3">
              <Image
                src="/p21.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Court Legacy Lift
                  </h2>
                  <p className="text-[#757575] font-normal text-sm">
                    Women&apos;s Shoes
                  </p>
                </div>
                <p className="font-normal text-center md:text-left text-sm text-[#757575]">
                  2 Colour
                </p>
                <p className="text-[#111111] text-center md:text-left font-medium pt-3 text-sm">
                  MRP : ₹ 7 495.00
                </p>
              </div>
            </div>

            <div className="border  border-white rounded-md p-3">
              <Image
                src="/p22.png"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Swoosh
                  </h2>
                  <p className="text-[#757575] font-normal text-sm">
                    Women&apos;s Medium-support Padded Sports Bra Tank
                  </p>
                </div>
                <br />
                <p className="font-normal text-center md:text-left text-sm text-[#757575]">
                  2 Colour
                </p>
                <p className="text-[#111111] text-center md:text-left font-medium pt-3 text-sm">
                  MRP : ₹ 3 095.00
                </p>
              </div>
            </div>

            <div className="border border-white rounded-md p-3">
              <Image
                src="/p23.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike SB Zoom Janoski OG+
                  </h2>
                  <p className="text-[#757575] font-normal text-sm">Shoes</p>
                </div>

                <p className="font-normal text-center md:text-left  text-sm text-[#757575]">
                  1 Colour
                </p>
                <p className="text-[#111111] text-center md:text-left font-medium pt-3 text-sm">
                  MRP : ₹ 8 595.00
                </p>
              </div>
            </div>

            <div className="border  border-white rounded-md p-3">
              <Image
                src="/p24.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Dri-FIT Run Division Rise 365
                  </h2>
                  <p className="text-[#757575] font-normal text-sm">
                    Men&apos;s Running Tank
                  </p>
                </div>
                <p className="font-normal text-center md:text-left  text-sm text-[#757575]">
                  2 Colour
                </p>
                <p className="text-[#111111] text-center md:text-left font-medium pt-3 text-sm">
                  MRP : ₹ 3 495.00
                </p>
              </div>
            </div>

            <div className="border  border-white rounded-md p-3">
              <Image
                src="/nike2.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Dri-FIT Challenger
                  </h2>
                  <p className="text-[#757575] font-normal text-sm">
                    Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts
                  </p>
                </div>
                <br />
                <p className="font-normal text-center md:text-left text-sm text-[#757575]">
                  1 Colour
                </p>
                <p className="text-[#111111] text-center md:text-left  font-medium pt-3 text-sm">
                  MRP : ₹ 2 495.00
                </p>
              </div>
            </div>

            <div className="border border-white rounded-md p-3">
              <Image
                src="/p25.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Jordan Series ES
                  </h2>
                  <p className="text-[#757575] font-normal text-sm">
                    Men&apos;s Shoes
                  </p>
                </div>
                <p className="font-normal text-center md:text-left text-sm text-[#757575]">
                  2 Colour
                </p>
                <p className="text-[#111111] text-center md:text-left font-medium pt-3 text-sm">
                  MRP : ₹ 7 495.00
                </p>
              </div>
            </div>

            <div className="border  border-white rounded-md p-3">
              <Image
                src="/p26.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Outdoor Play
                  </h2>
                  <p className="text-[#757575] font-normal text-sm">
                    Older Kids&apos; Oversized Woven Jacket
                  </p>
                </div>
                <p className="font-normal text-center md:text-left text-sm text-[#757575]">
                  1 Colour
                </p>
                <p className="text-[#111111] text-center md:text-left font-medium pt-3 text-sm">
                  MRP : ₹ 3 895.00
                </p>
              </div>
            </div>

            <div className="border  border-white rounded-md p-3">
              <Image
                src="/p27.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1  text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Sportswear Trend
                  </h2>
                  <p className="text-[#757575] font-normal text-sm">
                    Older Kids&apos; (Girls&apos;) High-waisted Woven Shorts
                  </p>
                </div>
                <br />
                <p className="font-normal  text-center md:text-left text-sm text-[#757575]">
                  2 Colour
                </p>
                <p className="text-[#111111]  text-center md:text-left font-medium pt-3 text-sm">
                  MRP : ₹ 2 495.00
                </p>
              </div>
            </div>

            <div className="border border-white rounded-md p-3">
              <Image
                src="/p28.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1  text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike Blazer Low &apos;77 Jumbo
                  </h2>
                  <p className="text-[#757575] font-normal text-sm">
                    Women&apos;s Shoes
                  </p>
                </div>
                <p className="font-normal text-center md:text-left text-sm text-[#757575]">
                  1 Colour
                </p>
                <p className="text-[#111111] text-center md:text-left font-medium pt-3 text-sm">
                  MRP : ₹ 8 595.00
                </p>
              </div>
            </div>

            <div className="border  border-white rounded-md p-3">
              <Image
                src="/p29.jpg"
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
              <div className="w-full h-auto pt-6 px-3">
                <div className="w-full h-auto pt-1 text-center md:text-left space-y-1">
                  <p className="text-sm text-[#9E3500] font-medium">Just In</p>
                  <h2 className="text-sm text-[#111111] font-medium">
                    Nike SB Force 58
                  </h2>
                  <p className="text-[#757575] font-normal text-sm">
                    Skate Shoe
                  </p>
                </div>
                <p className="font-normal text-center md:text-left text-sm text-[#757575]">
                  1 Colour
                </p>
                <p className="text-[#111111] text-center md:text-left  font-medium pt-3 text-sm">
                  MRP : ₹ 5 995.00
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-7xl border-t-2 h-auto border-slate-200 mt-32">
            <p className="w-full sm:w-[181px] pt-16 text-lg font-medium text-left">
              Related Categories
            </p>
            <div className="w-full h-auto pt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
              <button className="w-full sm:w-auto rounded-xl text-center border text-xs font-normal text-[#111111] py-2">
                Best Selling Products
              </button>
              <button className="w-full sm:w-auto rounded-xl text-center border text-xs font-normal text-[#111111] py-2">
                Best Shoes
              </button>
              <button className="w-full sm:w-auto rounded-xl text-center border text-xs font-normal text-[#111111] py-2">
                New Basketball Shoes
              </button>
              <button className="w-full sm:w-auto rounded-xl text-center border text-xs font-normal text-[#111111] py-2">
                New Football Shoes
              </button>
              <button className="w-full sm:w-auto rounded-xl text-center border text-xs font-normal text-[#111111] py-2">
                New Men&apos;s Shoes
              </button>
              <button className="w-full sm:w-auto rounded-xl text-center border text-xs font-normal text-[#111111] py-2">
                New Running Shoes
              </button>
              <button className="w-full sm:w-auto rounded-xl text-center border text-xs font-normal text-[#111111] py-2">
                Best Men&apos;s Shoes
              </button>
              <button className="w-full sm:w-auto rounded-xl text-center border text-xs font-normal text-[#111111] py-2">
                New Jordan Shoes
              </button>
              <button className="w-full sm:w-auto rounded-xl text-center border text-xs font-normal text-[#111111] py-2">
                Best Women&apos;s Shoes
              </button>
              <button className="w-full sm:w-auto rounded-xl text-center border text-xs font-normal text-[#111111] py-2">
                Best Training & Gym
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default New;
