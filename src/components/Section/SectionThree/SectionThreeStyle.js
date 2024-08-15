import styled from "styled-components";

export const SectionThreeContainer = styled.div`
  position: relative;
  bottom: 15rem;
  .swiper {
    width: 100%;
    height: 15rem;
  }
  .swiper-wrapper {
    height: 205px;
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
`;
