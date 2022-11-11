import React from "react";

const Navbar = ({ refBeranda, refKeunggulan, refFitur, refTestimoni }) => {
  function showBeranda() {
    window.scrollTo({
      top: refBeranda.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  function showKeunggulan() {
    window.scrollTo({
      top: refKeunggulan.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  function showFitur() {
    window.scrollTo({
      top: refFitur.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  function showTestimoni() {
    window.scrollTo({
      top: refTestimoni.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <div className="md:px-[126px] h-[105px] sticky top-0 bg-white flex items-center justify-between z-50">
      <div>
        <h1 className="text-[#DC1E23] text-[26px] font-bold">Toko Ikan</h1>
      </div>
      <div className="max-w-[590px]">
        <ul className="flex justify-between">
          <li onClick={showBeranda} className="mr-4 cursor-pointer">
            Beranda
          </li>
          <li onClick={showKeunggulan} className="mr-4 cursor-pointer">
            Keunggulan
          </li>
          <li onClick={showFitur} className="mr-4 cursor-pointer">
            Fitur Aplikasi
          </li>
          <li onClick={showTestimoni} className="cursor-pointer">
            Testimonial
          </li>
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
