"use client";
import React from "react";
import Image from "next/image";
import { SheetSide } from "../components/sheet";
import Footer from "../components/footer";
import Link from "next/link";
import { useCart } from "@/context/cartcontext";

export default function cart() {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { cart, removeFromCart, toggleFavorite, favorites } = useCart();

  return (
    <>
      <div className="max-w-[1440px] h-[36px] bg-[#F5F5F5] mx-auto flex justify-between px-4 md:px-8 lg:px-16 ">
        <div className="w-[24px] h-[24px] mt-[6px] ml-[48px]">
          <Image
            src="/logo.png"
            alt="image"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="w-auto h-[36px] flex items-center space-x-2 text-xs font-medium text-[#111111]">
          <Link href="/">Find a Store</Link>
          <span>|</span>
          <Link href="../help">Help</Link>
          <span>|</span>
          <Link href="../joinus">Hi, Rajarshi</Link>
          <Image src="/contact.png" alt="image" width={24} height={24} />
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
        <div className="flex justify-between items-center gap-1 mr-4 md:mr-8 lg:mr-16">
          <div className="md:hidden">
            <SheetSide />
          </div>
          <Image
            src="/h4.png"
            alt="image"
            width={40}
            height={40}
            className="md:hidden width={100%} height={auto}"
          />
          <Image src="/heart.png" alt="image" width={24} height={24} />
          <Link href="../cart">
            <Image src="/contact1.png" alt="image" width={32} height={32} className="width={100%} height={auto}" />
          </Link>
        </div>
      </div>

      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-5xl w-full bg-white  p-6">
          <div className=" grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-6">
            <div className="col-span-2">
              <div className="bg-[#F7F7F7] border pb-2 px-4 py-3">
                <p className="text-[#111111] text-xs font-medium ">
                  Free Delivery
                </p>
                <p className="text-[#111111] text-[11px] font-normal">
                  Applies to orders of ₹ 14 000.00 or more.
                  <span className="text-[11px] ml-3 font-medium underline">
                    View details
                  </span>
                </p>
              </div>

              <h2 className="text-xl text-[#111111] font-medium mb-4 pt-3">
                Bag
              </h2>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4 mb-4"
                >
                  <Image
                    src={item.img_url}
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <div className="ml-6 space-y-1 flex-1">
                    <h3 className="text-[15px] font-medium text-[#111111]">
                      {item.heading}
                    </h3>
                    <p className="text-[15px] font-normal text-[#757575]">
                      {item.paragraph}
                    </p>
                    <p className="text-[15px] font-normal text-[#757575]">
                      {item.description}
                    </p>
                    <p className="text-[15px] font-normal text-[#757575]">
                      {item.size}
                    </p>
                    <div className="flex mr-80 mb-2 mt-2 gap-3">
                      <Image
                        src="/heart.png"
                        alt="image"
                        width={20}
                        height={20}
                        onClick={() => toggleFavorite(item.id)}
                        className={`cursor-pointer ${
                          favorites.includes(item.id)
                            ? "opacity-200"
                            : "opacity-50"
                        }`}
                      />
                      <Image
                        src="/cart1.png"
                        alt="image"
                        width={20}
                        height={20}
                        onClick={() => removeFromCart(item.id)}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="text-right flex justify-between">
                    <p className=" text-[15px] text-[#111111] font-normal">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 py-0 ">
              <h2 className="text-xl text-[#111111] font-medium mb-4">
                Summary
              </h2>
              <div className="flex justify-between mb-2 text-[#111111] font-normal text-[15px]">
                <span>Subtotal</span>₹
                {cart
                  .reduce((acc, item) => {
                    const priceString = item.price || "0";
                    const sanitizedPrice = priceString
                      .replace(/[^0-9.]/g, "") // Remove non-numeric characters except dot
                      .trim();
                    const price = parseFloat(sanitizedPrice);
                    return acc + (isNaN(price) ? 0 : price);
                  }, 0)
                  .toFixed(2)}
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-[#111111] font-normal text-[15px]">
                  Estimated Delivery & Handling
                </p>
                <p className="font-normal text-[#111111] text-[15px]">Free</p>
              </div>
              <div className="flex justify-between font-bold border-t border-b pt-4 text-[#111111] text-sm">
                <span>Total</span>
                <span>
                  ₹
                  {cart
                    .reduce((acc, item) => {
                      const priceString = item.price || "0";
                      const sanitizedPrice = priceString
                        .replace(/[^0-9.]/g, "") // Remove non-numeric characters except dot
                        .trim();
                      const price = parseFloat(sanitizedPrice);
                      return acc + (isNaN(price) ? 0 : price);
                    }, 0) // Adding 10% tax
                    .toFixed(2)}
                </span>
              </div>
              <Link href="../checkout">
                <button className="w-full bg-black text-white font-medium py-3 rounded-full mt-4">
                  Member Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
