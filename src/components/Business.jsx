import React from 'react'
import styles from '../styles/styles'
import { CTA, ValueBar } from './components'
import { star, shield, send } from '../assets'

// Animate On Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Business = () => {
  return (
    <section className='py-6 flex ss:flex-row-reverse font-poppins text-white w-[100%] h-[100%] justify-between' data-aos="fade-up" data-aos-duration="1000">
      <div className='max-w-[50%]'>
        <h1 className={`${styles.heading2} font-extrabold text-5xl leading-[70px]`}>You do the <span className='text-gradient'>business</span>, <br /> we'll handle the money.</h1>
        <p className={`${styles.paragraph} max-w-[85%]`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <CTA value={"Get Started"}/>
      </div>

      <div className="max-w-[50%]">
        <ValueBar />
      </div>
    </section>
  )
}

export default Business