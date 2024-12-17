import React from 'react'
import Container from '../../Components/Container'
import Text from '../../Components/Text'
import Guideimg1 from '../../assets/guideimg1.png'
import Image from '../../Components/Image'
import Flex from '../../Components/Flex'

const GuidePart = () => {
  return (
   <>
   <div className="py-16 ">
    <Container>
        <div className="mb-16">
            <Text as={'h1'} text={'Tour Guides'} className={'text-[40px] font-bold text-OxfordBlue mb-4'} />
            <Text as={'h1'} text={'Sost Brilliant reasons Entrada should be your one-stop-shop!'} className={'text-2xl text-Grey3 '} />
        </div>
        <Flex>
            <Image imgSrc={Guideimg1} imgAlt={'Guideimg1'}/>
            <div className="py-9 pl-7">
                <div className="mb-28">
                    <Text as={'p'} text={'Adventure Guru'} className={'text-2xl text-SeaGreen mb-3 '}/>
                    <Text as={'p'} text={'Martina'} className={'text-[40px] font-medium text-OxfordBlue  '}/>
                    <Text as={'p'} text={'James Junior'} className={'text-[40px] font-medium text-OxfordBlue  '}/>
                </div>
                <Flex className={'mb-40'}>
                    <div className="">
                        <Text as={'h2'} text={'About'} className={'text-2xl text-black mb-4'}/>
                        <Text as={'h2'} text={'Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking.'} className={'text-base text-Grey mb-4'}/>
                    </div>
                    <div className="">
                        <Text as={'h2'} text={'Journey'} className={'text-2xl text-black mb-4'}/>
                        <Text as={'h2'} text={'Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking.'} className={'text-base text-Grey mb-4'}/>
                    </div>
                </Flex>
                <Flex className={'gap-x-7'}>
                    <Text as={'p'} text='Facebook' className='text-[18px] text-black'/>
                    <Text as={'p'} text='Instagram' className='text-[18px] text-black'/>
                    <Text as={'p'} text='Twitter' className='text-[18px] text-black'/>
                </Flex>
            </div>
        </Flex>
    </Container>
   </div>
   </>
  )
}

export default GuidePart