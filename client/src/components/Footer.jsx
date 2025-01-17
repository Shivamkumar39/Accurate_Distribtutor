import React from 'react'

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='border-t'>
        <div className='container mx-auto p-4 text-center flex flex-col lg:flex-row lg:justify-between gap-2'>
            <p>© All Rights Reserved 2025-30.</p>

            <div className='text-center hover:text-green-600'>
                <p>Developed By @Manashvi & @Shivam©</p>
            </div>
            <div className='flex items-center gap-4 justify-center text-2xl'>
                <a href='https://wa.link/lsm4ng' className='hover:text-green-600'>
                    <FaWhatsapp/>
                </a>
                <a href='' className='hover:text-green-600'>
                    <FaInstagram/>
                </a>
                <a href='https://www.linkedin.com/in/shivam-kumar--/' className='hover:text-green-600'>
                    <FaLinkedin/>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
