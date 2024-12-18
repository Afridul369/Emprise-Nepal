import React from 'react'

const Menu = ({className,menuname}) => {
  return (
    <li className={`text-xl font-poppins font-medium text-OxfordBlue hover:text-SeaGreen duration-500 ${className}`}>{menuname}</li>
  )
}

export default Menu