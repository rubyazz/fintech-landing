import React from 'react'

const CTA = ({ value }) => {
  return (
    <div className='text-center my-5 py-5 px-10 border rounded-xl text-gradient font-poppins font-semibold inline-block' data-aos="flip-up" data-aos-duration="1000">{value}</div>
  )
}

export default CTA