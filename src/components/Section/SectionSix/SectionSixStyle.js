import styled from "styled-components";

export const SectionSixDivContainer = styled.div`
  width: 100%;
  position: relative;
  bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.color.ligthBlue};
  .container {
    div {
      width: 50%;
      heigth: 100%;
    }
  }
`;

export const SectionSixDivConsultant = styled.div`
  border-radius: 8px;
  box-shadow: 0px 40px 40px -15px #94b6ce26;
  background: #ffffff;
  position: relative;
  left: 3rem;
  padding: 10px;

  .consultant_details {
    position: relative;
    left: 5px;
    margin: 0;
  }
`;

export const SectionSixImgDiv = styled.div`
  position: relative;
  bottom: 4rem;
`;

export const SectionSixWrapperDiv = styled.div`
  width: 36rem !important;
  position: relative;
  top: 32px;
`;

export const SectionSixDetailsDiv = styled.div`
  width: 36rem !important;
  p:nth-child(1) {
    font-size: 16px;
    font-weight: 600;
    line-height: 27px;
    text-align: left;
    color: #2aa7ff;
  }
  p:nth-child(2) {
    font-size: 48px;
    font-weight: 600;
    line-height: 67px;
    text-align: left;
    color: #1b3c74;
    span {
      font-size: 48px;
      font-weight: 600;
      line-height: 67px;
      text-align: left;
      color: #2aa7ff;
    }
  }
  p:nth-child(3) {
    font-family: Inter;
    font-size: 17px;
    font-weight: 500;
    line-height: 29px;
    text-align: left;
    color: #77829d;
  }
  div {
    width: 100% !important;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 2rem;
    gap: 15px;
    p {
      margin: 0;
      font-family: Roboto !important;
      font-size: 18px !important;
      font-weight: 500 !important;
      line-height: 27px !important;
      text-align: left !important;
      color: #1b3c74 !important;
    }
  }
`;
