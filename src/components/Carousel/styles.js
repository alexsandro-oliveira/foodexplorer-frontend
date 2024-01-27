import styled from "styled-components";

export const Container = styled.div`
  margin: 0 0 2.4rem 2.4rem;
  position: relative;

  > .shadow_layer {
    display: none;
  }

  > .carret_left,
  .carret_right {
    display: none;
  }

  > h2 {
    color: var(--light-light-300, #e1e1e6);
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 24px;
  }

  > .slide_card {
    width: 210px;
    height: 800px;
    /* height: 292px; */
    /* background-color: white; */
    padding: 2.4rem;
  }

  > .swiper {
    width: 100%;
    height: 100%;
    z-index: 999;
  }

  .swiper-button-next,
  .swiper-button-prev {
    position: absolute !important;
    right: -5px;
    padding: 30px;
    top: 220px !important;
    color: transparent !important;
    stroke: #ffffff !important;
    z-index: 2000;
  }
`;
