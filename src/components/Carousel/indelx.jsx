import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../Card";
import { Container } from "./styles";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export function Carousel() {
  const slides = window.innerWidth <= 428 ? 1.9 : 3.5;

  const [navigationAvailable, setNavigationAvailable] = useState(false);
  const [slidesInCarrousel, setSlidesInCarrousel] = useState(slides);
  const [spaceBetweenCards, setSpaceBetweenCards] = useState(27);

  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation]}
        slidesPerView={slidesInCarrousel}
        spaceBetween={spaceBetweenCards}
        loop={true}
        navigation={navigationAvailable}
      >
        <SwiperSlide className="slide_card" key="">
          <Card />
        </SwiperSlide>
      </Swiper>
      <div className="shadow_layer"></div>
      <div className="carret_left">
        <img src="" />
      </div>
      <div className="carret_right">
        <img src="" />
      </div>
    </Container>
  );
}
