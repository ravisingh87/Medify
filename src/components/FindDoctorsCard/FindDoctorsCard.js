import React, { useState } from "react";
import {
  FindDoctorsCardAdvertisement,
  FindDoctorsCardContainer,
  FindDoctorsCardData,
  FindDoctorsCardDataWrapper,
  FindDoctorsCardSpan,
  FindDoctorsCardTitle,
  FindDoctorsCardWrapper,
  FindDoctorsCardWrapperContainer,
} from "./FindDoctorsCardStyle";
import check from "@assets/check.svg";
import advertise from "@assets/addvertise.png";
import { BiSolidLike } from "react-icons/bi";
import img1 from "@assets/image22.png";
import SlotBooking from "@components/SlotBooking/SlotBooking";
import { data } from "../../data";

const FindDoctorsCard = ({ data, city }) => {
  const [showTimeSlot, setShowTimeSlot] = useState(null);
  return (
    <FindDoctorsCardContainer className='container'>
      <FindDoctorsCardTitle>
        <p>
          {data.length} medical centers available in {city}
        </p>
        <div className='d-flex gap-3'>
          <img src={check} alt='Check' width='23px' height='22px' />
          <p>
            Book appointments with minimum wait-time & verified doctor details
          </p>
        </div>
      </FindDoctorsCardTitle>
      <FindDoctorsCardWrapperContainer>
        <FindDoctorsCardWrapper>
          {data.map((item) => (
            <FindDoctorsCardData key={item["Provider ID"]}>
              <FindDoctorsCardDataWrapper>
                <div>
                  <FindDoctorsCardSpan>
                    <img src={img1} alt='Hospital' width='80px' height='80px' />
                  </FindDoctorsCardSpan>
                </div>
                <div>
                  <p>{item["Hospital Name"]}</p>
                  <p>{item["Address"]}</p>
                  <p>{item["Hospital Type"]}</p>
                  <p>more</p>
                  <p>
                    <span>FREE</span>
                    &nbsp;
                    <span>&#8377;500</span> {""}
                    Consultation fee at clinic
                  </p>
                  <div>
                    <button type='button' className='btn btn-primary'>
                      <BiSolidLike size={20} /> <span>4</span>
                    </button>
                  </div>
                </div>
                <div>
                  <p>Available Today</p>
                  <button onClick={() => setShowTimeSlot(item["Provider ID"])}>
                    Book FREE Center Visit
                  </button>
                </div>
              </FindDoctorsCardDataWrapper>
              {showTimeSlot === item["Provider ID"] && <SlotBooking />}
            </FindDoctorsCardData>
          ))}
        </FindDoctorsCardWrapper>
        <FindDoctorsCardAdvertisement>
          <img src={advertise} alt='Advertisement' width='100%' height='100%' />
        </FindDoctorsCardAdvertisement>
      </FindDoctorsCardWrapperContainer>
    </FindDoctorsCardContainer>
  );
};

export default FindDoctorsCard;
