import React from 'react'

const Badge = ({className,Badgetitle}) => {
  return (
    <>
    <div className={`h-8 w-14 rounded-2xl bg-AntiqWhite text-Orange text-[18px] font-poppins font-medium text-center items-center ${className}`}>{Badgetitle}</div>
    </>
  )
}

export default Badge