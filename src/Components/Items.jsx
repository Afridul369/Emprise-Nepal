import React from 'react'
import Text from './Text'
import Flex from './Flex'
import Image from './Image'


const Items = ({image,imageAlt,title1,description1}) => {
  return (
    <>
    <div className="mb-4">
        <Text as={'p'} text={title1} className={'text-base text-Grey3 mb-4'}/>
         <Flex className={'gap-x-2 items-center mb-4'}>
            <Image imgSrc={image} imgAlt={imageAlt}/>
            <Text as={'p'} text={description1} className={'text-base font-medium  text-OxfordBlue '}/>
        </Flex>
    </div>
    </>
  )
}

export default Items