import React from "react";

import DocTogether from "@assets/TogetherDoc.png";
import {
  SectionOneDiv,
  SectionOneImg,
  SectionOnePara,
  SectionOneParaOne,
  SectionOneSpan,
} from "./SectionOneStyle";
import { HeaderButton } from "@components/Nav/NavStyle";
import SectionTwo from "@components/Section/SectionTwo/SectionTwo";

const SectionOne = () => {
  return (
    <div className='container fluid'>
      <div className='row'>
        <SectionOneDiv className='col col-12 col-xl-6 col-lg-12 col-md-12 col-sm-12'>
          <SectionOnePara>Skip the travel! Find Online </SectionOnePara>
          <SectionOneSpan>Medical Centers</SectionOneSpan>
          <SectionOneParaOne className='para_detail'>
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </SectionOneParaOne>
          <HeaderButton type='button' className='btn btn-primary'>
            Find Centers
          </HeaderButton>
        </SectionOneDiv>
        <div className='col col-12 col-xl-6 col-lg-12 col-md-12 col-sm-12'>
          <SectionOneImg
            className='position-relative'
            src={DocTogether}
            alt='Medify'
            width='100%'
            height='100%'
          />
        </div>
        <div className='col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
          <SectionTwo />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
