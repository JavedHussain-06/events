import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Header = () => {
  return (
    <header>
      <div>
         <div className='topNav'>
          <Link passHref href='/'> 
          <Image className='logo' alt="logo" src={"/images/logo_black.png"} width={50} height={50} />
          </Link>
          <nav>
          <ul>
            <li>
          <Link href='/' passHref>Home </Link>
            </li>
            <li>
            <Link href='/about-us' passHref>About-us </Link>
            </li>
            <li>
          <Link href='/events' passHref>Events </Link>
            </li>
          </ul>
        </nav>
      </div>
          <p className='title'>Sed ut perspiciatis unde omnis</p>    
       </div>      
      </header>
  )
}

export default Header