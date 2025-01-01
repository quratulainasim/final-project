import React from "react";
import Header from "../components/header";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Footer from "../components/footer";
import Link from "next/link";

interface Iproducts{

id:number,
title:string,
heading:string,
description:string,
color:string,
img_url:string,
price:string,
paragraph?:string,
}
 
const products:Iproducts[]=[
  {
    id:1,
    title:"Just In",
    heading:"Nike Air Force 1 Mid &apos;07",
    description:"Men&apos;s Shoes",
    color:"1 Colour",
    img_url:"/p1.jpg",
    price:"MRP: ₹ 10,795.00",
  },
  {
    id:2,
    title:"Just In",
    heading:"Nike Court Vision Low Next Nature",
    description:"Men&apos;s Shoes",
    color:"1 Colour",
    img_url:"/p2.jpg",
    price:"MRP : ₹ 4 995.00",
  },
  {
    id:3,
    title:"Just In",
    heading:" Nike Air Force 1 PLT.AF.ORM",
    description:"Women&apos;s Shoes",
    color:"1 Colour",
    img_url:"/p3.jpg",
    price:"MRP : ₹ 8 695.00",
  },
  {
    id:4,
    title:"Just In",
    heading:"Nike Air Force 1 React",
    description:"Men&apos;s Shoes",
    color:"1 Colour",
    img_url:"/p4.jpg",
    price:"MRP : ₹ 13 295.00",
  },
  {
    id:5,
    title:"Promo Exclusion",
    heading:"Air Jordan 1 Elevate Low",
    description:"Women&apos;s Shoes",
    color:"1 Colour",
    img_url:"/p5.jpg",
    price:" MRP : ₹ 11 895.00",
  },
  {
    id:6,
    title:"Just In",
    heading:"Nike Standard Issue",
    description:"Women&apos;s Shoes Basketball Jersey",
    color:"1 Colour",
    img_url:"/p6.jpg",
    price:"MRP : ₹ 2 895.00",
  },
  {
    id:7,
    title:"Promo Exclusion",
    heading:"Nike Dunk Low Retro SE",
    description:"Men&apos;s Shoes",
    color:"1 Colour",
    img_url:"/p7.jpg",
    price:"MRP : ₹ 9 695.00",
  },
  {
    id:8,
    title:"Sustainable Materials",
    heading:"Nike Dri-FIT UV Hyverse",
    description:"Men&apos;s Short-Sleeve Graphic Fitness Top",
    color:"1 Colour",
    img_url:"/p8.jpg",
    price:"MRP : ₹ 2 495.00",
  },
  {
    id:9,
    title:"Just In",
    heading:"Nike Court Vision Low",
    description:"Men&apos;s Shoes",
    color:"1 Colour",
    img_url:"/p9.jpg",
    price:" MRP : ₹ 5 695.00",
  },
  {
    id:10,
    title:"Just In",
    heading:"Nike Dri-FIT Ready",
    description:"Men&apos;s Short-Sleeve Fitness Top",
    color:"3 Colour",
    img_url:"/p10.jpg",
    price:"MRP : ₹ 2 495.00",
  },
  {
    id:11,
    title:"Just In",
    heading:"Nike One Leak Protection: Period",
    description:"Women&apos;s Mid-Rise 18cm(approx.)Biker Shorts",
    color:"2 Colour",
    img_url:"/p11.jpg",
    price:"MRP : ₹ 3 395.00",
  },
  {
    id:12,
    title:"Just In",
    heading:"Nike Air Force 1 LV8 3",
    description:"Older Kids&apos; Shoe",
    color:"1 Colour",
    img_url:"/p12.jpg",
    price:"MRP : ₹ 7 495.00",
  },
  {
    id:13,
    title:"Just In",
    heading:" Nike Blazer Low Platform",
    description:"Women&apos;s Shoes",
    color:"1 Colour",
    img_url:"/p13.jpg",
    price:" MRP : ₹ 8 195.00",
  },
  {
    id:14,
    title:"Just In",
    heading:" Nike Air Force 1 &apos;07",
    description:"Women&apos;s Shoes",
    color:"2 Colour",
    img_url:"/p14.jpg",
    price:"MRP : ₹ 8 195.00",
  },
  {
    id:15,
    title:"Just In",
    heading:"Nike Pro Dri-FIT",
    description:"Men&apos;s Tight-Fit Sleeveless Top",
    color:"1 Colour",
    img_url:"/p15.jpg",
    price:"MRP : ₹ 1 495.00",
  },
  {
    id:16,
    title:"Just In",
    heading:"Nike Dunk Low Retro",
    description:"Men&apos; Shoes",
    color:"1 Colour",
    img_url:"/p16.jpg",
    price:"MRP : ₹ 8 695.00",
  },
  {
    id:17,
    title:"Just In",
    heading:"Nike Air Max SC",
    description:"Women&apos; Shoes",
    color:"2 Colour",
    img_url:"/p17.jpg",
    price:"MRP : ₹ 5 995.00",
  },
  {
    id:18,
    title:"Just In",
    heading:"Nike Dri-FIT UV Miler",
    description:"Men&apos;s Short-Sleeve Running Top",
    color:"1 Colour",
    img_url:"/p18.jpg",
    price:"MRP : ₹ 1 695.00",
  },
  {
    id:19,
    title:"Just In",
    heading:"Nike Air Max SYSTM",
    description:"Older Kids&apos; Shoes",
    color:"1 Colour",
    img_url:"/p19jpg.jpg",
    price:"MRP : ₹ 6 495.00",
  },
  {
    id:20,
    title:"Just In",
    heading:"Nike Alate All U",
    description:"Women&apos;s Light-Support Lightly Lined U-Neck Printed Sports Bra",
    color:"1 Colour",
    img_url:"/p20.jpg",
    price:"MRP : ₹ 2 195.00",
  },
  {
    id:21,
    title:"Just In",
    heading:"Nike Court Legacy Lift",
    description:"Women&apos;s Shoes",
    color:"2 Colour",
    img_url:"/p20.jpg",
    price:"MRP : ₹ 7 495.00",
  },
  {
    id:22,
    title:"Just In",
    heading:"Nike Swoosh",
    description:"Women&apos;s Medium-support Padded Sports Bra Tank",
    color:"2 Colour",
    img_url:"/p22.png",
    price:"MRP : ₹ 3 095.00",
  },
  {
    id:23,
    title:"Just In",
    heading:"Nike SB Zoom Janoski OG+",
    description:"Shoes",
    color:"1 Colour",
    img_url:"/p23.jpg",
    price:"MRP : ₹ 8 595.00",
  },
  {
    id:24,
    title:"Just In",
    heading:"Nike Dri-FIT Run Division Rise 365",
    description:"Men&apos;s Running Tank",
    color:"2 Colour",
    img_url:"/p24.jpg",
    price:"MRP : ₹ 3 495.00",
  },
  {
    id:25,
    title:"Just In",
    heading:"Nike Dri-FIT Challenger",
    description:"Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts",
    color:"1 Colour",
    img_url:"/nike2.jpg",
    price:"MRP : ₹ 2 495.00",
  },
  {
    id:26,
    title:"Just In",
    heading:"Jordan Series ES",
    description:"Men&apos;s Shoes",
    color:"2 Colour",
    img_url:"/p25.jpg",
    price:"MRP : ₹ 7 495.00",
  },
  {
    id:27,
    title:"Just In",
    heading:" Nike Outdoor Play",
    description:"Older Kids&apos; Oversized Woven Jacket",
    color:"1 Colour",
    img_url:"/p26.jpg",
    price:"MRP : ₹ 3 895.00",
  },
  {
    id:28,
    title:"Just In",
    heading:"Nike Sportswear Trend",
    description:"Older Kids&apos; (Girls&apos;) High-waisted Woven Shorts",
    color:"2 Colour",
    img_url:"/p27.jpg",
    price:"MRP : ₹ 2 495.00",
  },
  {
    id:29,
    title:"Just In",
    heading:"Nike Blazer Low &apos;77 Jumbo",
    description:"Women&apos;s Shoes",
    color:"1 Colour",
    img_url:"/p28.jpg",
    price:"MRP : ₹ 8 595.00",
  },
  {
    id:30,
    title:"Just In",
    heading:"Nike SB Force 58",
    description:"Skate Shoe",
    color:"1 Colour",
    img_url:"/p29.jpg",
    price:"MRP : ₹ 5 995.00",
  },
]

