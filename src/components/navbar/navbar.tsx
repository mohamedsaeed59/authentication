import Image from 'next/image'
import React from 'react'
import Logo from "@/assets/images/logo.svg"
import Claendar from "@/assets/images/website-icon.svg"
import { Box } from '@mui/material'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Box className="left">
        <Image src={Logo} alt="Logo" />
      </Box>
      <Box className="right">
        <Link className='right_content' href="/">
          <Image src={Claendar} alt="Logo" />
          <span>Go To website</span>
        </Link>
      </Box>
    </div>
  )
}

export default Navbar