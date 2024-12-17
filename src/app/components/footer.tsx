import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
function Footer() {
  return (
    <>
      <footer className="bg-[#111111] py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-8">
          <div>
            <h3 className="text-[10px] font-normal text-white mb-4">
              FIND A STORE
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[10px] font-normal text-white"
                >
                  Become Link Member
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[10px] font-normal text-white"
                >
                  Sign Up for Email
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[10px] font-normal text-white"
                >
                  Send Us Feedback
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[10px] font-normal text-white "
                >
                  Student Discounts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[10px] font-normal text-white">
              GET HELP
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[11px] font-normal text-[#7E7E7E]"
                >
                  Order Status
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[11px] font-normal text-[#7E7E7E]"
                >
                  Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[11px] font-normal text-[#7E7E7E]"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[11px] font-normal text-[#7E7E7E] "
                >
                  Payment Options
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[11px] font-normal text-[#7E7E7E]"
                >
                  Contact Us on Nike.com
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[11px] font-normal text-[#7E7E7E] "
                >
                  Contact Us on All Other Inquiries
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[10px] font-normal text-white">
              ABOUT NIKE
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[11px] font-normal text-[#7E7E7E] "
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[11px] font-normal text-[#7E7E7E] "
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[11px] font-normal text-[#7E7E7E]  "
                >
                  Investors
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[11px] font-normal text-[#7E7E7E] "
                >
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex justify-start lg:justify-end items-start gap-4 text-gray-500">
            <FaTwitter className="text-lg cursor-pointer hover:text-slate-100" />
            <FaFacebook className="text-lg cursor-pointer hover:text-slate-100" />
            <FaYoutube className="text-lg cursor-pointer hover:text-slate-100" />
            <FaInstagram className="text-lg cursor-pointer hover:text-slate-100" />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-between items-center">
          <div className="flex mb-4 md:mb-0 gap-2 text-white">
            <IoLocationOutline />
            <p className="text-white text-xs font-normal">India</p>
            <p className="text-[11px] font-normal text-[#7E7E7E]">
              © 2023 Nike Inc. All Rights Reserved
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#"
              className="hover:underline text-[11px] font-normal text-[#7E7E7E] "
            >
              Guides
            </Link>
            <Link
              href="#"
              className="hover:underline text-[11px] font-normal text-[#7E7E7E]"
            >
              Terms of Sale
            </Link>
            <Link
              href="#"
              className="hover:underline text-[11px] font-normal text-[#7E7E7E]"
            >
              Terms of Use
            </Link>
            <Link
              href="#"
              className="hover:underline text-[11px] font-normal text-[#7E7E7E]"
            >
              Nike Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
