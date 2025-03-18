import React, { useRef } from "react";
import styles from "./OurSpaceSlider.component.module.scss";
import { Link } from "react-router-dom";
import ourSpaceSlider from "../../assets/images/our-space-slider-01.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper"; // Import Swiper type
import "swiper/css";
import "swiper/css/autoplay";

const OurSpaceSliderComponent: React.FC = () => {
  const swiperRef = useRef<SwiperClass | null>(null); // Type for Swiper instance
  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <h2 className={styles.mainTitle}>Our Space</h2>
        <p>
          At Little Lantern, we have created more than just a preschool—we've
          built a home away from home where children feel safe, inspired, and
          excited to learn.
        </p>
        <Link to="/" className={styles.exploreBtn}>
          Explore More
        </Link>
      </div>
      <div
        className={styles.rightBox}
        onMouseEnter={() => swiperRef.current?.autoplay.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay.start()}
      >
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          loop={true}
          speed={8000} // Smooth auto-scroll
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // Ensures autoplay pauses on hover
          }}
          modules={[Autoplay]}
          onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)} // Store Swiper instance
        >
          <SwiperSlide>
            <img src={ourSpaceSlider} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ourSpaceSlider} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurSpaceSliderComponent;
