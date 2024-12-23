import React from 'react'
import Flex from './Flex'
import { FaStar } from 'react-icons/fa'

const CheckboxStar = () => {
  return (
    <>
    <div className="">
        <Flex className={'gap-x-4 items-center mb-5'}>
            <input type="checkbox" placeholder='' className='scale-150'/>
            <Flex className={'gap-x-1'}>
                <FaStar className='text-xl text-Star'/>
                <FaStar className='text-xl text-Star'/>
                <FaStar className='text-xl text-Star'/>
                <FaStar className='text-xl text-Star'/>
                <FaStar className='text-xl text-Star'/>
            </Flex>
        </Flex>
    </div>
    </>
  )
}

export default CheckboxStar