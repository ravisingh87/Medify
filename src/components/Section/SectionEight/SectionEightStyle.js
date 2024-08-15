import styled from "styled-components";

export const SectionEightContainerDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
  flex-flow: wrap;
  background: ${(props) => props.theme.color.ligthBlue};
  margin-top: 3rem;
`;

export const SectionEightCardContainer = styled.div`
  width: 575px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  gap: 30px;
  margin-bottom: 35px;
  .card_wrapper {
    display: flex;
    flex-direction: column;
    gap: 35px;
  }
  .card_sec_wrapper {
    display: flex;
    flex-direction: column;
    gap: 35px;
    margin-top: 80px;
    @media (max-width: 595px) {
      margin-top: 10px;
    }
  }
`;

export const SectionEightCardDiv = styled.div`
  width: 242.5px;
  height: 304px;
  padding: 40px;
  border-radius: 8px;
  background: ${(props) => props.theme.color.white};
  box-shadow: 0px 15px 45px -5px #00000012;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  p {
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    text-align: center;
    color: #77829d;
    margin: 0;
  }
`;

export const SectionEightSpan = styled.span`
  width: 100px;
  height: 100px;
  background: ${(props) => props.$background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const SectionEightDesDiv = styled.div`
  width: 575px;
  height: 100%;

  h2 {
    font-size: 48px;
    font-weight: 600;
    line-height: 67px;
    text-align: left;
    color: #1b3c74;
  }
  p {
    &:nth-child(1) {
      font-size: 17px;
      font-weight: 600;
      line-height: 18px;
      text-align: left;
      color: #2aa7ff;
    }
    &:nth-child(2) {
    }
  }
`;

export const SectionEightDesDivPara = styled.p`
  font-family: Inter;
  font-size: 17px;
  font-weight: 500;
  line-height: 40.8px;
  text-align: justify;
  color: #77829d;
`;
