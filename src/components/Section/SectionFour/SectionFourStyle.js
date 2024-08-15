import styled from "styled-components";

export const SectionFourContainer = styled.div`
  width: 100%;
  //   height: 730px;
  background: ${(props) => props.theme.color.ligthBlue};
  position: relative;
  bottom: 14rem;
  p {
    font-size: 48px;
    font-weight: 600;
    line-height: 67px;
    text-align: center;
  }
`;

export const SectionFourSpan = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 270px;
  height: 180px;
  padding: 22px 70px 22px 70px;
  border-radius: 10px;
  opacity: 0px;
  box-shadow: 0px 34px 44px 0px #d5dbe470;
  background: #ffffff;
  cursor: pointer;
`;

export const SectionFourPara = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 27px;
  text-align: center;
  color: #abb6c7;
`;
