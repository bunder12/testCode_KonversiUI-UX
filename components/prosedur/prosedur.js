import React from "react";
import Image from "next/image";
import android2 from "/public/assets/android2.svg";
import android3 from "/public/assets/android3.svg";
import android4 from "/public/assets/android4.svg";
import right from "/public/assets/right.svg";
import left from "/public/assets/left.svg";
import ikan2 from "/public/assets/ikan2.svg";
import ikan3 from "/public/assets/ikan3.svg";
import ikan4 from "/public/assets/ikan4.svg";

const Prosedur = ({ refFitur }) => {
  return (
    <main ref={refFitur}>
      <div>
        <div className="md:pl-[126px] flex relative">
          <div className="basis-5/12 flex flex-col justify-center">
            <h2 className="text-[48px] leading-[72px] font-bold flex flex-col mb-6">
              Berbagai Metode <span>Pengiriman</span>
            </h2>
            <p className="text-[18px] text-[#807D7D]">
              A Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className="basis-7/12">
            <div className="flex">
              <div className="z-20 flex">
                <Image className="ml-16" height={220} src={ikan2} alt="ikan2" />
                <Image
                  className="mr-12"
                  height={490}
                  src={android2}
                  alt="android2"
                />
              </div>
              <Image
                height={340}
                className="absolute right-0 top-24"
                src={right}
                alt="right"
              />
            </div>
          </div>
        </div>
        <div className="md:pr-[126px] flex relative">
          <div className="basis-7/12">
            <div className="flex">
              <div className="flex z-20">
                <Image height={520} src={android3} alt="android3" />
                <Image height={220} className="mr-12" src={ikan3} alt="ikan3" />
              </div>
              <Image
                height={340}
                className="absolute left-0 top-28"
                src={left}
                alt="left"
              />
            </div>
          </div>
          <div className="basis-5/12 flex flex-col justify-center">
            <h2 className="text-[48px] leading-[72px] font-bold flex flex-col mb-6">
              Lacak status pengiriman anda
            </h2>
            <p className="text-[18px] text-[#807D7D]">
              A Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown. A Lorem Ipsum is simply
              dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
        <div className="md:pl-[126px] flex relative">
          <div className="basis-5/12 flex flex-col justify-center">
            <h2 className="text-[48px] leading-[72px] font-bold flex flex-col mb-6">
              Cek schedule <span>pengiriman anda</span>
            </h2>
            <p className="text-[18px] text-[#807D7D]">
              A Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
          <div className="basis-7/12">
            <div className="flex">
              <div className="z-20 flex">
                <Image className="ml-6" height={220} src={ikan4} alt="ikan2" />
                <Image height={520} src={android4} alt="android2" />
              </div>
              <Image
                height={340}
                className="absolute right-0 top-20"
                src={right}
                alt="right"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Prosedur;
