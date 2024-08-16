import styled from "styled-components";

export const FindDoctorsContainerDiv = styled.div`
  width: 100%;
  background: linear-gradient(
    81deg,
    #e7f0ff 9.01%,
    rgba(232, 241, 255, 0.47) 89.11%
  );
`;
export const FindDoctorsPatchDiv = styled.div`
  width: 100%;
  height: 110px;
  background: linear-gradient(91.75deg, #2aa7ff 1.4%, #0c8ce6 100.57%);
  border-radius: 0px 0px 16px 16px;
`;

export const FindDoctorsSearchDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 15px;
  box-shadow: 6px 6px 35px 0px #1028511c;
  background: ${(props) => props.theme.color.white};
  position: relative;
  bottom: 60px;
  gap: 25px;
  padding-top: 30px;
  padding-bottom: 30px;
  .state {
    width: 20rem;
    @media screen and (max-width: 1200px) {
      width: 42rem;
    }
    @media screen and (max-width: 991px) {
      width: 32rem;
    }
    @media screen and (max-width: 767px) {
      width: 25rem;
    }
    @media screen and (max-width: 463px) {
      width: 20rem;
    }
  }
  .input-group {
    width: auto;
  }
  .city {
    width: 32rem;
    @media screen and (max-width: 1200px) {
      width: 42rem;
    }
    @media screen and (max-width: 991px) {
      width: 32rem;
    }
    @media screen and (max-width: 767px) {
      width: 25rem;
    }
    @media screen and (max-width: 463px) {
      width: 20rem;
    }
  }
  input {
    height: 50px;
    background: #fafbfe;
    border-left: none;
    color: #abb6c7;
    padding-left: 15px;
  }
  span {
    border-right: none;
    color: #abb6c7;
  }
  button {
    width: 230px;
    height: 50px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.02em;
    background: ${(props) => props.theme.color.primary};
    svg {
      font-size: 30px;
    }
  }
`;
