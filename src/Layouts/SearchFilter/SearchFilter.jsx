import React from 'react'
import Container from '../../Components/Container'
import Flex from '../../Components/Flex'
import Text from '../../Components/Text'
import { GoChevronDown } from 'react-icons/go'

const SearchFilter = () => {
  return (
    <>
    <Container>
       <div className="py-10">
        <div className="p-6 border border-Border rounded-2xl">
                <Flex className={'justify-between'}>
                    <div className="">
                        <Text as={'p'} text={'Showing 1 - 10 of 2037 results for “cultural”'} className={'text-[18px] font-medium  text-Grey2'} />
                    </div>
                    <div className="pr-8">
                    <Flex className={'items-center gap-x-4'}>
                            <Text as={'p'} text={'Sort by: Most Popular'} className={'text-[18px] font-medium  text-Grey2'} />
                            <GoChevronDown />
                    </Flex>
                    </div>
                </Flex>
            </div>
       </div>
    </Container>
    </>
  )
}

export default SearchFilter