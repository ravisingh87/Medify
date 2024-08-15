import styled from "styled-components";

export const SectionFiveContainerDiv = styled.div`
  height: 600px;
  position: relative;
  bottom: 10rem;
  p {
    font-size: 48px;
    font-weight: 600;
    line-height: 67px;
    text-align: center;
  }
  .d-flex {
    .swiper {
      width: 100%;
      height: 70vh;
      breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
    }
    .swiper-wrapper {
      // height: 205px;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
    .swiper-slide img {
      display: block;
      // width: 33%;
      // height: 100%;
      object-fit: contain;
    }
  }
  .doc_title {
    width: 23rem;
    font-size: 24px;
    font-weight: 400;
    line-height: 48px;
    text-align: center;
    color: #1b3c74;
  }
  .doc_type {
    width: 23rem;

    font-size: 16px;
    font-weight: 500;
    line-height: 27px;
    text-align: center;
    color: #2aa7ff;
  }
`;

export const SectionFiveProfileDiv = styled.div`
  width: 370px;
  height: 415px;
  box-shadow: 0px 15px 55px -10px #00000017;
  padding: 10px;
  border-radius: 250px 250px 4px 4px;
`;

export const SectionFiveProfileDidWrapper = styled.div`
  width: 350px;
  height: 394px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(144.2deg, #e1f3ff 0%, #2aa7ff 100%);
  padding: 30px 27.5px 0px 27.5px;
  border-radius: 250px 250px 4px 4px;
  opacity: 0px;
`;
