import React from 'react'
import Container from '../../Components/Container'
import Text from '../../Components/Text'
import Flex from '../../Components/Flex'
import Image from '../../Components/Image'
import Destinationimg1 from '../../assets/destinationimg1.png'
import Destinationimg2 from '../../assets/destinationimg2.png'
import Destinationimg3 from '../../assets/destinationimg3.png'
import Destinationimg4 from '../../assets/destinationimg4.png'
import Destinationimg5 from '../../assets/destinationimg5.png'
import Destinationimg6 from '../../assets/destinationimg6.png'

const DestinationPart = () => {
  return (
    <>
    <div className="py-16">
        <Container>
            <div className="mb-16">
                <Text as={'h1'} text={'Top Destinations'} className={'text-[40px] font-bold text-OxfordBlue mb-4'} />
                <Text as={'h1'} text={'Sost Brilliant reasons Entrada should be your one-stop-shop!'} className={'text-2xl text-Grey3'} />
            </div>
            <div className="">
                <Flex className={'justify-between'}>
                    <div className="">
                        <div className="relative hover:scale-105 duration-500">
                            <Image imgSrc={Destinationimg1} imgAlt={'Destinationimg1'} className={'mb-8'}/>
                            <div className="w-[56px] h-8 bg-AntiqWhite rounded-2xl  text-center items-center absolute top-8 left-8">
                                <Text as={'p'} text={'4.5'} className={'text-Orange text-[18px] font-medium py-1 '}/>
                            </div>
                            <div className="absolute bottom-8 left-8">
                                <Text as={'p'} text={'Vietnam'} className={'text-2xl font-medium text-white mb-1'} />
                                <Text as={'p'} text={'Waterfall'} className={'text-base  text-white'} />
                            </div>
                        </div>
                        <div className="relative hover:scale-105 duration-500">
                            <Image imgSrc={Destinationimg2} imgAlt={'Destinationimg2'} className={'mb-8'}/>
                            <div className="w-[56px] h-8 bg-AntiqWhite rounded-2xl  text-center items-center absolute top-8 left-8">
                                <Text as={'p'} text={'4.2'} className={'text-Orange text-[18px] font-medium py-1 '}/>
                            </div>
                            <div className="absolute bottom-8 left-8">
                                <Text as={'p'} text={'Old Rain'} className={'text-2xl font-medium text-white mb-1'} />
                                <Text as={'p'} text={'Waterfall'} className={'text-base  text-white'} />
                            </div>
                        </div>
                    </div>
                    <div className="relative hover:scale-105 duration-500">
                        <Image imgSrc={Destinationimg3} imgAlt={'Destinationimg3'}/>
                        <div className="w-[56px] h-8 bg-AntiqWhite rounded-2xl  text-center items-center absolute top-8 left-8">
                            <Text as={'p'} text={'4.7'} className={'text-Orange text-[18px] font-medium py-1 '}/>
                        </div>
                        <div className="absolute bottom-14 left-8">
                            <Text as={'p'} text={'Greece'} className={'text-2xl font-medium text-white mb-1'} />
                            <Text as={'p'} text={'Waterfall'} className={'text-base text-white'} />
                        </div>
                    </div>
                    <div className="">
                        <div className="relative hover:scale-105 duration-500">
                            <Image imgSrc={Destinationimg4} imgAlt={'Destinationimg4'} className={'mb-8'}/>
                            <div className="w-[56px] h-8 bg-AntiqWhite rounded-2xl  text-center items-center absolute top-8 left-8">
                                <Text as={'p'} text={'4.2'} className={'text-Orange text-[18px] font-medium py-1 '}/>
                            </div>
                            <div className="absolute bottom-8 left-8">
                                <Text as={'p'} text={'London'} className={'text-2xl font-medium text-white mb-1'} />
                                <Text as={'p'} text={'Waterfall'} className={'text-base  text-white'} />
                            </div>
                        </div>
                        <Flex className={'justify-between'}>
                            <div className="relative hover:scale-105 duration-500">
                                <Image imgSrc={Destinationimg5} imgAlt={'Destinationimg4'} className={'mb-8'}/>
                                <div className="w-[56px] h-8 bg-AntiqWhite rounded-2xl  text-center items-center absolute top-8 left-8">
                                    <Text as={'p'} text={'4.2'} className={'text-Orange text-[18px] font-medium py-1 '}/>
                                </div>
                                <div className="absolute bottom-14 left-8">
                                    <Text as={'p'} text={'Amsterdam'} className={'text-2xl font-medium text-white mb-1'} />
                                    <Text as={'p'} text={'Waterfall'} className={'text-base  text-white'} />
                                </div>
                            </div>
                            <div className="relative hover:scale-105 duration-500">
                                <Image imgSrc={Destinationimg6} imgAlt={'Destinationimg4'} className={'mb-8'}/>
                                <div className="w-[56px] h-8 bg-AntiqWhite rounded-2xl  text-center items-center absolute top-8 left-8">
                                    <Text as={'p'} text={'4.2'} className={'text-Orange text-[18px] font-medium py-1 '}/>
                                </div>
                                <div className="absolute bottom-14 left-8">
                                    <Text as={'p'} text={'Paris'} className={'text-2xl font-medium text-white mb-1'} />
                                    <Text as={'p'} text={'Waterfall'} className={'text-base  text-white'} />
                                </div>
                            </div>
                        </Flex>
                    </div>
                </Flex>
            </div>
        </Container>
    </div>
    </>
  )
}

export default DestinationPart