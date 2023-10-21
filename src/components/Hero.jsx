import React from "react";
import { discount, robot } from "../assets";
import styles from "../styles/styles.js";
import "../constants/dataset.js";

// Animate On Scroll
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Hero = () => {
  return (
    <section
      className={`${styles.marginY} flex flex-col items-center sm:flex-row`}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="gap-5 flex flex-col xs:w-[100%]">
        <div className="flex xs:justify-center xs:items-center sm:justify-start sm:items-start xs:flex-col ss:text-center">
          {/* Discount Component */}
          <div className="flex flex-row justify-center items-center bg-black-gradient xs:w-fit xs:p-2 rounded-lg">
            <img className="w-[40px] h-[40px]" src={discount} alt="" />
            <p className="text-white font-medium xs:text-xs ss:text-sm">
              20%
              <span className="text-gray-500 font-medium"> DISCOUNT FOR </span>1
              MONTH
              <span className="text-gray-500 font-medium"> ACCOUNT </span>
            </p>
          </div>

          {/* Text Componennt */}
          <div className={`${styles.marginY} text-white text-center sm:text-left sm:w-[80%] sm:my-0`}>
            <h1 className={`${styles.heading2}`}>
              The Next <br />
              <span className="text-gradient">Generation</span>
              <br />
              Payment Method.
            </h1>
            <p className={`${styles.paragraph}`}>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
        </div>
      </div>

      {/* Robot Component */}
      <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500">
        <img
          src={robot}
          alt="robot-hand"
          className="z-10 max-w-ss max-h-  sm:max-w-lg sm:max-h-lg object-contain"
        />

        {/* Blur Circle */}
        <div className="absolute w-[50%] h-[50%] left-0 top-0 right-0 bottom-0 blue__gradient" />
        <div className="absolute w-[50%] h-[50%] right-0 top-0 pink__gradient" />
        <div className="absolute w-[50%] h-[50%] left-0 bottom-0 white__gradient" />
      </div>
    </section>
  );
};

export default Hero;
