import React from 'react'
import { features } from '../constants/dataset'

// Animate On Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const ValueBar = () => {
    return (
        <div className='flex flex-col text-white font-poppins'>
            {features.map((value) => (
                <div className='flex flex-row p-5 mb-[2.5%]'>
                    <img className='mr-5 bg-dimBlue p-5 rounded-full object-contain' src={value.icon} data-aos="fade-right" data-aos-duration="1000" />
                    <div className='flex flex-col'>
                        <h1 className='font-semibold max-w-[100%]'>{value.title}</h1>
                        <p className='text-dimWhite text-[14px] max-w-[80%]'>{value.content}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ValueBar