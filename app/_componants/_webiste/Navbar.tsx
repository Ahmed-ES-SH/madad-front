import React from "react";
import Img from "../Image";
import { navlinks, socialicons } from "@/app/constants/websitecontent";

import Link from "next/link";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { CiDark } from "react-icons/ci";
import DarkmodeButton from "../DarkmodeButton";

export default function Navbar() {
  return (
    <>
      <div className="w-full z-[99999] h-[70px] shadow-md px-2 py-2 fixed bg-main_blue">
        <div className="mainbar w-[90%] m-auto flex items-center justify-between">
          <div className="logo relative">
            <Link href={"/"}>
              <Img imgsrc="/logo.png" styles="w-[90px] object-contain" />
            </Link>
          </div>
          <div className="links max-md:hidden text-white">
            <ul className="flex items-center gap-6 ">
              {navlinks.map((link, index) => (
                <li
                  key={index}
                  className=" group main_link text-[18px] relative hover:text-sky-200 duration-150 cursor-pointer"
                >
                  <p>{link}</p>
                  <div className="line group-hover:w-full duration-300 w-0  bg-sky-400 h-[2px] absolute"></div>
                  <div className="circle group-hover:visible duration-300 w-[3px] invisible left-2 h-[3px] rounded-full bg-white z-[999]    absolute"></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="btn+toggel flex items-center gap-2 max-md:hidden">
            <div className="">
              <button className="px-4 shadow-md group overflow-hidden h-full relative py-2 rounded-full  bg-main_blue ">
                <p className="z-[999] relative group-hover:text-black text-white duration-300">
                  Join now
                </p>
                <div className=" group-hover:w-full  left absolute right-0 top-0 bg-white w-0 duration-700  h-[500px] "></div>
                <div className=" group-hover:w-full right absolute left-0 top-0 bg-white w-0 duration-700  h-[500px] "></div>
              </button>
            </div>
            <button className="  w-[40px]  h-[40px] rounded-full bg-main_blue shadow-md  flex items-center justify-center">
              <DarkmodeButton />
            </button>
          </div>
          <div className="bars text-white cursor-pointer md:hidden">
            <HiOutlineBars3BottomRight size={30} />
          </div>
        </div>
      </div>
    </>
  );
}
