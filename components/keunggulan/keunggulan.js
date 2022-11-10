import React from "react";
import Image from "next/image";
import k1 from "/public/assets/k1.svg";
import k2 from "/public/assets/k2.svg";
import k3 from "/public/assets/k3.svg";

const Keunggulan = () => {
  return (
    <div className="md:px-[126px] mt-[110px] mb-16">
      <div className="text-center">
        <h2 className="text-[48px] leading-[72px] font-bold mb-[24px]">
          Keunggulan Kami
        </h2>
        <p className="text-[#807D7D] leading-[130%] text-[18px] flex flex-col">
          A Lorem Ipsum is simply dummy text of the printing and typesetting
          <span>
            industry. Lorem Ipsum has been the industry's standard dummy
          </span>
          text ever since the 1500s.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-24">
        <div className="flex flex-col justify-center items-center h-[310px] p-6 shadow-md">
          <div className="flex justify-center">
            <div className="bg-[#D8191E] bg-opacity-10 w-20 h-20 rounded-md flex justify-center items-center">
              <Image src={k1} alt="k1" />
            </div>
          </div>
          <h3 className="my-6 text-center text-2xl font-semibold">
            Kirim Ke Berbagai Negara
          </h3>
          <p className="text-center">
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className="flex flex-col justify-center items-center h-[310px] p-6 shadow-md">
          <div className="flex justify-center">
            <div className="bg-[#D8191E] bg-opacity-10 w-20 h-20 rounded-md flex justify-center items-center">
              <Image src={k2} alt="k2" />
            </div>
          </div>
          <h3 className="my-6 text-center text-2xl font-semibold">
            Mudah Di Gunakan
          </h3>
          <p className="text-center">
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className="flex flex-col justify-center items-center h-[310px] p-6 shadow-md">
          <div className="flex justify-center">
            <div className="bg-[#D8191E] bg-opacity-10 w-20 h-20 rounded-md flex justify-center items-center">
              <Image src={k3} alt="k3" />
            </div>
          </div>
          <h3 className="my-6 text-center text-2xl font-semibold">
            Pengiriman Aman
          </h3>
          <p className="text-center">
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
      </div>
    </div>
  );
};

export default Keunggulan;
