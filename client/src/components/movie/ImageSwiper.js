import React from "react";
// Import Swiper React components
import { SwiperSlide, Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "../../styles/index.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

const ImageSwiper = ({ id, images }) => {
  let slides = [];
  for (let i = 0; i < images.length; i++) {
    slides.push(
      <SwiperSlide key={`${id}_${i}`}>
        <img src={images[i]} alt="" className="img-fluid" />
      </SwiperSlide>
    );
  }

  return (
    <>
      {images !== null && (
        <Swiper
          className="main-swiper"
          spaceBetween={10}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            loop: true,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          navigation={false}
          modules={[Autoplay, Pagination]}
        >
          {slides}
        </Swiper>
      )}
    </>
  );
};

export default ImageSwiper;
