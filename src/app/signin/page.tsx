import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

function Signin() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center py-10">
        <Image
          className="pb-5"
          src="/h3.png"
          width={40}
          height={10}
          alt="image"
        />
        <h2 className="uppercase w-40 text-center font-bold pb-5">
          YOUR ACCOUNT FOR EVERYTHING NIKE
        </h2>
        <form action="" className="flex flex-col w-96">
          <input
            className="w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            type="text"
            placeholder="Password"
          />
          <div className="flex justify-between items-center py-5">
            <div>
              <input type="checkbox" id="remember" />
              <label
                className="ml-2 pl-2 cursor-pointer text-text-secondary-gray"
                htmlFor="remember"
              >
                Keep me signed in
              </label>
            </div>
            <div>
              <span>
                <Link href="#" className="text-[#BCBCBC]">
                  Forgotten your password?
                </Link>
              </span>
            </div>
          </div>
          <p className="text-text-secondary-gray text-center pb-6">
            By logging in you agree to Nike{" "}
            <Link className="underline" href="#">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link className="underline" href="#">
              Terms of Use
            </Link>
            .
          </p>
          <div className="w-96 h-52 pt-1">
            <div className="border rounded-md bg-black text-white text-base font-normal p-1 text-center">
              SIGN IN
            </div>
          </div>
          <div className="flex justify-center items-center pb-5">
            <span className="text-gray-500">
              Not a member?
              <Link href={"../joinus"}>
                <span className="text-black underline pl-1"> Join Us.</span>
              </Link>
            </span>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Signin;
