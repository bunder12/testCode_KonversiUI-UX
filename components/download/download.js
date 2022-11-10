import React from "react";
import Image from "next/image";
import googlePlay from "/public/assets/playstore.svg";
import apple from "/public/assets/apple.svg";
import man from "/public/assets/man.png";

const Download = () => {
  return (
    <div className="mt-48 bg-[#D8191E] py-28 relative">
      <div className="md:px-[126px] flex">
        <div>
          <h2 className="flex flex-col text-[48px] font-bold leading-[72px] text-white">
            Available and <span>Download Anytime!</span>
          </h2>
          <p className="mb-6 mt-5 text-lg text-white text-[18px]">
            A Lorem Ipsum is simply dummy text of the printing and{" "}
          </p>
          <div className="flex">
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
        </div>
        <Image className="absolute right-8 top-[-138px]" src={man} alt="man" />
      </div>
    </div>
  );
};

export default Download;
