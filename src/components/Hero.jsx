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
    <section id='home' className={`${styles.paddingY}`}>
      <div className={`py-6 gap-5 flex-col ${styles.flexStart} `}>
        <div className='flex items-center bg-black-gradient xs:w-[350px] w-[410px] h-[40px] rounded-lg'>
          <img className='w-[40px] h-[40px]' src={discount} alt="" />
          <p className='text-white font-medium'>
            20%
            <span className='text-gray-500 font-medium'> DISCOUNT FOR </span>
            1 MONTH
            <span className='text-gray-500 font-medium'> ACCOUNT </span>
          </p>
        </div>

        <div className='text-white'>
          <h1 className='xs:leading-[70px] leading-[100px] font-poppins font-bold text-7xl l xs:text-6xl'>
            The Next <br />
            <span className='text-gradient' data-aos='fade-right'>Generation</span>
            <br />Payment Method.
          </h1>
        </div>

        <div className='my-6 text-white font-poppins xs:w-[100%] ss:w-[50%] opacity-70'>
          <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
            We examine annual percentage rates, annual fees.</p>
        </div>

        <p>test</p>
      </div>
    </section>
  )
}

export default Hero