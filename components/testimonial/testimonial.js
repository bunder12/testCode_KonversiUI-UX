import React from "react";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import profil1 from "/public/assets/profil1.svg";
import profil2 from "/public/assets/profil2.svg";
import profil3 from "/public/assets/profil3.svg";
import profil4 from "/public/assets/profil4.svg";
import rating1 from "/public/assets/rating1.svg";
import rating2 from "/public/assets/rating2.svg";

const Testimonial = ({ refTestimoni }) => {
  return (
    <main ref={refTestimoni}>
      <div className="md:px-[126px]">
        <h2 className="text-[48px] font-bold text-center leading-[72px]">
          Testimonial
        </h2>
        <p className="text-center flex flex-col mt-6 mb-16 text-[#807D7D]">
          A Lorem Ipsum is simply dummy text of the printing and typesetting
          <span>
            industry. Lorem Ipsum has been the industry's standard dummy text{" "}
          </span>
        </p>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="shadow-md rounded-md p-8 mb-8">
              <div className="flex mb-5">
                <Image src={profil1} alt="profil1" />
                <Image src={rating1} alt="rating1" />
              </div>
              <h3 className="text-[22px] font-semibold mb-5">Floyd Miles</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-md rounded-md p-8 mb-8">
              <div className="flex mb-5">
                <Image src={profil2} alt="profil2" />
                <Image src={rating2} alt="rating2" />
              </div>
              <h3 className="text-[22px] font-semibold mb-5">
                Ronald Richards
              </h3>
              <p>
                ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. Exercitation veniam consequat
                sunt nostrud amet.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-md rounded-md p-8 mb-8">
              <div>
                <Image src={profil3} alt="profil3" />
              </div>
              <h3 className="text-[22px] font-semibold my-5">
                Savannah Nguyen
              </h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-md rounded-md p-8 mb-8">
              <div>
                <Image src={profil4} alt="profil4" />
              </div>
              <h3 className="text-[22px] font-semibold my-5">Floyd Miles</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-md rounded-md p-8 mb-8">
              <div>
                <Image src={profil3} alt="profil3" />
              </div>
              <h3 className="text-[22px] font-semibold my-5">Floyd Miles</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
};

export default Testimonial;
