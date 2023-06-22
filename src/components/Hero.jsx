import React from 'react'
import { discount, robot } from '../assets'
import styles from '../styles/styles.js'
import '../constants/dataset.js'

// Animate On Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Hero = () => {
  return (
    <section id='' className={`${styles.paddingY} w-[100%] h-[100%] flex flex-row items-center`} data-aos="fade-up" data-aos-duration="1000">
      <div className={`gap-5 flex-col xs:w-[100%]`}>
        <div className='xs:flex-col ss:flex ss:text-left '>
          {/* Discount Component */}
          <div className='flex items-center bg-black-gradient xs:w-[100%] ss:w-[350px] rounded-lg'>
            <img className='w-[40px] h-[40px]' src={discount} alt="" />
            <p className='text-white font-medium xs:text-xs ss:text-sm'>
              20%
              <span className='text-gray-500 font-medium'> DISCOUNT FOR </span>
              1 MONTH
              <span className='text-gray-500 font-medium'> ACCOUNT </span>
            </p>
          </div>

          {/* Text Componennt */}
          <div className='text-white xs:text-center xs:my-12 ss:text-left ss:my-0'>
            <h1 className={`${styles.heading2}`}>
              The Next <br />
              <span className='text-gradient'>Generation</span>
              <br />Payment Method.
            </h1>
            <p className={`${styles.paragraph} xs:w-[100%] ss:w-[50%] font-poppins`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
          </div>
        </div>
      </div>

      {/* Robot Component */}
      <div className='xs:w-[50%] xs:hidden sm:flex sm:w-[75%] flex justify-end pl-5 py-5' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500">
        <img src={robot} alt="robot-hand" className='z-[5] w-[500px] h-[500px] object-contain' />
        <div className='absolute w-[40%] h-[35%] top-0 blue__gradient' />
        <div className='absolute w-[60%] h-[45%] pink__gradient' />
        <div className='absolute w-[50%] h-[25%] bottom-0 white__gradient' />
      </div>
    </section>
  )
}

export default Hero