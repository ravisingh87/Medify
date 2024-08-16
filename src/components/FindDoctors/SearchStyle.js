import styled from "styled-components";

export const SearchContainerDiv = styled.div`
  position: absolute;
  left: 38px;
  top: 5.7rem;
  flex-direction: column;
  overflow: auto;
  width: ${(props) => (props.$from === "city" ? "32.22rem" : "20.22rem")};
  max-height: 160px;
  display: ${(props) => (props.$isData ? "flex" : "none")};
  align-items: center;
  z-index: 1;
  background: #fafbfe;
  border: 1px solid #dee2e6;
  border-radius: 0.4rem;
  cursor: pointer;
  color: #000000;
  transform: translate3d(0px, -40px, 0px);
  padding-left: 17px;

  @media screen and (max-width: 1200px) {
    width: 42.2rem;
  }
  @media screen and (max-width: 991px) {
    width: 32.2rem;
  }
  @media screen and (max-width: 767px) {
    width: 25.2rem;
  }
  @media screen and (max-width: 463px) {
    width: 20.2rem;
  }
`;

export const SearchedTextDiv = styled.div`
  width: 100%;
  height: 2rem;
  padding-top: 5px;
  padding-bottom: 5px;
  &:hover {
    color: ${(props) => props.theme.color.primary};
  }
`;
