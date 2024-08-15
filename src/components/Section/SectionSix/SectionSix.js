import React from "react";
import {
  SectionSixDetailsDiv,
  SectionSixDivConsultant,
  SectionSixDivContainer,
  SectionSixImgDiv,
  SectionSixWrapperDiv,
} from "./SectionSixStyle";
import Img1 from "@assets/image-01-1.png";
import Img2 from "@assets/image-02-1.png";
import Img3 from "@assets/icons/phone.png";
import Img4 from "@assets/icons/check.png";

const SectionSix = () => {
  return (
    <SectionSixDivContainer>
      <div className='container d-flex justify-content-center align-items-center flex-wrap'>
        <SectionSixWrapperDiv className='d-flex justify-content-center align-items-center flex-column'>
          <div className='w-100 d-flex justify-content-center align-items-center'>
            <SectionSixDivConsultant>
              <div className='d-flex align-items-center w-100'>
                <img src={Img3} alt='Call' />
                <span>Free Consultation</span>
              </div>
              <p className='consultant_details'>Consultation with the best</p>
            </SectionSixDivConsultant>
            <img src={Img2} alt='Helping hand' width='332px' height='275px' />
          </div>
          <SectionSixImgDiv>
            <img src={Img1} alt='Helping hand' width='332px' height='275px' />
          </SectionSixImgDiv>
        </SectionSixWrapperDiv>

        <SectionSixDetailsDiv className='d-flex justify-content-center align-items-start flex-column ps-5'>
          <p>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
          <p>
            Patient <span>Caring</span>
          </p>
          <p>
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </p>
          <div>
            <img src={Img4} alt='Check' />
            <p>Stay Updated About Your Health</p>
          </div>
          <div>
            <img src={Img4} alt='Check' />
            <p>Check Your Results Online</p>
          </div>
          <div>
            <img src={Img4} alt='Check' />
            <p>Manage Your Appointments</p>
          </div>
        </SectionSixDetailsDiv>
      </div>
    </SectionSixDivContainer>
  );
};

export default SectionSix;
