"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SheetSide } from "./sheet";
import { useCart } from "@/context/cartcontext";
function Header() {
  const { cart } = useCart();
  return (
    <>
  
      <div className="max-w-[1440px] h-[36px] bg-[#F5F5F5] mx-auto flex justify-between px-4 md:px-8 lg:px-16 ">
        <div className="w-[24px] h-[24px] mt-[6px] ml-[48px]">
          <Image src="/logo.png" alt="image" width={40} height={40} className="rounded-full" />
        </div>
        <div className="w-auto h-[36px] flex items-center space-x-2 text-xs pr-3 font-medium text-[#111111]">
          <Link href="/">Find a Store</Link>
          <span>|</span>
          <Link href="../help" >Help</Link>
          <span>|</span>
          <Link href="../joinus">Join Us</Link>
          <span>|</span>
          <Link href="../signin">Sign In</Link>
        </div> 
      </div>
      <div className="w-full max-w-[1440px] h-[60px] bg-white mt-[36px] flex justify-between items-center px-4 md:px-8 lg:px-16">
        <div className="w-[78px] h-[78px] flex justify-center items-center">
          <Image src="/h3.png" alt="image" width={50} height={50} className="width={100%} height={auto}" />
        </div>
        <div className="w-auto flex items-center">
          <div className="hidden md:block">
          <ul className="flex space-x-2 sm:space-x-4 md:space-x-8 text-sm font-medium text-[#111111]">
            <Link href="../products">New & Featured</Link>
            <Link href="../products">Men</Link>
            <Link href="../products">Women</Link>
            <Link href="../products">Kids</Link>
            <Link href="../products">Sale</Link>
            <Link href="../products">SNKRS</Link>
          </ul>
          </div>
          <div className="hidden md:block justify-center items-center ml-4 md:ml-8 lg:ml-16">
            <div className="w-[180px] h-[40px] bg-slate-100 rounded-full relative flex items-center px-2">
              <Image src="/h4.png" alt="image" width={40} height={40} className="width={100%} height={auto}" />
              <span className="text-sm text-slate-300 ml-2">Search</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mr-4 md:mr-8 lg:mr-16">
        <div className="md:hidden">
        <SheetSide />
        </div>
        <Image src="/h4.png" alt="image" width={40} height={40} className="md:hidden width={100%} height={auto}"/>
          <Image src="/heart.png" alt="image" width={24} height={24} />
          <Link href="../cart" className="relative">
          <Image src="/cart.png" alt="cart icon" width={24} height={24} />
          {cart.length > 0 && (
          <span className="absolute top-[-6px] right-[-6px] bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          {cart.length}
          </span>
           )}
           </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
