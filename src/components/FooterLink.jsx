import React from 'react'

const FooterLink = ({ header, contentOne, contentTwo, contentThree, contentFour, contentFive }) => {
    return (
        <div className='flex flex-col font-poppins mr-0 xs:mr-5'>
            <h1 className='mb-5 font-semibold'>{header}</h1>
            <ul className='text-[14px] text-dimWhite w-[100% h-[100%] leading-[30px]'>
                <li>{contentOne}</li>
                <li>{contentTwo}</li>
                <li>{contentThree}</li>
                <li>{contentFour}</li>
                <li>{contentFive}</li>
            </ul>
        </div>
    )
}

export default FooterLink