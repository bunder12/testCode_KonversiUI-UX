import React from "react";

const Navbar = () => {
  return (
    <div className="md:px-[126px] h-[105px] flex items-center justify-between">
      <div>
        <h1 className="text-[#DC1E23] text-[26px] font-bold">Toko Ikan</h1>
      </div>
      <div className="max-w-[590px]">
        <ul className="flex justify-between">
          <li className="mr-4 cursor-pointer">Beranda</li>
          <li className="mr-4 cursor-pointer">Keunggulan</li>
          <li className="mr-4 cursor-pointer">Fitur Aplikasi</li>
          <li className="cursor-pointer">Testimonial</li>
        </ul>
      </div>
      <div>
        <button className="bg-[#DC1E23] py-4 px-[36px] rounded-md text-white">
          Download
        </button>
      </div>
    </div>
  );
};

export default Navbar;
