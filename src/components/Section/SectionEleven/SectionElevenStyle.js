import styled from "styled-components";

export const SectionElevenContainerDiv = styled.div`
  width: 100%;
  background: #1b3c74;
  margin-top: -0.03rem;
  position: relative;
  z-index: 1;
`;
export const SectionElevenWrapperDiv = styled.div`
  width: 100%;
  padding-top: 30px;
`;
export const SectionElevenContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
export const SectionElevenHomeLogoDiv = styled.div``;
export const SectionElevenConpyRightDiv = styled.div`
  color: ${(props) => props.theme.color.white};
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
  border-top: 1px solid #ffffff1a;
  margin-top: 20px;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: end;
  p {
    margin: 0;
  }
`;
export const SectionElevenLogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: baseline;
  gap: 10rem;
`;
export const SectionElevenLogoContainerDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;
export const SectionElevenLogoSpan = styled.span`
  width: 35px;
  height: 35px;
  background: #fffffffc;
  border-radius: 50%;
  color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SectionElevenContextDiv = styled.div`
  color: ${(props) => props.theme.color.white};
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 25px;
`;

export const SectionElevenContextPara = styled.p`
  width: fit-content;
  text-align: left;
  margin: 0;
  cursor: pointer;
`;
export const SectionElevenContextWrapperDiv = styled.div`
  display: flex;
  gap: 175px;
  flex-wrap: wrap;
  padding-right: 100px;
`;
