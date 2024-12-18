import React from 'react'
import Container from '../../Components/Container'
import Image from '../../Components/Image'
import Flex from '../../Components/Flex'
import Text from '../../Components/Text'
import Subimg1 from '../../assets/subimg1.png'
import Subimg2 from '../../assets/subimg2.png'
import Subimg3 from '../../assets/subimg3.png'
import { CiMail } from 'react-icons/ci'
import Button3 from '../../Components/Button3'

const SubscribePart = () => {
  return (
    <>
    <div className="py-16">
        <Container>
            <Flex>
                <div className="">
                    <Flex className={'items-center gap-x-7 '}>
                        <Image imgSrc={Subimg1} imgAlt={'Subimg1'}  />
                        <div className="">
                            <Image imgSrc={Subimg2} imgAlt={'Subimg2'} className={'mb-7'}/>
                            <Image imgSrc={Subimg3} imgAlt={'Subimg3'} />
                        </div>
                    </Flex>
                </div>
                <div className="pl-8 py-9">
                    <Text as='p' text='Subscribe For Offers' className='text-2xl text-SeaGreen mb-6'/>
                    <Text as='h1' text='Adventures Calling ' className='text-5xl font-semibold text-OxfordBlue mb-7 '/>
                    <Text as='h1' text='You Guys!' className='text-5xl font-semibold text-OxfordBlue mb-7'/>
                    <Text as='p' text='The Brilliant reasons Entrada should be your one-stop-shop!' className='text-2xl text-Grey3 w-[480px] leading-8'/>
                    <div className="relative mt-16 mb-12">
                      <CiMail className='absolute top-1/2 -translate-y-1/2 text-2xl text-Grey left-5'/>
                      <Flex>
                        <input type="text" placeholder="Enter your email"  className='text-[18px] text-Grey py-5 px-16  w-[450px] shadow-2xl'/>
                        <Button3 text={'Send Now!'}/>
                      </Flex>
                    </div>
                    <Text as='p' text='Expect a reply in 2-3 working days' className='text-base text-Grey3  '/>   
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default SubscribePart