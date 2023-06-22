import React, { useState } from 'react'
import { navLinks } from '../constants/dataset'
import { close, logo, menu } from '../assets'

// Animate On Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='z-10 w-full flex py-5 justify-between items-center'>
      <img className='w-[120px] h-[60px]' src={logo} alt='hoobank' data-aos='fade-down' data-aos-duration="1000"/>
      <ul className='sm:flex hidden justify-end items-center flex-1 gap-10' data-aos="fade-down" data-aos-duration="2000">
        {navLinks.map((nav) => (
          <li key={nav.id} className='text-white mouse cursor-pointer font-poppins text-sm hover:translate-y-[-5px] ease-out duration-300 transition-all'>
            <a href={nav.id}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden' data-aos='fade-left' data-aos-duration="1000">
        <img src={toggle ? close : menu} alt="menu" className='cursor-pointer' onClick={() => { setToggle(!toggle) }} />
        <div className={`${toggle ? 'flex' : 'hidden'} justify-center border border-slate-300 bg-primary top-0 right-[-20px] absolute min-w-[250px] rounded-xl sidebar m-3 my-9`}>
          <ul className=''>
            {navLinks.map((nav) => (
              <li key={nav.id} className='text-center text-white mouse cursor-pointer font-poppins text-sm hover:translate-y-[-5px] ease-out duration-300 m-5'>
                <a href={nav.id} className='w-auto'>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar