import React from "react";
import styles from "./Find.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Card from "./Card";

function Find() {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>What's in your garage?</h1>
        <div className={styles.text_bg}>
          <p>
            {" "}
            <span>Exlpore what you can have in your garage </span>
          </p>
        </div>
      </div>
      <div className={styles.slider}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{
            340: {
              width: 200,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 4,
            },
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Card image="https://tinyurl.com/ye27w9ss" make="BMW" />
          </SwiperSlide>

          <SwiperSlide>
            <Card image="https://tinyurl.com/3b2csr3d" make="Audi" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image="https://tinyurl.com/5d8bkdxa" make="Tesla" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image="https://tinyurl.com/5fpzv6x4" make="Subaru" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image="https://tinyurl.com/mr469586" make="Honda" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image="https://tinyurl.com/r4yp62vk" make=" Classic" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image="https://tinyurl.com/44p2kdz2" make=" Toyota" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image="https://tinyurl.com/mr469586" make="Honda" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image="https://tinyurl.com/r4yp62vk" make=" Classic" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image="https://tinyurl.com/44p2kdz2" make=" Toyota" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image="https://tinyurl.com/mr469586" make="Honda" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image="https://tinyurl.com/r4yp62vk" make=" Classic" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image="https://tinyurl.com/44p2kdz2" make=" Toyota" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Find;
