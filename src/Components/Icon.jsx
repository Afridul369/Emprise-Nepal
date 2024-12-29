import React from 'react'
import Flex from './Flex'
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci'
import Text from './Text'

const Icon = ({text}) => {
  return (
    <>
    <div className="">
        <Flex className={'items-center gap-x-3'}>
            <CiCircleMinus className='text-3xl text-Grey'/>
            <Text as={'p'} text={text} className={'text-[18px] text-black font-semibold'}/>
            <CiCirclePlus className='text-3xl text-Grey'/>
        </Flex>
    </div>
    </>
  )
}

export default Icon