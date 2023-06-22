import React from 'react'
import styles from '../styles/styles'
import { Button, ValueBar } from './components'
import { star, shield, send } from '../assets'

// Animate On Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Business = () => {
  return (
    <section className='py-6 flex xs:flex-col ss:flex-row-reverse font-poppins text-white w-[100%] h-[100%] xs:items-center ss:justify-between' data-aos="fade-up" data-aos-duration="1000">
      <div className='ss:max-w-[50%] xs:text-center ss:text-left'>
        <h1 className={`${styles.heading2} font-extrabold leading-[70px]`}>You do the <span className='text-gradient'>business</span>, <br /> we'll handle the money.</h1>
        <p className={`${styles.paragraph} max-w-[100%]`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button value={"Get Started"} />
      </div>

      <div className="ss:max-w-[50%]">
        <ValueBar />
      </div>
    </section>
  )
}

export default Business