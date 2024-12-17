import React from 'react'

const Badge2 = ({text,className}) => {
  return (
    <>
    <div className="">
        <div className={`w-[56px] p-1 rounded-3xl text-center text-[18px] font-semibold bg-Pink1 text-Pink2 absolute top-7 left-[420px] ${className}`}>
                {/* <Text as={'p'} text={'30%'} className={'text-[18px] font-semibold'}/> */}
                {text}
        </div>
    </div>
    </>
  )
}

export default Badge2