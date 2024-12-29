import React from 'react'
import Text from '../../Components/Text'
import Flex from '../../Components/Flex'
import Image from '../../Components/Image'
import Bannericon1 from '../../assets/bannericon1.png'
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa'

const Banner = ({className}) => {
  return (
    <>
    <div className="">
        <div className={` rounded-[30px] bg-no-repeat bg-cover bg-center py-32 px-24 relative ${className}`}>
            <Text as={'p'} text={'-The Himalayan Mountain Ranges'} className={'text-2xl text-white mb-12'} />
            <Text as={'h1'} text={'Nepal Country'} className={'text-[128px] font-bold text-white mb-14'} />
            <Flex className={'justify-between'}>
                <div className="">
                    <Text as={'p'} text={'-02° C Very Cold'} className={'text-2xl font-medium mb-4 text-white'} /> 
                    <Flex className={'gap-x-3'}>
                        <FaRegArrowAltCircleLeft className='text-5xl text-white'/>
                        <FaRegArrowAltCircleRight className='text-5xl text-white'/>
                    </Flex>
                </div>
                <div className="">
                    <Flex className={'gap-x-4'}>
                        <Image imgSrc={Bannericon1} imgAlt={'Bannericon1'}/>
                        <div className="">
                            <Text as={'p'} text={'We Accept Payment Through '} className={'text-2xl text-white'} />
                            <Text as={'p'} text={'All Cards & Banking'} className={'text-2xl text-white'} />
                            <Text as={'p'} text={'Book Now!'} className={'text-2xl font-bold border-b border-white mt-1 inline-block text-white'} />
                        </div>
                    </Flex>
                </div>
            </Flex>
        </div>
    </div>
    </>
  )
}

export default Banner