import React from 'react'
import styles from '../styles/styles'
import { Card } from './components'
import { people01, people02, people03 } from '../assets'
import { feedback } from '../constants/dataset'

// Animate On Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Testimonials = () => {
  return (
    <div className={`${styles.paddingY} flex flex-col font-poppins text-white gap-10`} >
      <div className='flex xs:flex-col xs:gap-5 ss:text-left ss:flex-row justify-center items-center text-center gap-0'>
        <h1 className={`${styles.heading2} ss:max-w-[50%] ss:w-[450px]`} data-aos="fade-right" data-aos-duration="1000">What <span className='text-gradient'>people</span> are saying about us</h1>
        <p className={`${styles.paragraph} ss:max-w-[50%] ss:w-[460px] justify-center`} data-aos="fade-left" data-aos-duration="1000">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className='flex xs:flex-col ss:flex-row justify-center gap-10'>
        {feedback.map((values) => (
          <Card key={values.id} {...values} />
        ))}
      </div>
    </div>
  )
}

export default Testimonials