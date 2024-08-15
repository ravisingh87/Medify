import React from "react";
import { HeaderContainer, HeaderNav, HeaderStyle } from "./HomeStyle";

import Nav from "@components/Nav/Nav";
import SectionOne from "@components/Section/SectionOne/SectionOne";
import SectionFour from "@components/Section/SectionFour/SectionFour";
import SectionThree from "@components/Section/SectionThree/SectionThree";
import SectionFive from "@components/Section/SectionFive/SectionFive";
import SectionSix from "@components/Section/SectionSix/SectionSix";
import SectionSeven from "@components/Section/SectionSeven/SectionSeven";
import SectionEight from "@components/Section/SectionEight/SectionEight";
import SectionNine from "@components/Section/SectionNine/SectionNine";
import SectionTen from "@components/Section/SectionTen/SectionTen";
import SectionEleven from "@components/Section/SectionEleven/SectionEleven";

const Home = () => {
  return (
    <HeaderContainer>
      <HeaderStyle>
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </HeaderStyle>
      <div className='container'>
        <HeaderNav className='navbar navbar-expand-lg'>
          <Nav />
        </HeaderNav>
        <SectionOne />
      </div>
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen />
      <SectionEleven />
    </HeaderContainer>
  );
};

export default Home;
