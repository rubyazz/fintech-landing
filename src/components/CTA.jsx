import React from 'react'
import styles from '../styles/styles'

// Animate On Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const CTA = () => {
  return (
    <div className={`${styles.paddingY} ${styles.paddingX} ${styles.marginY} flex flex-col justify-center items-center text-center w-[100%] h-[100%] rounded-2xl`}>
      <div className='flex flex-col text-white '>
        <h1 className={`${styles.heading2}`} data-aos='fade-right' data-aos-duration="1000">Let’s try our <span className='text-gradient'>service</span> now!</h1>
        <p className={`${styles.paragraph}`} data-aos='fade-left' data-aos-duration="1000">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
    </div>
  )
}

export default CTA