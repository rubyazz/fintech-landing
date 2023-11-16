  import React from "react";
import styles from "../styles/styles";
import { Card } from "./components";
import { people01, people02, people03 } from "../assets";
import { feedback } from "../constants/dataset";

// Animate On Scroll
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Testimonials = () => {
  return (
    <div
    id="team"
      className={`${styles.paddingY} flex flex-col font-poppins text-white gap-10`}
    >
      <div className="flex xs:flex-col xs:gap-5 ss:text-left ss:flex-row justify-center items-center text-center gap-0">
        <h1
          className={`${styles.heading2} ss:max-w-[50%] ss:w-[450px]`}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Наша команда состоит из <span className="text-gradient">3</span> людей
        </h1>
        </div>
      <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-cente gap-10">
        {feedback.map((values) => (
          <Card key={values.id} {...values} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
