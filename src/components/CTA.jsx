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
        <h1 className={`${styles.heading2}`} data-aos='fade-right' data-aos-duration="1000">Демонстрация <span className='text-gradient'>нашего</span> проекта</h1>
        <p className={`${styles.paragraph}`} data-aos='fade-left' data-aos-duration="1000">Вся логика и веб-приложение готово к просмотру, мы создали MVP проекта.</p>
      </div>
    </div>
  )
}

export default CTA