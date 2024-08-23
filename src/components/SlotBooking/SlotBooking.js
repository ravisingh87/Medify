import React, { useRef, useState } from "react";
import {
  SlotBookingContainerDiv,
  SlotBookingInnerDiv,
  SlotBookingLiStyle,
  SlotBookingSlotDiv,
  SlotBookingSpanStyle,
} from "./SlotBookingStyle";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import moment from "moment";

const SlotBooking = () => {
  const [isSelected, setIsSelected] = useState(-1);
  const scrollRef = useRef(null);
  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };
  const today = moment();
  const res = Array(6)
    .fill()
    .map(() => today.add(1, "d").format("ddd,DD MMM"));
  return (
    <SlotBookingContainerDiv>
      <SlotBookingSpanStyle />
      <SlotBookingInnerDiv $disable={isSelected}>
        <span className='prev' onClick={() => scroll(-500)}>
          <GrFormPrevious />
        </span>
        <ul ref={scrollRef}>
          <SlotBookingLiStyle
            $isSelected={isSelected === -1}
            onClick={() => setIsSelected(-1)}
          >
            <div>
              <p>Today</p>
              <p>11 slots available</p>
            </div>
          </SlotBookingLiStyle>
          {res.map((item, idx) => (
            <SlotBookingLiStyle
              $isSelected={isSelected === idx}
              onClick={() => setIsSelected(idx)}
            >
              <div>
                <p>{idx === 0 ? "Tomorrow" : item}</p>
                <p>17 slots available</p>
              </div>
            </SlotBookingLiStyle>
          ))}
        </ul>
        <span className='next' onClick={() => scroll(500)}>
          <GrFormNext />
        </span>
      </SlotBookingInnerDiv>
      <SlotBookingSlotDiv>
        <div>
          <div>
            <span className='shift'>Morning</span>
          </div>
          <div>
            <span className='time_stamp'>11:00 AM</span>
          </div>
        </div>
        <div>
          <div>
            <span className='shift'>Afternoon</span>
          </div>
          <div className='time_stamp_container'>
            <span className='time_stamp'>12:00 PM</span>
            <span className='time_stamp'>12:30 PM</span>
            <span className='time_stamp'>01:00 PM</span>
            <span className='time_stamp'>01:30 PM</span>
            <span className='time_stamp'>02:00 PM</span>
            <span className='time_stamp'>02:30 PM</span>
          </div>
        </div>
        <div>
          <div>
            <span className='shift'>Evening</span>
          </div>
          <div className='time_stamp_container'>
            <span className='time_stamp'>06:00 PM</span>
            <span className='time_stamp'>06:30 PM</span>
            <span className='time_stamp'>07:00 PM</span>
            <span className='time_stamp'>07:30 PM</span>
          </div>
        </div>
      </SlotBookingSlotDiv>
    </SlotBookingContainerDiv>
  );
};

export default SlotBooking;
