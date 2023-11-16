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
                <div key={value.id} className='flex flex-row p-5 mb-[2.5%]'>
                    <img id='valuebarcard'className='mr-5 p-5 rounded-full object-contain' src={value.icon} data-aos="fade-right" data-aos-duration="1000" />
                    <div className='flex flex-col justify-center'>
                        <h1 className='font-semibold max-w-[100%]' data-aos="fade-left" data-aos-duration="1000">{value.title}</h1>
                        <p className='text-dimWhite text-[14px] max-w-[80%]' data-aos="fade-left" data-aos-duration="1000">{value.content}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ValueBar