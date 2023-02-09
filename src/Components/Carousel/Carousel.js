import React from "react";
import "./Carousel.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import CaseCard from "../CaseCard/CaseCard";

const Carousel = () => {
  return (
    <div className="carousel-wrapper">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <CaseCard
            class="images"
            HeadingText="Coffee Shop"
            repo="https://github.com/IvarOlsson23/AirBean-final"
            repoText="Github repository here"
            text="A full stack Coffee shop application built with React.js, Redux, lowDB and Express.js "
            imageSource1={require("../../assets/Case1-2.png")}
            imageSource2={require("../../assets/Case1-1.png")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CaseCard
            class="images"
            HeadingText="IO Training"
            repo="https://github.com/IvarOlsson23/IO-Training"
            repoText="Github repository here"
            text="A full stack application to help you with your weightlifting goals. This too built with React.js, Redux, lowDB and Express.js "
            imageSource1={require("../../assets/Case2-1.png")}
            imageSource2={require("../../assets/Case2-2.png")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CaseCard
            class="images"
            HeadingText="Interactive shopping"
            repo="https://github.com/IvarOlsson23/Tesla-custom-order-clone"
            repoText="Github repository here"
            text="A clone of Teslas custom order shop. built with React.js and Tailwind.css"
            imageSource1={require("../../assets/Case4-2.png")}
            imageSource2={require("../../assets/Case4-1.png")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CaseCard
            class="images"
            HeadingText="Design systems"
            text="I have experience working with design systems in a larger team of developers and creating fully functional components with these tools."
            imageSource1={require("../../assets/Case3-2.png")}
            imageSource2={require("../../assets/Case3-1.png")}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
