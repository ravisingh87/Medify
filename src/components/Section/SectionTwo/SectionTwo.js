import React from "react";
import {
  SectionTwoButton,
  SectionTwoContainer,
  SectionTwoContent,
  SectionTwoInput,
  SectionTwoPara,
  SectionTwoSpan,
} from "./SectionTwoStyle";
import { IoMdSearch } from "react-icons/io";
import Ambulance from "@assets/icons/Ambulance.png";
import Capsule from "@assets/icons/Capsule.png";
import Doctor from "@assets/icons/Doctor.png";
import DrugStore from "@assets/icons/Drugstore.png";
import HospitalBuilding from "@assets/icons/HospitalBuilding.png";

const data = [
  {
    imgSrc: Doctor,
    name: "Doctors",
  },
  {
    imgSrc: DrugStore,
    name: "Labs",
  },
  {
    imgSrc: HospitalBuilding,
    name: "Hospital",
  },
  {
    imgSrc: Capsule,
    name: " Medicine Store",
  },
  {
    imgSrc: Ambulance,
    name: "Ambulance",
  },
];

const SectionTwo = () => {
  return (
    <SectionTwoContainer className='container fluid'>
      <div className='row justify-content-center align-items-center'>
        <div className='col col-12 d-flex justify-content-end mt-5'>
          <div className='row d-flex justify-content-end gap-5'>
            <div className='col col-12 col-xl-3 col-lg-3 col-md-12 col-sm-12'>
              <div className='d-flex justify-content-center align-items-center'>
                <SectionTwoSpan className='search_placeholder'>
                  <span>
                    <IoMdSearch />
                  </span>
                </SectionTwoSpan>
                <SectionTwoInput type='text' placeholder='State' />
              </div>
            </div>
            <div className='col col-12 col-xl-3 col-lg-3 col-md-12 col-sm-12'>
              <div className='d-flex justify-content-center align-items-center'>
                <SectionTwoSpan className='search_placeholder'>
                  <span>
                    <IoMdSearch />
                  </span>
                </SectionTwoSpan>
                <SectionTwoInput type='text' placeholder='City' />
              </div>
            </div>
            <div className='col col-12 d-flex justify-content-center align-items-center col-xl-3 col-lg-3 col-md-12 col-sm-12'>
              <SectionTwoButton
                type='button'
                className='btn btn-primary btn-lg'
              >
                <IoMdSearch />
                <span>Search</span>
              </SectionTwoButton>
            </div>
          </div>
        </div>
        <div className='col justify-content-center align-items-center col-12 mt-5 p-5'>
          <div className='d-flex justify-content-center align-items-center'>
            <SectionTwoPara>You may be looking for</SectionTwoPara>
          </div>
          <div className='col col-12 d-flex flex-row justify-content-center align-items-center gap-5 flex-wrap'>
            {data.map((item, idx) => (
              <SectionTwoContent
                className='col col-12 col-xl-2 col-lg-2 col-md-3 col-sm-12 d-flex justify-content-center align-items-center flex-column '
                key={`${item.name}_${idx}`}
              >
                <img src={item.imgSrc} alt='Doctors' width='60' height='60' />
                <p>{item.name}</p>
              </SectionTwoContent>
            ))}
          </div>
        </div>
      </div>
    </SectionTwoContainer>
  );
};

export default SectionTwo;
