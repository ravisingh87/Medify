import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 835px;
  background: ${(props) => props.theme.color.ligthBlue};
`;

export const HeaderStyle = styled.header`
  width: inherit;
  min-height: 40px;
  background-color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.color.white};
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  padding: 5px;
`;

export const HeaderNav = styled.nav`
  height: 96px;
`;
