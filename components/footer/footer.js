import React from "react";
import Image from "next/image";
import logo from "/public/assets/logo.png";

const Footer = () => {
  return (
    <div className="md:px-[126px]">
      <div className="flex py-20">
        <div className="basis-6/12">
          <Image src={logo} alt="logo" />
          <p className="flex flex-col text-[20px] leading-[30px] text-[#807D7D] mt-4">
            A Lorem Ipsum is simply dummy text of the printing{" "}
            <span>and typesetting industry. Lorem Ipsum has been the </span>{" "}
            industry's standard.
          </p>
        </div>
        <div className="basis-3/12">
          <h3 className="text-[24px] font-bold mb-4">Menu Bantuan</h3>
          <p className="text-[20px] text-[#807D7D] mb-3">Keunggulan</p>
          <p className="text-[20px] text-[#807D7D] mb-3">Fitur Aplikasi</p>
          <p className="text-[20px] text-[#807D7D]">Testimoni</p>
        </div>
        <div className="basis-3/12">
          <h3 className="text-[24px] font-bold mb-4">Informasi kontak</h3>
          <p className="text-[20px] text-[#807D7D] mb-3">0812-9797-1227</p>
          <p className="text-[20px] text-[#807D7D] mb-3">0812-9797-1227</p>
          <p className="text-[20px] text-[#807D7D]">
            Jbgtranshipping@gmail.com
          </p>
        </div>
      </div>
      <div className="text-center">
        <p className="text-[20px] text-[#807D7D] mb-10">
          All rights reserved@2022
        </p>
      </div>
    </div>
  );
};

export default Footer;
