import styled from "styled-components";

export const SectionTenContainer = styled.div`
  background: linear-gradient(
    81deg,
    #e7f0ff 9.01%,
    rgba(232, 241, 255, 0.47) 89.11%
  );
  margin-top: -5rem;
  .container {
    display: flex;
    padding-top: 5rem;
    flex-wrap: wrap;
    gap: 50px;

    div {
      width: 575px;
    }

    div:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      img:nth-child(1) {
        position: relative;
        top: 2.2rem;
        left: 20rem;
        z-index: 3;
      }
      img:nth-child(2) {
        position: relative;
        bottom: -3.4rem;
        left: 1.3rem;
        z-index: 2;
        object-fit: scale-down;
      }
      img:nth-child(3) {
        position: relative;
        z-index: 1;
        right: 4rem;
      }
      img:nth-child(4) {
        width: 287px;
        position: relative;
        z-index: 0;
        top: 1rem;
        left: -22.1rem;
        object-fit: contain;
      }
    }
    .arrow {
      position: relative;
      left: -2rem;
      top: 8rem;
    }
    .download_container {
      width: 520px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      label {
        position: relative;
        right: 9.8rem;
      }
      .medify_app {
        width: 510px;
        height: 10rem;
        position: relative;
        right: 33px;
        p {
          font-size: 48px;
          font-weight: 600;
          line-height: 67px;
          text-align: left;
          span {
            font-size: 48px;
            font-weight: 600;
            line-height: 67px;
            text-align: left;
            color: #2aa7ff;
          }
        }
        img {
          width: 68px;
          left: -33rem;
          top: 6rem;
        }
      }
      .input-group_container {
        display: flex;
        gap: 15px;
        margin-top: 10px;
      }
      .input-group {
        width: 390px;
        height: 50px;
        border: 1px solid #f0f0f0;
      }
      .btn {
        width: 121px;
        height: 50px;
        border-radius: 8px;
        opacity: 0px;
        color: #ffffff;
        background: #2aa8ff;
      }
      .play_store {
        display: flex;
        gap: 15px;
        img {
          cursor: pointer;
        }
      }
    }
  }
`;
