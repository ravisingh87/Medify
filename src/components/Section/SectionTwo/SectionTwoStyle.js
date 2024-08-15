import styled from "styled-components";

export const SectionTwoContainer = styled.div`
  width: 100%;
  min-height: 430px;
  background: ${(props) => props.theme.color.white};
  position: relative;
  bottom: 21rem;
  border-radius: 12px;
  box-shadow: 6px 6px 35px 0px #1028511c;
  .secion_third {
    width: 88%;
  }
`;

export const SectionTwoSpan = styled.span`
  width: 24px;
  height: 24px;
  color: #9ca3af;
  font-size: 27px;
  position: relative;
  left: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionTwoInput = styled.input`
  width: 425px;
  height: 50px;
  padding-left: 60px;
  border-radius: 10px;
  border: 1px solid #f0f0f0;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.02em;
  text-align: left;
`;

export const SectionTwoButton = styled.button`
  width: 120px;
  height: 50px;
  background-color: ${(props) => props.theme.color.primary};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 12px;
  }
`;

export const SectionTwoPara = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0.02em;
  text-align: left;
`;

export const SectionTwoContent = styled.div`
  width: 180px;
  height: 155px;
  color: #abb6c7;
  background: #fafbfe;
  border-radius: 10px;
`;
