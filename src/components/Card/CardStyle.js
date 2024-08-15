import styled from "styled-components";

export const CardContainerDiv = styled.div`
  width: 365px;
  height: 440px;
  display: flex;
  flex-direction: column;
  border: 1px solid #00000012;
`;

export const CardWrapperDiv = styled.div`
  padding: 15px;
  .date_title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
    line-height: 27px;
    text-align: left;
    color: #77829d;
  }
  .details {
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    text-align: left;
    color: #1b3c74;
  }
  .recomendation {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    p {
      margin: 0;
      font-size: 17px;
      font-weight: 500;
      line-height: 27px;
      text-align: left;
      color: #1b3c74;
    }
  }
`;

export const CardSpan = styled.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: #77829d;
  margin: 0 10px;
`;
