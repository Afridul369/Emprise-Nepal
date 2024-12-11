import React from 'react'

const Menu = ({className,menuname}) => {
  return (
    <li className={`text-xl font-poppins font-medium text-OxfordBlue ${className}`}>{menuname}</li>
  )
}

export default Menu