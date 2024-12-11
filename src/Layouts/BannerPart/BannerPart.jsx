import React from 'react'
import Container from '../../Components/Container'
import Text from '../../Components/Text'
import Flex from '../../Components/Flex'
import Image from '../../Components/Image'
import Bannericon1 from '../../assets/bannericon1.png'
import SearchContent from '../../Components/SearchContent'
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa'
import { CiLocationOn } from 'react-icons/ci'
import { MdOutlineArrowDropDownCircle } from 'react-icons/md'
import { ImCalendar } from 'react-icons/im'
import { IoSearch } from 'react-icons/io5'

const BannerPart = () => {
  return (
    <>
    <div className="pt-12 pb-32">
        <Container>
            <div className="bg-Banner rounded-[30px] bg-no-repeat bg-cover bg-center py-32 px-24 relative">
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
            <div className="w-[1330px] px-8 py-8 bg-white rounded-lg left-1/2 -translate-x-1/2 absolute bottom-[-70px] shadow-lg">
                <Flex className={''}>
                    <SearchContent title={'Location'} dec={'Enter your destination'} icon={<CiLocationOn className='text-2xl text-black'/>}/>
                    <SearchContent title={'Activity'} dec={'Bungee jump'} icon={<MdOutlineArrowDropDownCircle  className='text-2xl text-black'/>}/>
                    <SearchContent  title={'Date'} dec={'Set date'} icon={<ImCalendar className='text-2xl text-black'/>} className={'border-none'}/>
                    <div className="p-7 bg-SeaGreen rounded-xl ml-auto mr-10">
                        <IoSearch className='text-4xl text-white'/>
                    </div>      
                </Flex>
            </div>
            </div>
        </Container>
    </div>
    </>
  )
}

export default BannerPart