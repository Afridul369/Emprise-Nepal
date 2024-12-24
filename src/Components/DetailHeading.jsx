import React from 'react'
import Flex from './Flex'
import Text from './Text'
import Image from './Image'
import Share from '../assets/share.png'
import Wishlist from '../assets/wishlist.png'
import Star from './Star'
import { FaAngleRight } from 'react-icons/fa'

const DetailHeading = () => {
  return (
    <>
    <div className="border-b-2 border-Border inline-block ">
        <Flex className={'items-center gap-x-1 mb-2'}>
            <Text as={'h1'} text={'Destination'} className={'text-base font-medium text-Grey '}/>
            <FaAngleRight className='text-Grey'/>
            <Text as={'h1'} text={'Portugal'} className={'text-base font-medium text-Grey '}/>
            <FaAngleRight className='text-Grey'/>
            <Text as={'h1'} text={'Laos'} className={'text-base font-medium text-Grey '}/>
        </Flex>
        <Flex className={'gap-x-28 mb-3'}>
            <div className="">
                <Text as={'h1'} text={'Sandy beach holiday in Lagos'} className={'text-4xl font-bold text-OxfordBlue '}/>
            </div>
            <div className="">
                <Flex className={'gap-x-5'}>
                    <Image imgSrc={Share} imgAlt={'Share'}/>
                    <Image imgSrc={Wishlist} imgAlt={'Wishlist'}/>
                </Flex>
            </div>
        </Flex>
        <Flex className={'gap-x-2 mb-3'}>
            <Star/>
            <Text as={'p'} text={'6,788 Reviews'} className={'text-base font-medium text-Grey '}/>
        </Flex>
    </div>
    </>
  )
}

export default DetailHeading