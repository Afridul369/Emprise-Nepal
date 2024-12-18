import React from 'react'
import Container from '../../Components/Container'
import Flex from '../../Components/Flex'
import Text from '../../Components/Text'
import Image from '../../Components/Image'
import Icon3 from '../../assets/icon3.png'
import List from '../../Components/List'
import Button3 from '../../Components/Button3'
import Payment from '../../assets/payment.png'
import { FiPlusCircle } from 'react-icons/fi'
import { FaArrowRightLong } from 'react-icons/fa6'
import { CiMail } from 'react-icons/ci'

const FooterPart = () => {
  return (
    <>
    <div className="py-16">
        <Container>
            <div className="border-b-2 mb-6">
                <div className="pb-10">
                    <Flex className={''}>
                        <div className="">
                            <Flex className={'items-center gap-x-3'}>
                                <FiPlusCircle className='text-3xl'/>
                                <Text as={'h1'} text={'QUICK LINKS'} className={'text-2xl font-semibold text-OxfordBlue '}/>
                            </Flex>
                        </div>
                        <div className="px-16">
                            <Text as={'p'} text={'Explore more categories'} className={'text-2xl  text-Grey3 '}/>
                        </div>
                        <div className="ml-auto">
                            <Text as={'p'} text={'0123-456-324-54 | hello@entrada.com'} className={'text-2xl text-Grey2 '}/>
                        </div>
                    </Flex>
                </div>
            </div>
            <div className="border-b-2">
                <Flex className={'justify-between'}>
                    <div className="">
                        <Text as={'p'} text={'Get in touch'} className={'text-2xl text-SeaGreen mb-6'}/>
                        <Text as={'h1'} text={'Adventures Calling'} className={'text-[40px] font-medium text-OxfordBlue '}/>
                        <Text as={'h1'} text={'You Guys!'} className={'text-[40px] font-medium text-OxfordBlue mb-6'}/>
                    </div>
                    <div className="py-5">
                        <Flex className={'gap-x-6'}>
                            <Image imgSrc={Icon3} imgAlt={'icon3'}/>
                            <div className="">
                                <Text as={'p'} text={'Our Offices'} className={'text-2xl text-black mb-4'}/>
                                <Text as={'p'} text={'Nepal, USA, India'} className={'text-2xl font-medium text-black mb-6'}/>
                                <FaArrowRightLong className='text-3xl'/>
                            </div>
                        </Flex>
                    </div>
                </Flex>
            </div>
            <div className="py-8 border-b-2">
                <Flex className={'justify-between mb-32'}>
                    <Flex className="">
                        <div className="">
                            <Text as={'p'} text={'Services'} className={'text-2xl font-medium text-OxfordBlue mb-7'}/>
                            <ul>
                                <List listitem={'Budget Tours'} className={'text-base text-Grey3 mb-6'}/>
                                <List listitem={'Expert Insight'} className={'text-base text-Grey3 mb-6'}/>
                                <List listitem={'Independent'} className={'text-base text-Grey3 mb-6'}/>
                                <List listitem={'Luxury Tours'} className={'text-base text-Grey3 mb-6'}/>
                                <List listitem={'Safety Tips'} className={'text-base text-Grey3 mb-6'}/>
                                <List listitem={'Tips n Tricks'} className={'text-base text-Grey3 mb-6'}/>
                            </ul>
                        </div>
                        <div className="px-40">
                            <Text as={'p'} text={'Adventures'} className={'text-2xl font-medium text-OxfordBlue mb-7'}/>
                            <ul>
                                <List listitem={'Beach Activity'} className={'text-base text-Grey3 mb-6'}/>
                                <List listitem={'Bungee Jump'} className={'text-base text-Grey3 mb-6'}/>
                                <List listitem={'City Tour'} className={'text-base text-Grey3 mb-6'}/>
                                <List listitem={'Hiking Trips'} className={'text-base text-Grey3 mb-6'}/>
                                <List listitem={'Jungle Safari'} className={'text-base text-Grey3 mb-6'}/>
                                <List listitem={'Night City Walk'} className={'text-base text-Grey3 mb-6'}/>
                            </ul>
                        </div>
                        <div className="">
                            <Text as={'p'} text={'Country'} className={'text-2xl font-medium text-OxfordBlue mb-7'}/>
                            <ul>
                                <List listitem={'USA'} className={'text-base text-Grey3 mb-6'}/>
                                <List listitem={'Australia'} className={'text-base text-Grey3 mb-6'}/>
                                <List listitem={'South Africa'} className={'text-base text-Grey3 mb-6'}/>
                                <List listitem={'West Indies'} className={'text-base text-Grey3 mb-6'}/>
                                <List listitem={'New Zealand'} className={'text-base text-Grey3 mb-6'}/>
                                <List listitem={'Srilanka'} className={'text-base text-Grey3 mb-6'}/>
                            </ul>
                        </div>
                    </Flex>
                    <div className="">
                        <Text as={'p'} text={'Get In Touch'} className={'text-2xl font-medium text-OxfordBlue mb-6'}/>
                        <Flex className={'items-center gap-x-5 mb-6'}>
                            <Text as={'p'} text={'Let’s Talk'} className={'text-[40px] font-medium text-OxfordBlue'}/>
                            <FaArrowRightLong className='text-3xl '/>
                        </Flex>
                        <div className="relative mt-16 mb-12">
                            <CiMail className='absolute top-1/2 -translate-y-1/2 text-2xl text-Grey left-5'/>
                            <Flex>
                                <input type="text" placeholder="Enter your email"  className='text-[18px] text-Grey py-5 px-16  w-[450px] shadow-2xl'/>
                                <Button3 text={'Send Now!'}/>
                            </Flex>
                        </div>
                    </div>
                </Flex>
                <Flex className={'justify-between'}>
                    <div className="">
                        <Text as={'p'} text={'Privacy Policy'} className={'text-2xl text-black '}/>
                    </div>
                    <div className="">
                        <Flex>
                            <Text as={'p'} text={'Linkedin  /  Facebook  /  Instagram'} className={'text-2xl text-black '}/>
                        </Flex>
                    </div>
                </Flex>
            </div>
            <div className="py-6">
                <Flex className={'justify-between'}>
                    <div className="">
                        <Text as={'p'} text={'2016-2021 © Emprise'} className={'text-base text-black'}/>
                    </div>
                    <div className="">
                        <Image imgSrc={Payment} imgAlt={'Payment'}/>
                    </div>
                </Flex>
            </div>
        </Container>
    </div>
    </>
  )
}

export default FooterPart