import React from 'react'
import Flex from './Flex'
import Text from './Text'

const Checkbox = ({text}) => {
  return (
   <>
   <div className="">
        <Flex className={'gap-x-4 items-center mb-4'}>
            <input type="checkbox" placeholder='' className='scale-150'/>
            <Text as={'p'} text={text} className={'text-base text-Grey2 '} />
        </Flex>
   </div>
   </>
  )
}

export default Checkbox