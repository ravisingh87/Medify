import React from "react";
import {
  SectionEightCardContainer,
  SectionEightCardDiv,
  SectionEightContainerDiv,
  SectionEightDesDiv,
  SectionEightDesDivPara,
  SectionEightSpan,
} from "./SectionEightStyle";
import saveHeard from "@assets/icons/saveHeart.png";
import HostpitalBlock from "@assets/HostpialInOrange.png";
import HostpitalBuilding from "@assets/HospitalInRed.png";
import docIcon from "@assets/icons/docIcon.png";

const SectionEight = () => {
  return (
    <SectionEightContainerDiv>
      <SectionEightDesDiv>
        <p>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
        <h2>Our Families</h2>
        <SectionEightDesDivPara>
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </SectionEightDesDivPara>
      </SectionEightDesDiv>
      <SectionEightCardContainer>
        <div className='card_wrapper'>
          <SectionEightCardDiv>
            <SectionEightSpan $background='#EBF7FF'>
              <img
                src={saveHeard}
                alt='Happy Patients'
                width='50px'
                height='50px'
              />
            </SectionEightSpan>
            <h2>5000+</h2>
            <p>Happy Patients</p>
          </SectionEightCardDiv>
          <SectionEightCardDiv>
            <SectionEightSpan $background='#FFF7E6'>
              <img
                src={HostpitalBlock}
                alt='Happy Patients'
                width='50px'
                height='50px'
              />
            </SectionEightSpan>
            <h2>1000+</h2>
            <p>Laboratories</p>
          </SectionEightCardDiv>
        </div>
        <div className='card_sec_wrapper'>
          <SectionEightCardDiv>
            <SectionEightSpan $background='#FFF2F0'>
              <img
                src={HostpitalBuilding}
                alt='Happy Patients'
                width='50px'
                height='50px'
              />
            </SectionEightSpan>
            <h2>200+</h2>
            <p>Hospitals</p>
          </SectionEightCardDiv>
          <SectionEightCardDiv>
            <SectionEightSpan $background='#EBFAF1'>
              <img
                src={docIcon}
                alt='Happy Patients'
                width='50px'
                height='50px'
              />
            </SectionEightSpan>
            <h2>700+</h2>
            <p>Expert Doctors</p>
          </SectionEightCardDiv>
        </div>
      </SectionEightCardContainer>
    </SectionEightContainerDiv>
  );
};

export default SectionEight;
