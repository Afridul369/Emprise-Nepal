import React from 'react'

const Button2 = ({className,text}) => {
  return (
    <>
    <div className={`w-[180px] py-5 rounded-[40px] text-2xl text-center bg-white text-SeaGreen ${className}`}>{text}</div>
    </>
  )
}

export default Button2