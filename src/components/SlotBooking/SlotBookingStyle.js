import styled from "styled-components";

export const SlotBookingContainerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  //   padding: 15px;
  border-top: 1px solid #f0f0f5;
  flex-direction: column;
`;

export const SlotBookingSpanStyle = styled.span`
  width: 44.08px;
  height: 5px;
  padding: 4.5px 7.49px 4px 10.8px;
  gap: 2.79px;
  border-radius: 3.5px;
  background: #00a500;
`;

export const SlotBookingInnerDiv = styled.div`
  width: 100%;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  .prev,
  .next {
    width: 48px;
    height: 43px;
    border-radius: 50%;
    border: 1px solid #e0e0e4;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.color.primary};
    font-size: 20px;
    cursor: pointer;
  }
  .prev {
    color: ${(props) =>
      props.$disable === -1 ? "#e0e0e4" : props.theme.color.primary};
  }
  .next {
    color: ${(props) =>
      props.$disable === 5 ? "#e0e0e4" : props.theme.color.primary};
  }
  ul {
    width: 100%;
    height: 3rem;
    overflow: hidden;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    scroll-behavior: smooth;
    p {
      margin: 0;
    }
  }
`;

export const SlotBookingLiStyle = styled.li`
  text-align: center;
  padding: 5px;
  // margin: 2px;
  border-bottom: 4px solid #f0f0f5;
  border-bottom-color: ${(props) =>
    props.$isSelected && props.theme.color.primary};
  div {
    width: 14rem;
    cursor: pointer;
    p {
      margin: 0;
      &:nth-child(1) {
        font-size: 16px;
        font-weight: 700;
        line-height: 22.4px;
        text-align: center;
      }
      &:nth-child(2) {
        font-size: 12px;
        font-weight: 400;
        line-height: 16.8px;
        text-align: center;
        color: #01a400;
      }
    }
  }
`;

export const SlotBookingSlotDiv = styled.div`
  width: 100%;
  padding: 20px;
  div {
    height: 73px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #f0f0f5;
    .shift {
      width: 6rem;
    }
    span {
      font-size: 14px;
      font-weight: 400;
      line-height: 19.6px;
    }
    .time_stamp {
      width: 84px;
      height: 31.59px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      padding: 7px;
      border-radius: 3px 0px 0px 0px;
      border: 1px solid #2aa7ff;
      color: #2aa7ff;
      cursor: pointer;
    }
    .time_stamp_container {
      width: 100%;
      display: flex;
      gap: 35px;
    }
  }
`;
