import styled from "styled-components";

export const SectionOneDiv = styled.div`
  position: relative;
  top: 50px;
`;

export const SectionOnePara = styled.p`
  font-size: 31px;
  font-weight: 500;
  line-height: 68px;
  letter-spacing: 0.02em;
  text-align: left;
`;

export const SectionOneSpan = styled.span`
  font-size: 56px;
  font-weight: 700;
  line-height: 10px;
  letter-spacing: 0.02em;
  text-align: left;
`;

export const SectionOneParaOne = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.02em;
  text-align: left;
  color: ${(props) => props.theme.color.grey};
`;

export const SectionOneImg = styled.img`
  bottom: 3rem;
  left: 1.4rem;
  object-fit: scale-down;
`;
