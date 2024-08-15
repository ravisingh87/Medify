import React from "react";
import {
  SectionNineContainerDiv,
  SectionNineContentDiv,
  SectionNineParaDiv,
  SectionNineParaDivContainer,
  SectionNineSmilyContainer,
  SectionNineWrapperDiv,
} from "./SectionNineStyle";
import Img1 from "@assets/Image-21-1.png";
import Img2 from "@assets/HandleHeart.png";
import Img3 from "@assets/smily.png";
import add from "@assets/add.png";

const SectionNine = () => {
  return (
    <SectionNineContainerDiv>
      <SectionNineWrapperDiv>
        <p>Get Your Answer</p>
        <p>Frequently Asked Questions</p>
        <SectionNineContentDiv>
          <div>
            <SectionNineSmilyContainer>
              <img src={Img3} alt='smily' width='45px' height='45px' />
              <div>
                <p>84k+</p>
                <p>Happy Patients</p>
              </div>
            </SectionNineSmilyContainer>
            <span>
              <img
                src={Img1}
                alt='Doctor together'
                width='500px'
                height='480px'
              />
            </span>
            <div className='smily_container'>
              <img src={Img2} alt='smilty' width='45px' height='45px' />
            </div>
          </div>
          <SectionNineParaDivContainer>
            <SectionNineParaDiv>
              <span>Why choose our medical for your family?</span>
              <span>
                <img src={add} alt='Add' />
              </span>
            </SectionNineParaDiv>
            <SectionNineParaDiv>
              <span>Why we are different from others?</span>
              <span>
                <img src={add} alt='Add' />
              </span>
            </SectionNineParaDiv>
            <SectionNineParaDiv>
              <span>Trusted & experience senior care & love</span>
              <span>
                <img src={add} alt='Add' />
              </span>
            </SectionNineParaDiv>
            <SectionNineParaDiv>
              <span>How to get appointment for emergency case?</span>
              <span>
                <img src={add} alt='Add' />
              </span>
            </SectionNineParaDiv>
          </SectionNineParaDivContainer>
        </SectionNineContentDiv>
      </SectionNineWrapperDiv>
    </SectionNineContainerDiv>
  );
};

export default SectionNine;
