import styled from "styled-components";

export const HeaderNav = styled.nav`
  height: 96px;
`;

export const HeaderTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.02em;
  text-align: center;
  color: ${(props) => props.theme.color.primary};
  margin-left: 5px;
`;

export const HeaderButton = styled.button`
  background-color: ${(props) => props.theme.color.primary};
  border: none;
`;

export const NavLiTag = styled.li`
cursor:pointer;
&.active {
    color: ${(props) => props.theme.color.primary};
    position: relative;
    top: 2.5px;
    &::after {
      content: '';
      position: relative;
      height: 5px;
         top: 23px;
      border-radius: 5px;
      background-color: ${(props) => props.theme.color.primary};
      display: block;
    };
`;

export const NavAnchorTag = styled.a`
  cursor: pointer;
`;

export const NavbarCollapse = styled.div`
  background-color: ${(props) => props.$size < 990 && props.theme.color.white};
  height: ${(props) => props.$size < 990 && "70vh"};
  border-radius: 20px;
  padding: 10px;
  z-index: 1;
  // window size < 990
  position: ${(props) => (props.$size < 990 ? "absolute" : "relative")};
  top: ${(props) => (props.$size < 990 ? "75px" : 0)};
  width: ${(props) => props.$size < 990 && "69vw"};
`;
