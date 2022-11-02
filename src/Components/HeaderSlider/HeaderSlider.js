import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import styles from "./HeaderSlider.module.css";
import headerImage1 from "../../assets/headerimage1.png";
import headerImage2 from "../../assets/headerimage2.jpg";
import "swiper/css";
import "swiper/css/autoplay";

const HeaderSlider = () => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        className={styles.slider}
        slidesPerView={1}
        loop
        speed={800}
        autoplay={{ delay: 8000 }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img alt="" src={headerImage1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="" src={headerImage2} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeaderSlider;
