import React from "react";
import {
  SectionFourContainer,
  SectionFourPara,
  SectionFourSpan,
} from "./SectionFourStyle";
import BloodSample from "@assets/icons/Blood Sample.png";
import DrugStore from "@assets/icons/DrugStore.png";
import HospitalBlock from "@assets/icons/HostpitalBlock.png";
import HeartRate from "@assets/icons/Heart Rate.png";
import Immune from "@assets/icons/Immune.png";
import MRI from "@assets/icons/t.png";
import Stethoscope from "@assets/icons/Stethoscope.png";
import XRay from "@assets/icons/X-Ray.png";

const data = [
  {
    name: "Dentistry",
    src: HospitalBlock,
  },
  {
    name: "Primary Care",
    src: Stethoscope,
  },
  {
    name: "Cardiology",
    src: HeartRate,
  },
  {
    name: "MRI Resonance",
    src: MRI,
  },
  {
    name: "Blood Sample",
    src: BloodSample,
  },
  {
    name: "Piscologist",
    src: Immune,
  },
  {
    name: "Laboratory",
    src: DrugStore,
  },
  {
    name: "X-Ray",
    src: XRay,
  },
];

const SectionFour = () => {
  return (
    <SectionFourContainer>
      <div className='container fluid d-flex justify-content-center align-items-center p-5 flex-column'>
        <p>Find by specialisation</p>
        <div className='d-flex mt-5 w-100 justify-content-center align-items-center gap-3 flex-wrap'>
          {data.map((item, idx) => (
            <div
              className='d-flex justify-content-center align-items-center'
              key={`${item.name}_${idx}`}
            >
              <SectionFourSpan>
                <img
                  src={item.src}
                  alt={item.name}
                  width='80px'
                  height='80px'
                />
                <SectionFourPara>{item.name}</SectionFourPara>
              </SectionFourSpan>
            </div>
          ))}
        </div>
      </div>
    </SectionFourContainer>
  );
};

export default SectionFour;
