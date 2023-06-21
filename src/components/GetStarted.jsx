import React from 'react'
import {arrowUp} from '../assets'

// Animate On Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const GetStarted = () => {
  return (
    <div className='md:visible xs:invisible bg-primary border rounded-full flex w-[130px] h-[130px] absolute justify-center items-center'>
        <div className='text-gradient font-poppins font-semibold'>
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