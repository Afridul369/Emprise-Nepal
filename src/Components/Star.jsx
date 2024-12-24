import React from 'react'
import Flex from './Flex'
import { FaStar } from 'react-icons/fa'

const Star = () => {
  return (
    <>
    <div className="">
        <Flex className={'gap-x-1'}>
            <FaStar className='text-Star'/>
            <FaStar className='text-Star'/>
            <FaStar className='text-Star'/>
            <FaStar className='text-Star'/>
            <FaStar className='text-Star'/>
        </Flex>
    </div>
    </>
  )
}

export default Star