import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <Image src={'/logo.png'} alt='logo' width={16} height={16} />
    </div>
  )
}

export default Navbar