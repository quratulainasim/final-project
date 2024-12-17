import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
const Checkout = () => {
  return (
    <>
      <div className="w-full max-w-[1440px] h-[72px] bg-white flex justify-between items-center px-4 md:px-8 lg:px-16">
        <div className="w-[78px] h-[78px] flex justify-center items-center">
          <Image src="/h3.png" alt="image" width={64} height={21} />
        </div>
        <div className="flex justify-between items-center gap-5 mr-4 md:mr-8 lg:mr-16">
         
          <p className="text-sm font-normal text-[#111111]">000 800 100 9538</p>
          <Image src="/text.png" alt="image" width={20} height={20} />
          <Link href="../cart">
            <Image src="/cart.png" alt="image" width={20} height={20} />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-12 px-10 my-10 lg:px-32 lg:gap-20">
        <div className="col-span-12 lg:col-span-8">
            <h2 className="font-medium text-xl pb-4 text-[#111111]">How would you like to get your order?</h2>
            <p className="text-[#757575] text-sm font-normal leading-6">Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. <span className="underline">Learn More</span></p>
            <div className="flex border-[1.5px] border-black px-4 py-4  rounded-lg my-10">
                <Image src="/deliever.png" alt="image" width={24} height={24} />
                <span className="ps-6 text-sm font-medium text-[#111111] ">Deliver It</span>
            </div>
            <h2 className="font-bold text-xl pb-4 text-[#111111]">Enter your name and address:</h2>
            <input className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-black text-base font-normal" type="text" placeholder="First Name" />
            <input className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-black text-base font-normal" type="text" placeholder="Last Name" />
            <input className="w-full border-[#E5E5E5] rounded-md px-4 py-3 border-[2px] placeholder:text-black text-base font-normal" type="text" placeholder="Address Line 1" />
            <span className="text-[#757575] text-sm font-normal">We do not ship to P.O. boxes</span>
            <input className="w-full border-[#E5E5E5] rounded-md my-4 px-4 py-3 border-[2px] placeholder:text-black text-base font-normal" type="text" placeholder="Address Line 2" />
            <input className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-black text-base font-normal" type="text" placeholder="Address Line 3" />
            <div className="flex gap-4">
                <input className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-black text-base font-normal" type="text" placeholder="Postal Codes" />
                <input className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-black text-base font-normal" type="text" placeholder="Locality" />
            </div>
            <div className="flex gap-4">
                    <select
                    className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-[#8D8D8D]"
                    defaultValue="State/Territory">
                    <option>State/Territory</option>
                    </select> 
                    
                <div className="relative w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray">
                    <span className="text-black">India</span>
                    <span className="absolute right-4 top-5 w-2 h-2 bg-green-500 rounded-full"></span>
                </div>
            </div>
            <div>
                <input type="checkbox" id="save-address" />
                <label className="ml-1 pl-2 text-sm font-normal text-[#111111]" htmlFor="save-address">
                    Save this address to my profile
                </label>
            </div>
            <div className="flex gap-3 pt-5">
               <Image src="/box.png" alt="image" width={16} height={16} className="border-[#E5E5E5] " />
               <span className="text-[#111111] text-sm font-normal">Save this address to my profile</span> 
            </div>
            <h2 className="font-bold text-xl pt-4 text-[#111111]">What&apos;s your contact information?</h2>
            <div className="my-6">
                <input className="w-full border-[#E5E5E5] rounded-md px-4 py-3 border-[2px] placeholder:text-black text-base font-normal" type="text" placeholder="Email" />
                <span className="text-[#757575] text-xs font-normal">A confirmation email will be sent after checkout.</span>

                <input className="w-full border-[#E5E5E5] rounded-md mt-4 px-4 py-3 border-[2px] placeholder:text-black text-base font-normal" type="text" placeholder="Phone Number" />
                <span className="text-[#757575] font-normal text-xs">A carrier might contact you to confirm delivery.</span>
            </div>
            <h2 className="font-bold text-xl pt-4 text-[#111111]">What&apos;s your PAN?</h2>
            <input className="w-full border-[#E5E5E5] mt-4 rounded-md px-4 py-3 border-[2px] placeholder:text-black text-base font-normal" type="text" placeholder="PAN" />
            <span className="text-[#757575] text-xs font-normal">Enter your PAN to enable payment with UPI, Net Banking or local card methods</span>
            <div className="my-2 text-[#757575] text-xs font-normal">
                <input type="checkbox" id="PAN-details" />
                <label className="ml-1 pl-2" htmlFor="PAN-details">
                    Save PAN details to Nike Profile
                </label>
            </div>
            <div className="mt-12 text-[#757575] text-xs font-normal">
                <input type="checkbox" id="remember" />
                <label className="ml-1 pl-2 leading-6" htmlFor="remember">
                    I have read and consent to eShopWorld processing my information in 
                    accordance with the <span className="underline">Privacy Statement</span> and <span className="underline">Cookie Policy.</span> eShopWorld
                    is a trusted Nike partner.
                </label>
            </div>
            <div className="bg-[#F5F5F5] mt-14 mb-6 px-4 text-[#757575] text-center text-sm font-medium py-4 rounded-full">
              Continue
            </div>
            <div>
                <h3 className="pt-4 pb-8 border-t-[1px] border-[#E5E5E5] text-[#111111] text-xl font-medium">Delivery</h3>
                <h3 className="pt-4 pb-8 border-t-[1px] border-[#E5E5E5] text-[#757575] text-xl font-medium">Shipping</h3>
                <h3 className="pt-4 pb-8 border-t-[1px] border-[#E5E5E5] text-[#757575] text-xl font-medium">Billing</h3>
                <h3 className="pt-4 pb-8 border-t-[1px] border-[#E5E5E5] text-[#757575] text-xl font-medium">Payment</h3>
            </div>
        </div>
        <div className="col-span-12 lg:col-span-4 mt-10 lg:mt-0">
            <h2 className="text-lg font-semibold text-[#111111] mb-4">Order Summary</h2>      
            <div className="flex justify-between mb-2 text-[#8D8D8D]">
                <span>Subtotal</span>
                <span>₹ 20 890.00</span>
            </div>
            <div className="flex justify-between text-[#8D8D8D] mb-4">
                <span>Delivery/Shipping</span>
                <span>Free</span>
            </div>
            <hr className="border-gray-300 my-4" />
            <div className="flex justify-between text-[#111111] font-semibold text-lg mb-2">
                <span>Total</span>
                <span>₹ 20 890.00</span>
            </div>
            <hr className="border-gray-300 my-4" />
            <p className="text-[9px] text-[#111111] font-normal">
                (The total reflects the price of your order, including all duties and taxes)
            </p>

             <div>
            <h2 className="text-sm font-bold text-[#111111] mt-6">Arrives Mon, 27 Mar - Wed, 12 Apr</h2>
            <div className=" flex justify-center items-center mr-4 py-1 gap-2">
                <Image src="/cart.jpg" alt="image" width={208} height={208}
                    className="mt-4 object-cover rounded-md"/>

                <div className="pt-1">
                <p className="text-sm font-normal leading-4 text-[#111111]">
                Nike Dri-FIT ADV TechKnit Ultra Men&apos;s Short-Sleeve Running Top
                </p>

                    <p className="text-xs font-normal text-[#8D8D8D] pt-1">Quantity: 1</p>
                    <p className="text-xs font-normal text-[#8D8D8D] pt-1">Size: L</p>
                    <p className="text-xs font-normal text-[#8D8D8D] pt-1">₹ 3 895.00</p>
             </div>
            </div>
            </div>
            <div>

            <div className=" flex justify-center items-center mr-4 py-1 gap-2">
                <Image src="/nikemax.jpg" alt="image" width={208} height={208}
                    className="mt-4 object-cover rounded-md"/>
                <div className="pt-1">
                <p className="text-sm font-normal leading-6 text-[#111111]">
                Nike Air Max 97 SE Men&apos;s Shoes
                </p>
                    <p className="text-xs font-normal text-[#8D8D8D] pt-1" >Quantity: 1</p>
                    <p className="text-xs font-normal text-[#8D8D8D] pt-1" > Size: UK 8</p>
                    <p className="text-xs font-normal text-[#8D8D8D] pt-1">₹ 16 995.00</p>
                </div>
                </div>
            </div>
        </div>
    </div>


<div className="bg-black mt-8 px-6 py-6  flex flex-wrap justify-evenly items-center gap-5">
          <div className="flex mb-4 md:mb-0 gap-3">
            <IoLocationOutline className="text-white" />
            <p className="text-white text-[9px] font-normal">India</p>
            <p className="text-[#8D8D8D] text-[9px] font-normal ml-4">© 2023 Nike Inc. All Rights Reserved</p>
          </div>


          <div className="flex mb-4 md:mb-0 gap-3">
            <p className="text-[#8D8D8D] text-[9px] font-norma">Terms of Use</p>
            <p className="text-[#8D8D8D] text-[9px] font-normal">Terms of Sale</p>
            <p className="text-[#8D8D8D] text-[9px] font-normal">Privacy Policy</p>
          </div>
         
          
          <div className="flex mb-4 md:mb-0 ml-23">
            <Image src="/checkout.png" alt="image" width={601} height={27} />
                
          </div>


          </div>



        
















    </>
  );
}

export default Checkout;
