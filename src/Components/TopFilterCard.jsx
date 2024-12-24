import React from 'react'
import Flex from './Flex'
import Image from './Image'
import Text from './Text'

const TopFilterCard = ({image,text}) => {
  return (
    <>
    <div className="border border-Border rounded-2xl p-6 hover:scale-110 duration-500">
        <Flex className={'items-center gap-x-6'}>
            <Image imgSrc={image} imgAlt={'money'}/>
            <Text as={'p'} text={text} className={'text-base text-black pt-2'}/>
        </Flex>
    </div>
    </>
  )
}

export default TopFilterCard