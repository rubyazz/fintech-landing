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

          {/* Text Componennt */}
          <div className={`${styles.marginY} text-white text-center sm:text-left sm:w-[80%] sm:my-0`}>
            <h1 className={`${styles.heading2}`}>
              Следующее <br />
              <span className="text-gradient">Поколение</span>
              <br />
              Онлайн затрат.
            </h1>
            <p className={`${styles.paragraph}`}>
              Менеджмент эксперт нашей команды сделал ресерч на тему FinTech development в стране.
              Нам удалось найти сильно доминирующие и быстро набирающие стороны в онлайн банкинге.
              И мы использовали их в своем веб-приложении.
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