function New() {
  return (
    <>
      <Header />
         
      <div className="w-full px-4 md:px-8 lg:px-12">
  <div className="flex flex-col md:flex-row justify-between items-center pt-4 space-y-4 md:space-y-0">
    <h1 className="text-2xl font-medium text-[#111111]">New (500)</h1>
    <div className="flex gap-4 items-center">
      <div className="flex items-center gap-2">
        <p className="text-base text-[#111111]">Hide Filters</p>
        <Image
          src="/newsymbol.png"
          alt="image"
          width={24}
          height={24}
        />
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm text-[#111111]">Sort</p>
        <IoIosArrowDown />
      </div>
    </div>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pt-10">
    <div className="col-span-1 w-full max-w-xs h-[calc(100vh-120px)] overflow-y-auto">
      <div className="space-y-6">
        <ul className="space-y-2 text-[#111111]  font-medium text-sm">
          {[
            "Shoes",
            "Sports Bras",
            "Tops & T-Shirts",
            "Hoodies & Sweatshirts",
            "Jackets",
            "Trousers & Tights",
            "Shorts",
            "Tracksuits",
            "Jumpsuits & Rompers",
            "Skirts & Dresses",
            "Socks",
            "Accessories & Equipment",
          ].map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
        <div className="border-t border-b py-4">
          <div className="flex justify-between items-center">
            <p className="text-base text-[#111111]">Gender</p>
            <IoIosArrowUp />
          </div>
          <div className="pt-4 space-y-2">
            {["Men", "Women", "Unisex"].map((gender, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-5 h-5 border rounded-md"></div>
                <p>{gender}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="col-span-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((data) => (
          <div key={data.id} className=" p-4">
            <Link href={`/products/${data.id}`}>
              <Image
                src={data.img_url}
                alt="image"
                width={348}
                height={348}
                className="mx-auto"
              />
            </Link>
            <div className="pt-4">
              <p className="text-sm text-[#9E3500] font-medium">{data.title}</p>
              <h2 className="text-base text-[#111111] font-medium">
                {data.heading}
              </h2>
              <p className="text-sm text-gray-500">{data.description}</p>
              <p className="text-sm text-gray-500">{data.color}</p>
              <p className="text-sm text-[#111111] font-medium">{data.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

          <div className="w-full max-w-7xl border-t-2 h-auto border-slate-200 mt-32 mb-3">
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
      <Footer />
    </>
  );
}

export default New;
