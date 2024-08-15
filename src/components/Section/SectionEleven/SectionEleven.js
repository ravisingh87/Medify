import React from "react";
import {
  SectionElevenConpyRightDiv,
  SectionElevenContainerDiv,
  SectionElevenContentDiv,
  SectionElevenContextDiv,
  SectionElevenContextPara,
  SectionElevenContextWrapperDiv,
  SectionElevenHomeLogoDiv,
  SectionElevenLogoContainerDiv,
  SectionElevenLogoDiv,
  SectionElevenLogoSpan,
  SectionElevenWrapperDiv,
} from "./SectionElevenStyle";
import { HeaderTitle } from "@components/Nav/NavStyle";
import logo from "@assets/logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";
import leftArrow from "@assets/leftArrow.svg";

const data = [
  ["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"],
  ["Orthology", "Neurology", "Dental Care", "Opthalmology", "Cardiology"],
  ["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"],
];

const SectionEleven = () => {
  return (
    <SectionElevenContainerDiv>
      <SectionElevenWrapperDiv className='container fluid'>
        <SectionElevenContentDiv>
          <SectionElevenLogoDiv>
            <SectionElevenHomeLogoDiv>
              <a className='navbar-brand' href='/'>
                <img src={logo} alt='Medify' width='25' height='25' />
                <HeaderTitle>Medify</HeaderTitle>
              </a>
            </SectionElevenHomeLogoDiv>
            <SectionElevenLogoContainerDiv>
              <SectionElevenLogoSpan>
                <FaFacebookF />
              </SectionElevenLogoSpan>
              <SectionElevenLogoSpan>
                <FaTwitter />
              </SectionElevenLogoSpan>
              <SectionElevenLogoSpan>
                <FaYoutube />
              </SectionElevenLogoSpan>
              <SectionElevenLogoSpan>
                <FaPinterest />
              </SectionElevenLogoSpan>
            </SectionElevenLogoContainerDiv>
          </SectionElevenLogoDiv>
          <SectionElevenContextWrapperDiv>
            {data.map((items) => (
              <SectionElevenContextDiv key={items}>
                {items.map((item) => (
                  <SectionElevenContextPara key={item}>
                    <img src={leftArrow} alt='Arrow' />
                    &nbsp;&nbsp; {item}
                  </SectionElevenContextPara>
                ))}
              </SectionElevenContextDiv>
            ))}
          </SectionElevenContextWrapperDiv>
        </SectionElevenContentDiv>
        <SectionElevenConpyRightDiv>
          <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
        </SectionElevenConpyRightDiv>
      </SectionElevenWrapperDiv>
    </SectionElevenContainerDiv>
  );
};

export default SectionEleven;
