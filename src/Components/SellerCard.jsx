import React from 'react'
import Image from './Image'
import Text from './Text'
import Flex from './Flex'
import { IoShareSocial } from 'react-icons/io5'

const SellerCard = ({image,icon,title,description1,description2}) => {
  return (
    <>
    <div className="">
        <div className="relative group">
            <Image imgSrc={image} imgAlt={'Sellercard1'}/>
            {icon }
            <div className="absolute bottom-7 left-7 opacity-0 group-hover:opacity-100 duration-500">
                <Text as={'p'} text={'10 Days | 09 Night'} className={'text-[18px] text-white mb-8'} />
                <Flex className={''}>
                    <Text as={'p'} text={'$895.50'} className={'text-[32px] font-semibold text-white border-b-4'}/>
                    <Flex className={'items-center gap-x-4 ml-32'}>
                        <div className="rounded-full p-3 w-12 h-12 hover:bg-black duration-500 bg-white">
                            <IoShareSocial className='text-xl hover:text-white duration-500 text-OxfordBlue'/>
                        </div>
                        <div className="w-32 py-2 rounded-3xl text-center bg-SeaGreen text-white hover:scale-110 duration-500">
                            <Text as={'p'} text={'Explore'} className={'text-[18px] text-white'}/>
                        </div>
                    </Flex>
                </Flex>
            </div>
        </div>
        <div className="mt-8 ">
            <Text as={'h1'} text={title} className={'text-2xl font-medium text-OxfordBlue text-center mb-4'}/>
            <Text as={'h1'} text={description1} className={'text-base text-Grey  text-center'}/>
            <Text as={'h1'} text={description2} className={'text-base text-Grey text-center'}/>
        </div>
    </div>   
    </>
  )
}

export default SellerCard