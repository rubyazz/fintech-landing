import React from 'react'
import styles from '../styles/styles'
import { bill, google, apple} from '../assets'

const Billing = () => {
  return (
    <div id="management" className={`${styles.paddingY} flex xs:flex-col-reverse ss:flex-row-reverse justify-between items-center w-[100%] h-[100%] text-white font-poppins`} data-aos="fade-up" data-aos-duration="1000">
      <img className='xs:hidden ss:flex xs:w-[100%] xs:h-[100%] ss:w-[40%] ss:h-[40%]'src={bill} alt="payment" data-aos="flip-right" data-aos-duration="1000" />
      <div className='flex flex-col gap-5 xs:items-center xs:text-center ss:text-left ss:items-start' data-aos="fade-right" data-aos-duration="1000">
        <h1 className={`${styles.heading2} max-w-[80%]`}>Легко управляй <span className='text-gradient'>своим</span> денежынм <br /> потоком.</h1>
        <p className={`${styles.paragraph} max-w-[80%]`}>Тут вы можете управлять финансами, считать все расходы и доходы по категориям.</p>
        <div className='flex flex-row'>
        </div>
      </div>
    </div>
  )
}

export default Billing