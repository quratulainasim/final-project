import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
function JoinUs() {
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
        <h2 className="uppercase text-center font-bold pb-5">
          BECOME A NIKE MEMBER
        </h2>
        <p className="w-80 text-center text-text-secondary-gray pb-5">
          Create your Nike Member profile and get first access to the very best
          of Nike products inspiration and community.
        </p>
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
          <input
            className="w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            type="text"
            placeholder="First Name"
          />
          <input
            className="w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="w-96 border-[#E5E5E5] rounded-md mb-2 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            type="text"
            placeholder="Date of Birth"
          />
          <p className="pb-3 text-text-secondary-gray text-sm text-center">
            Get a Nike Member Reward every year on your Birthday.
          </p>
          <select
            className="w-96 border-[#E5E5E5] rounded-md mb-2 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            name=""
            id=""
          >
            <option className="text-text-secondary-gray" value="">
              India
            </option>
            <option className="text-text-secondary-gray" value="">
              United States
            </option>
            <option className="text-text-secondary-gray" value="">
              United Kingdom
            </option>
            <option className="text-text-secondary-gray" value="">
              Pakistan
            </option>
            <option className="text-text-secondary-gray" value="">
              Canada
            </option>
          </select>
          <div className="flex gap-5 mt-1">
            <div className="border-[#E5E5E5] rounded-md py-4 border-[2px] w-2/4 text-center text-text-secondary-gray">
              Male
            </div>
            <div className="border-[#E5E5E5] rounded-md py-4 border-[2px] w-2/4 text-center text-text-secondary-gray">
              Female
            </div>
          </div>
          <div className="flex justify-between items-center py-7">
            <div>
              <input type="checkbox" id="remember" />
              <label
                className="ml-2 pl-2 cursor-pointer text-text-secondary-gray"
                htmlFor="remember"
              >
                Sign up for emails to get updates from Nike on products offers
                and your Member benefits
              </label>
            </div>
          </div>

          <p className="text-text-secondary-gray text-center pb-6">
            By creating an account you agree to Nike{" "}
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
              JOIN US
            </div>
          </div>

          <span className="text-gray-500 text-center">
            Already a member?
            <Link href={"../signin"}>
              <span className="text-black underline pl-1"> Sign In.</span>
            </Link>
          </span>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default JoinUs;
