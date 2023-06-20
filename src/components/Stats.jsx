import React from 'react'
import { stats } from '../constants/dataset'

const Stats = () => {
  return (
    <div className='w-[100%] h-[100%] py-14 font-poppins'>
      <div className='flex justify-center gap-20'>
        {stats.map((value) => (
          <h1 key={value.id} className='flex items-center'>
            <span className='font-bold mr-5 text-4xl text-white'>{value.value}</span>
            <span className='font-semibold text-lg text-gradient'>{value.title}</span>
          </h1>
        ))}
      </div>
    </div>
  )
}

export default Stats