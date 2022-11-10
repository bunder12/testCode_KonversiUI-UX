import React from "react";
import rectangle from "/public/assets/Rectangle.svg";

const InputBar = () => {
  return (
    <div className="mt-24">
      <div
        style={{
          backgroundImage: `url(${rectangle.src})`,
        }}
        className="w-full h-[367px] flex md:px-[126px] text-white"
      >
        <div className="basis-6/12 py-14 pr-16 text-center">
          <h3 className="text-[35px] font-semibold">Lacak Pengiriman Anda</h3>
          <p className="my-10">
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text{" "}
          </p>
          <div className="flex justify-between">
            <input
              className="w-[70%] pl-6 py-5 rounded-md outline-none text-black"
              type="text"
              placeholder="Lacak Pengiriman"
            />
            <button className="bg-[#F2572E] px-[59px] py-5 rounded-md">
              Lacak
            </button>
          </div>
        </div>
        <div className="basis-6/12 py-14 pl-16 text-center">
          <h3 className="text-[35px] font-semibold">
            Cek Tarif Pengiriman Anda
          </h3>
          <div className="flex justify-between my-8">
            <input
              className="w-[48%] pl-6 py-5 rounded-md outline-none text-black"
              type="text"
              placeholder="Origin"
            />
            <input
              className="w-[48%] pl-6 py-5 rounded-md outline-none text-black"
              type="text"
              placeholder="Destination"
            />
          </div>
          <button className="w-full bg-[#F2572E] py-5 rounded-lg text-[20px]">
            Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputBar;
