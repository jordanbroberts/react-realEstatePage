import styles from "./FeaturedPropertiesSlider.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";

import FeaturedPropertiesSlide from "./FeaturedPropertiesSlide";
import { Navigation, Pagination } from "swiper";

const FeaturedProperties = () => {
  return (
    <section className={styles.section}>
      <h3 className={styles.h3}>Featured Properties</h3>
      <div className={styles.sliderContainer}>
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop
          speed={800}
        >
          <SwiperSlide>
            <FeaturedPropertiesSlide />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedPropertiesSlide />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedPropertiesSlide />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedPropertiesSlide />
          </SwiperSlide>
          <SwiperSlide>
            <FeaturedPropertiesSlide />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedProperties;
