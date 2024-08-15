import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Img1 from "@assets/img1.png";
import Img2 from "@assets/Group 11.png";
import { SectionThreeContainer } from "./SectionThreeStyle";

const SectionThree = () => {
  return (
    <SectionThreeContainer className='container fluid'>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src={Img1} alt='Doctor' width='33%' height='100%' />
          <img src={Img2} alt='Doctor' width='33%' height='100%' />
          <img src={Img1} alt='Doctor' width='33%' height='100%' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img1} alt='Doctor' />
          {/* <img src={Img2} alt='Doctor' /> */}
          {/* <img src={Img1} alt='Doctor' /> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img1} alt='Doctor' />
          {/* <img src={Img2} alt='Doctor' /> */}
          {/* <img src={Img1} alt='Doctor' /> */}
        </SwiperSlide>
      </Swiper>
    </SectionThreeContainer>
  );
};

export default SectionThree;
