import React from 'react'
import Text from './Text'

const Expert = () => {
  return (
    <>
    <div className="w-[370px] px-6 pt-10">
        <Text as={'p'} text='If you have  question about this tour, please feel free to ask' className='text-Grey3 text-base mb-3'/>
        <button className='text-[18px] text-Grey py-3 px-16 rounded-3xl border border-Border2 mb-5 hover:bg-gradient-to-r hover:from-Orange hover:to-Pink hover:text-white duration-500'>Ask the Tour Expert</button>
        <Text as={'p'} text='*All questions are replied to within 24-48 hrs' className='text-Grey text-sm '/>
    </div>
    </>
  )
}

export default Expert