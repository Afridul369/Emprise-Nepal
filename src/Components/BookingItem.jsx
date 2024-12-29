import React from 'react'
import Text from './Text'
import Flex from './Flex'

const BookingItem = ({title,icon,text}) => {
  return (
    <>
    <div className="">
        <div className="">
            <Text as={'p'} text={title} className={'text-base text-Grey3 mb-2'}/>
            <div className="p-3 border border-Border2 rounded-lg mb-7">
                <Flex className={'items-center justify-between'}>
                    <Text as={'p'} text={text} className={'text-base text-Grey'}/>
                    {icon}
                </Flex>
            </div>
        </div>
    </div>
    </>
  )
}

export default BookingItem