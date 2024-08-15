import React, { useEffect, useState } from "react";
import {
  SectionFiveContainerDiv,
  SectionFiveProfileDidWrapper,
  SectionFiveProfileDiv,
} from "./SectionFiveStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Doctor1 from "@assets/asian-male-medical-doctor-2.png";
import Doctor2 from "@assets/haha.png";
import Doctor3 from "@assets/toppng 1.png";

const data = [
  {
    arr: [
      { name: "Dr. Ahmad Khan", type: "Neurologist", src: Doctor1 },
      { name: "Dr. Heena Sachdeva", type: "Orthopadics", src: Doctor3 },
      { name: "Dr. Ankur Sharma", type: "Medicine", src: Doctor2 },
    ],
  },
  {
    arr: [
      { name: "Dr. Ahmad Khan", type: "Neurologist", src: Doctor1 },
      { name: "Dr. Heena Sachdeva", type: "Orthopadics", src: Doctor3 },
      { name: "Dr. Ankur Sharma", type: "Medicine", src: Doctor2 },
    ],
  },
  {
    arr: [
      { name: "Dr. Ahmad Khan", type: "Neurologist", src: Doctor1 },
      { name: "Dr. Heena Sachdeva", type: "Orthopadics", src: Doctor3 },
      { name: "Dr. Ankur Sharma", type: "Medicine", src: Doctor2 },
    ],
  },
];

const SectionFive = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [width]);
  return (
    <SectionFiveContainerDiv>
      <p>Our Medical Specialist</p>
      <div className='d-flex'>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            990: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {data.flatMap((item, id) =>
            item.arr.map((itm, idx) => (
              <SwiperSlide key={`${itm.name}_${idx}_${id}`}>
                <div className='container d-flex flex-column justify-content-center align-items-center w-50 m-0'>
                  <SectionFiveProfileDiv>
                    <SectionFiveProfileDidWrapper>
                      <img src={itm.src} alt={itm.name} />
                    </SectionFiveProfileDidWrapper>
                  </SectionFiveProfileDiv>
                  <span className='doc_title'>{itm.name}</span>
                  <span className='doc_type'>{itm.type}</span>
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </SectionFiveContainerDiv>
  );
};

export default SectionFive;
