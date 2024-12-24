import React from 'react'
import Flex from './Flex'
import Text from './Text'


const SupportCheck = ({icon,title}) => {
  return (
    <>
    <div className="">
        <Flex className={'gap-x-4 items-center mb-7'}>
            {icon}
            <Text as={'p'} text={title} className={'text-base  text-OxfordBlue'}/>
        </Flex>
    </div>
    </>
  )
}

export default SupportCheck