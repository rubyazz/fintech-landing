import React from 'react'
import styles from '../styles/styles'
import { quotes } from '../assets'

const Card = ({content, name, title, img}) => {
    return (
        <div className='flex flex-col max-w-[370px] max-h-full px-[40px] py-[40px] bg-black-gradient rounded-2xl gap-10' data-aos="fade-up" data-aos-duration="1000">
            <p className={`${styles.paragraph}`}>{content}</p>
            <div className='flex flex-row gap-5 items-center'>
                <div className='flex flex-col'>
                    <h1 className='text-[30px] font-poppins font-medium'>{name}</h1>
                    <p className='text-[20px] text-dimWhite font-sans'>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default Card