import React from 'react'

const Button1 = ({className,text}) => {
  return (
    <>
    <div className={` w-28 rounded-[28px] text-center py-3 bg-white text-OxfordBlue hover:bg-SeaGreen hover:text-white duration-500 ${className}`}>{text}</div>
    </>
  )
}

export default Button1