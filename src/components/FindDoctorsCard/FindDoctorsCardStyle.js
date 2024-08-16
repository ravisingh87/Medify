import styled from "styled-components";

export const FindDoctorsCardContainer = styled.div``;
export const FindDoctorsCardTitle = styled.div`
  p:nth-child(1) {
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    text-align: left;
  }
  P:nth-child(2) {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #787887;
  }
`;

export const FindDoctorsCardWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
`;
export const FindDoctorsCardData = styled.div`
  width: 820px;
  background: #ffffff;
  display: flex;
  border-radius: 15px;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
`;
export const FindDoctorsCardAdvertisement = styled.div`
  width: 460px;
  border-radius: 15px;
  background: #ffffff;
  img {
    object-fit: cover;
    cursor: pointer;
  }
`;

export const FindDoctorsCardSpan = styled.span`
  width: 125px;
  height: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #8ccfff;
  border-radius: 50%;
`;

export const FindDoctorsCardDataWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  div:nth-child(1) {
    height: 100%;
    position: relative;
    bottom: 25px;
    border: 7px solid white;
    border-radius: 50%;
  }
  div:nth-child(2) {
    width: 20rem;
    height: 100%;
    p {
      text-align: left;
      &:nth-child(1) {
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;
        color: #14bef0;
      }
      &:nth-child(2) {
        font-size: 14px;
        font-weight: 700;
        line-height: 19.6px;
      }
      &:nth-child(3) {
        font-size: 14px;
        font-weight: 400;
        line-height: 19.6px;
        color: #414146;
        margin: 0;
      }
      &:nth-child(4) {
        font-size: 14px;
        font-weight: 400;
        line-height: 19.6px;
        text-align: left;

        span {
          text-align: left;
          &:nth-child(1) {
            font-size: 14px;
            font-weight: 700;
            line-height: 19.6px;
            color: #02a401;
          }
          &:nth-child(2) {
            font-size: 14px;
            font-weight: 400;
            line-height: 19.6px;
            color: #787887;
            text-decoration: line-through;
          }
        }
      }
    }
    div {
      border-top: 1px dashed #e8e8f0;
      button {
        margin-top: 20px;
        background: #00a500;
        span {
          font-family: Lato;
          font-size: 14px;
          font-weight: 700;
          line-height: 14px;
          text-align: left;
          color: #ffffff;
        }
      }
    }
  }
  div:nth-child(3) {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    position: relative;
    top: -20px;
    width: 30%;
    p {
      font-size: 14px;
      font-weight: 500;
      line-height: 19.6px;
      text-align: center;
      color: #01a400;
    }
    button {
      width: 100%;
      height: 40px;
      color: white;
      border-radius: 5px;
      background: #2aa7ff;
      border: 1px solid #14bef0;
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
      text-align: center;
    }
    @media screen and (max-width: 991px) {
      width: 75%;
    }
  }
`;
