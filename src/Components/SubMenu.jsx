import React from 'react'
import Flex from './Flex'
import Text from './Text'

const SubMenu = () => {
  return (
    <>
    <div className="pb-8 pt-8">
        <Flex className={'items-center gap-x-16'}>
            <div className="relative group cursor-pointer">
                <Text as={'p'} text={'Overview'} className={'text-[18px] text-Grey3 hover:text-SeaGreen duration-500 '}/>
                <span className='absolute bottom-0 left-0 w-full h-1 bg-SeaGreen scale-x-0 group-hover:scale-x-100  transition-transform  duration-500 ease-in-out'/>
            </div>
            <div className="relative group cursor-pointer">
                <Text as={'p'} text={'Itinerary'} className={'text-[18px] text-Grey3 hover:text-SeaGreen duration-500 '}/>
                <span className='absolute bottom-0 left-0 w-full h-1 bg-SeaGreen scale-x-0 group-hover:scale-x-100  transition-transform  duration-500 ease-in-out'/>
            </div>
            <div className="relative group cursor-pointer">
                <Text as={'p'} text={'Inclusions'} className={'text-[18px] text-Grey3 hover:text-SeaGreen duration-500 '}/>
                <span className='absolute bottom-0 left-0 w-full h-1 bg-SeaGreen scale-x-0 group-hover:scale-x-100  transition-transform  duration-500 ease-in-out'/>
            </div>
            <div className="relative group cursor-pointer">
                <Text as={'p'} text={'Reviews'} className={'text-[18px] text-Grey3 hover:text-SeaGreen duration-500 '}/>
                <span className='absolute bottom-0 left-0 w-full h-1 bg-SeaGreen scale-x-0 group-hover:scale-x-100  transition-transform  duration-500 ease-in-out'/>
            </div>
            <div className="relative group cursor-pointer">
                <Text as={'p'} text={'FAQ'} className={'text-[18px] text-Grey3 hover:text-SeaGreen duration-500 '}/>
                <span className='absolute bottom-0 left-0 w-full h-1 bg-SeaGreen scale-x-0 group-hover:scale-x-100  transition-transform  duration-500 ease-in-out'/>
            </div>
            <div className="relative group cursor-pointer">
                <Text as={'p'} text={'Essential Info'} className={'text-[18px] text-Grey3 hover:text-SeaGreen duration-500 '}/>
                <span className='absolute bottom-0 left-0 w-full h-1 bg-SeaGreen scale-x-0 group-hover:scale-x-100  transition-transform  duration-500 ease-in-out'/>
            </div>
        </Flex>
    </div>
    </>
  )
}

export default SubMenu