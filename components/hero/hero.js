import React from "react";
import Image from "next/image";
import googlePlay from "/public/assets/playstore.svg";
import apple from "/public/assets/apple.svg";
import right from "/public/assets/right.svg";
import ikan1 from "/public/assets/ikan1.svg";
import android1 from "/public/assets/android1.svg";

const Hero = () => {
  return (
    <div className="flex md:px-[126px]">
      <div className="basis-6/12 h-[calc(100vh-105px)]">
        <h2 className="flex flex-col text-[54px] leading-[130%] font-bold mt-[78px]">
          Kirim Berbagai jenis <span>ikan dengan mudah</span>
        </h2>
        <p className="text-[18px] text-[#807D7D] mt-6">
          A Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's{" "}
        </p>
        <div className="flex mt-14">
          <div className="bg-black text-white rounded-md py-[15px] px-[29px] flex mr-4">
            <Image src={googlePlay} alt="googlePlay" />
            <div className="ml-4">
              <p className="text-[8px]">GET IN ON</p>
              <h3 className="text-[16px]">Google Play</h3>
            </div>
          </div>
          <div className="bg-black text-white rounded-md py-[15px] px-[29px] flex">
            <Image src={apple} alt="apple" />
            <div className="ml-4">
              <p className="text-[8px]">Download on the</p>
              <h3 className="text-[16px]">App Store</h3>
            </div>
          </div>
        </div>
        <div className="flex mt-6">
          <div className="mr-4">
            <h3 className="text-[40px] text-[#DC1E23] font-bold">1.9K+</h3>
            <p className="text-[18px] text-[#807D7D]">Active Users</p>
          </div>
          <div>
            <h3 className="text-[40px] text-[#DC1E23] font-bold">20+</h3>
            <p className="text-[18px] text-[#807D7D]">New Features</p>
          </div>
        </div>
      </div>
      <div className="basis-6/12">
        <div className="relative z-10">
          <Image
            className="absolute right-[-100px] top-[-80px]"
            src={android1}
            alt="android1"
          />
          <Image className="z-[20]" src={ikan1} alt="ikan1" />
        </div>
        <Image
          height={360}
          className="absolute right-0 top-[30%]"
          src={right}
          alt="right"
        />
      </div>
    </div>
  );
};

export default Hero;
