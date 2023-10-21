import React from "react";
import { stats } from "../constants/dataset";
import styles from "../styles/styles";

const Stats = () => {
  return (
    <div className={`${styles.marginY}`}>
      <div className="flex flex-col md:flex-row justify-center items-center gap-x-24">
        {stats.map((value) => (
          <h1 key={value.id} className="flex items-center xs:mb-5 p-5">
            <span
              className="font-bold mr-5 text-4xl text-white"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              {value.value}
            </span>
            <span
              className="font-semibold text-lg text-gradient"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              {value.title}
            </span>
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Stats;
