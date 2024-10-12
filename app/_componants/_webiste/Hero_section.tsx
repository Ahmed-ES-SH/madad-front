/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Img from "../Image";
import AnimateBackGround from "../BackGround";
import { socialicons } from "@/app/constants/websitecontent";
import { PiCaretDoubleDownDuotone } from "react-icons/pi";

export default function Hero_section() {
  // إعدادات الحركة للصورة (من اليمين)
  const imageVariants = {
    hidden: { opacity: 0, x: 300 }, // تبدأ الصورة خارج الشاشة من اليمين
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // تتحرك إلى المكان الأصلي
  };

  // إعدادات الحركة للنص (من اليسار)
  const textVariants = {
    hidden: { opacity: 0, x: -300 }, // يبدأ النص خارج الشاشة من اليسار
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // يتحرك إلى المكان الأصلي
  };

  // إعدادات الحركة للموجة (من الأسفل)
  const waveVariants = {
    hidden: { opacity: 0, y: 300 }, // تبدأ الموجة خارج الشاشة من الأسفل
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // تتحرك إلى المكان الأصلي
  };

  return (
    <>
      <div className="flex items-center justify-between w-[90%] m-auto   px-2 pt-16 max-md:flex-col max-md:items-center">
        {/* نص متحرك من اليسار */}
        <motion.div
          className="content mt-10 z-[99]"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <div className="flex items-center gap-4 mb-6">
            {socialicons.map((src, index) => (
              <div
                key={index}
                className="group relative overflow-hidden w-[34px] h-[34px] flex items-center justify-center rounded-md bg-slate-200/80 shadow-sm"
              >
                <Img imgsrc={src} styles="w-[20px] z-[999] cursor-pointer" />
                <div className="group-hover:w-full left absolute left-0 top-0 bg-main_orange w-0 duration-300 cursor-pointer h-[500px]"></div>
              </div>
            ))}
          </div>
          <h1 className="text-5xl font-semibold my-1">Excellent IT</h1>
          <h1 className="text-5xl font-semibold my-1">
            <span className="text-main_red">Solutions</span> For Your
          </h1>
          <h1 className="text-5xl font-semibold">Success</h1>
          <p className="my-2 w-[80%] max-lg:w-3/4 max-md:w-full">
            Any Rate. Lorem Sit Consectetur Eli'. Eaque Amet, Guod D-oWibus The
            From*worg Of The Eswnce Reprewnts A The Flexible Pla nnirg
          </p>
          <button className="px-4 h-fit shadow-md group overflow-hidden  relative py-2 rounded-full bg-main_blue">
            <p className="z-[999] relative group-hover:text-black text-white duration-300">
              Join now
            </p>
            <div className="group-hover:w-full left absolute right-0 top-0 bg-white w-0 duration-700 h-[500px]"></div>
            <div className="group-hover:w-full right absolute left-0 top-0 bg-white w-0 duration-700 h-[500px]"></div>
          </button>
        </motion.div>

        {/* صورة متحركة من اليمين */}
        <motion.div
          className="z-[99] img-animate"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <Img
            imgsrc="/test-6.png"
            styles=" w-[1200px] self-center z-[999] relative rounded-md"
          />
        </motion.div>
      </div>
      {/* موجة متحركة من الأسفل */}
      <motion.div
        className="absolute bottom-0 left-0 z-0 w-full"
        initial="hidden"
        animate="visible"
        variants={waveVariants}
      >
        <Img
          imgsrc="/big-wave.png"
          styles="w-full  h-[300px] max-lg:h-full z-[9]"
        />
      </motion.div>
      <PiCaretDoubleDownDuotone
        size={33}
        className=" up-down text-center m-auto w-fit cursor-pointer  z-[999] dark:text-white"
      />
      <AnimateBackGround />
    </>
  );
}
