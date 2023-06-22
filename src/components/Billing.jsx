import React from 'react'
import styles from '../styles/styles'
import { bill, google, apple} from '../assets'

const Billing = () => {
  return (
    <div className={`${styles.paddingY} flex xs:flex-col-reverse ss:flex-row-reverse justify-between items-center w-[100%] h-[100%] text-white font-poppins`} data-aos="fade-up" data-aos-duration="1000">
      <img className='xs:hidden ss:flex xs:w-[100%] xs:h-[100%] ss:w-[40%] ss:h-[40%]'src={bill} alt="payment" data-aos="flip-right" data-aos-duration="1000" />
      <div className='flex flex-col gap-5 xs:items-center xs:text-center ss:text-left ss:items-start' data-aos="fade-right" data-aos-duration="1000">
        <h1 className={`${styles.heading2} max-w-[80%]`}>Easily <span className='text-gradient'>control</span> your <br /> billing & invoicing.</h1>
        <p className={`${styles.paragraph} max-w-[80%]`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className='flex flex-row'>
          <img className='mr-[20px]'src={google} alt="play-store" data-aos="fade-up" data-aos-duration="1000"/>
          <img src={apple} alt="app-store" data-aos="fade-down" data-aos-duration="1000"/>
        </div>
      </div>
    </div>
  )
}

export default Billing