import React from 'react'
import Flex from './Flex'
import Text from './Text'

const RatingFeature = ({title}) => {
  return (
    <>
    <div className="py-10 px-4 border rounded-b-2xl">
        <Flex className={'justify-between border-b mb-6'}>
            <Text as={'h1'} text={title} className={'text-[18px] font-semibold text-OxfordBlue '} />
            <Text as={'h1'} text={'Reviewed 23rd, November'} className={'text-base  text-Grey3 mb-4'} />
        </Flex>
        <Text as={'p'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam euismod quis oiii'} className={'text-base text-OxfordBlue '} />
    </div>  
    </>
  )
}

export default RatingFeature