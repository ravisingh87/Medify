import styled from "styled-components";

export const SectionNineContainerDiv = styled.div``;
export const SectionNineWrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
  p:nth-child(1) {
    font-size: 16px;
    font-weight: 600;
    line-height: 27px;
    text-align: center;
    color: #2aa7ff;
    margin: 0;
  }
  p:nth-child(2) {
    font-size: 48px;
    font-weight: 600;
    line-height: 67px;
    text-align: center;
    color: #1b3c74;
    margin: 0;
  }
`;

export const SectionNineContentDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
  flex-flow: wrap;
      gap: 25px;
      margin-top: -50px;
  div:nth-child(1){
      // width: 575px;
    height: 100%;
  }
    .smily_container {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      position: relative;
      bottom: 23.1rem;
      left: 28.8rem;
      background: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 15px 25px 0px #0000000f;
    }
  }
     span {
    img {
      object-fit: none;
    }
  }
`;

export const SectionNineSmilyContainer = styled.div`
  max-width: 241.93px !important;
  height: 104.59px !important;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 15px 35px -5px #00000012;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 23rem;
  right: 6rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;

    p:nth-child(1) {
      font-size: 24px;
      font-weight: 600;
      line-height: 33.6px;
      text-align: center;
      color: #1b3c74;
    }
    p:nth-child(2) {
      font-family: Poppins;
      font-size: 17px;
      font-weight: 400;
      line-height: 28px;
      text-align: center;
      color: #77829d;
    }
  }
`;

export const SectionNineParaDivContainer = styled.div`
  width: 575px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 70px;
  padding: 40px;
`;

export const SectionNineParaDiv = styled.div`
  width: 575px;
  height: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  span:nth-child(1) {
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
    text-align: left;
    color: #1b3c74;
  }
  span:nth-child(2) {
    font-family: Font Awesome 5 Free;
    font-size: 18px;
    font-weight: 900;
    line-height: 18px;
    text-align: right;
  }
`;
