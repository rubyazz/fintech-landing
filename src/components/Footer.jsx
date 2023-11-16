import React from 'react'
import styles from '../styles/styles'
import FooterLink from './FooterLink'
import { logo } from '../assets'
import { socialMedia } from '../constants/dataset'

const Footer = () => {
  return (
    <div className={`pt-5 mt-10 flex flex-col text-white`}>
      

      <div className='flex xs:flex-col ss:flex-row pt-5 my-5 xs:items-center ss:justify-between border-t border-dimWhite'>
        <p className={`${styles.paragraph} xs:hidden ss:flex`}>Equipe Team 2023 for Center Credit Management System.</p>
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