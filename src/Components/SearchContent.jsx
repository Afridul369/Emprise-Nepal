import React from 'react'
import Text from './Text'
import Flex from './Flex'

const SearchContent = ({className,title,dec,icon}) => {
  return (
    <div className={`pr-16 border-r pl-16 ${className}`}>
        <div className="mb-5 relative">
            <Text as={'p'} text={title} className={'text-[28px] font-semibold font-poppins text-Grey2  '} />
            <span className='w-[50%] h-1 bg-Orange absolute bottom-2 left-0 opacity-80 -z-10 inline-block'></span>
        </div>
        <Flex className={'items-center gap-x-12'}>
            <Text as={'p'} text={dec} className={'text-[18px] font-poppins text-Grey border-b border-Grey'} />
            {icon}
        </Flex>
    </div>
  )
}

export default SearchContent