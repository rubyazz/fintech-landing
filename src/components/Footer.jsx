import React from 'react'
import styles from '../styles/styles'
import FooterLink from './FooterLink'
import { logo } from '../assets'
import { socialMedia } from '../constants/dataset'

const Footer = () => {
  return (
    <div className={`pt-5 mt-10 flex flex-col text-white`}>
      <div className='flex flex-row justify-between'>
        <div className='xs:hidden ss:flex flex-col justify-start pb-10 w-[50%] h-[50%] gap-5'>
          <img className='w-[30%] h-[30%]' src={logo} alt="logo" />
          <p className={`${styles.paragraph} w-[45%] h-[45%]`}>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <FooterLink header='Information' contentOne='Content' contentTwo='How it Works' contentThree='Create' contentFour='Explore' contentFive='Terms & Services' />
        <FooterLink header='Community' contentOne='Help Center' contentTwo='Partners' contentThree='Suggestions' contentFour='Blog' contentFive='Newsletters' />
        <FooterLink header='Partner' contentOne='Our Partner' contentTwo='Become a Partner' />
      </div>

      <div className='flex xs:flex-col ss:flex-row pt-5 my-5 xs:items-center ss:justify-between border-t border-dimWhite'>
        <p className={`${styles.paragraph} xs:hidden ss:flex`}>Copyright 2023 DBank. All Rights Reserved.</p>
        <div className='flex flex-row gap-10'>
          {socialMedia.map(({ id, icon, link }) => (
            <a key={id} href={link} >
              <img className='cursor-pointer hover:translate-y-[-5px] ease-out duration-300' src={icon} alt={icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer