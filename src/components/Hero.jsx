import React from 'react'
import GetStarted from './GetStarted'
import { discount, robot } from '../assets'
import styles from '../styles/styles.js'
import '../constants/dataset.js'

// Animate On Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Hero = () => {
  return (
    <section id='home' className={`${styles.paddingY} w-full h-full flex justify-center`} data-aos="fade-up" data-aos-duration="1000">
      <div className={`gap-5 flex-col ${styles.flexStart} `}>
        {/* Discount Component */}
        <div className='flex items-center bg-black-gradient xs:w-[350px] w-[410px] h-[40px] rounded-lg'>
          <img className='w-[40px] h-[40px]' src={discount} alt="" />
          <p className='text-white font-medium'>
            20%
            <span className='text-gray-500 font-medium'> DISCOUNT FOR </span>
            1 MONTH
            <span className='text-gray-500 font-medium'> ACCOUNT </span>
          </p>
        </div>

        {/* Text Componennt */}
        <div className='text-white'>
          <div className='flex justify-end' data-aos="fade-left" data-aos-duration="1000">
            {/* GetStarted Component */}
            <GetStarted />
          </div>

          <h1 className='xs:leading-[70px] leading-[100px] font-poppins font-bold text-7xl l xs:text-6xl'>
            The Next <br />
            <span className='text-gradient'>Generation</span>
            <br />Payment Method.
          </h1>
        </div>

        {/* Description Component */}
        <div className='my-6 text-white font-poppins xs:w-[100%] ss:w-[50%] opacity-70'>
          <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
            We examine annual percentage rates, annual fees.</p>
        </div>
      </div>

      {/* Robot Component */}
      <div className='w-[75%] xs:invisible md:visible flex justify-end pl-5 py-5' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500">
        <img src={robot} alt="robot-hand" className='z-[5] w-[500px] h-[500px] object-contain' />
        <div className='absolute w-[40%] h-[35%] top-0 blue__gradient' />
        <div className='absolute w-[60%] h-[45%] pink__gradient' />
        <div className='absolute w-[50%] h-[25%] bottom-0 white__gradient' />
      </div>
    </section>
  )
}

export default Hero