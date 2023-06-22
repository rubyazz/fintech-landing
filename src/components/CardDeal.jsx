import React from 'react'
import styles from '../styles/styles'
import { Button } from './components'
import { card } from '../assets'

// Animate On Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const CardDeal = () => {
  return (
    <div className={`${styles.paddingY} ${styles.marginY} w-[100%] h-[100%] flex xs:flex-col-reverse xs:items-center ss:flex-row justify-around font-poppins text-white`} data-aos="fade-up" data-aos-duration="1000">
      <img className='xs:w-[70%] xs:h-[70%] xs:my-10 ss:my-0 ss:w-[30%] ss:h-[30%]' src={card} alt="card" data-aos="flip-left" data-aos-duration="1000"/>
      <div className="xs:w-[100%] ss:w-[50%] flex flex-col justify-center text-center">
        <h1 className={`${styles.heading2}`} data-aos="fade-up" data-aos-duration="1000">Find a <span className='text-gradient'>better</span> card deal in few easy steps.</h1>
        <p className={`${styles.paragraph}`} data-aos="fade-up" data-aos-duration="1000">Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
      </div>
    </div>
  )
}

export default CardDeal