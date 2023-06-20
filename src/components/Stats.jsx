import React from 'react'
import { stats } from '../constants/dataset'

const Stats = () => {
  return (
    <div className='w-[100%] h-[100%] ss:py-14 font-poppins'>
      <div className='ss:flex justify-center gap-20'>
        {stats.map((value) => (
          <h1 key={value.id} className='flex items-center xs:mb-5 p-5' >
            <span className='font-bold mr-5 text-4xl text-white' data-aos="fade-right" data-aos-duration="1500">{value.value}</span>
            <span className='font-semibold text-lg text-gradient' data-aos="fade-left" data-aos-duration="1000">{value.title}</span>
          </h1>
        ))}
      </div>
    </div>
  )
}

export default Stats