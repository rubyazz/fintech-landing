import React from "react";
import styles from "../styles/styles";
import { clients } from "../constants/dataset";

// Animate On Scroll
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Clients = () => {
  return (
    <div
      className={`${styles.paddingY} xs:hidden ss:flex flex-row w-[100%] h-[100%] gap-5 justify-evenly`}
    >
      {clients.map(({ id, logo }) => (
        <img
          key={id}
          className="object-contain w-[200px] h-[200px]"
          src={logo}
          alt="airbnb"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
      ))}
    </div>
  );
};

export default Clients;
