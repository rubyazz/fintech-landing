import React from 'react'
import {arrowUp} from '../assets'

// Animate On Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const GetStarted = () => {
  return (
    <div data-aos='fade-left' className='ss:visible xs:invisible cursor-pointer bg-primary border rounded-full flex p-[2px] mx-10 mb-10 w-[125px] h-[125px] absolute justify-center items-center'>
        <div className='bg-primary text-gradient font-poppins font-semibold'>
            <div className='flex gap-1'>
                <p>Get</p>
                <img src={arrowUp} alt="arrow-up" />
            </div>
            <p>Started</p>
        </div>
    </div>
  )
}

export default GetStarted