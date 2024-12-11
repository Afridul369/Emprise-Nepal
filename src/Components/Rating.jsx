import React from 'react'
import Flex from './Flex'
import { FaStar } from 'react-icons/fa'

const Rating = ({className}) => {
  return (
  <>
  <div className={`mb-1 ${className}`}>
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

export default Rating