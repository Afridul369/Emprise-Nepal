import React from 'react'
import Text from './Text'
import Flex from './Flex'
import Image from './Image'
import Itineraryimg from '../assets/itineraryimg1.png'
import ItineraryMap from '../assets/itinenarymap.png'
import ItineraryVarities from './ItineraryVarities'
import Varity1 from '../assets/varity1.png'
import Varity2 from '../assets/varity2.png'
import Varity3 from '../assets/varity3.png'
import { CiCirclePlus } from 'react-icons/ci'



const ItineraryFeature = () => {
  return (
    <>
    <div className="py-10 px-4 border border-Border rounded-b-3xl">
        <div className="border-b mb-6">            
            <Text as={'h1'} text={'Lake Nakuru National Park'} className={'text-base font-semibold text-Grey2 mb-2'} />
        </div>
        <Text as={'p'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam euismod quis oiii'} className={'text-base text-OxfordBlue mb-14'} />
        <Flex className={'gap-x-8 mb-10'}>
            <Image imgSrc={Itineraryimg} imgAlt={'Itineraryimg'}/>
            <Image imgSrc={ItineraryMap} imgAlt={'Itineraryimg'}/>
        </Flex>
        <div className="border-b mb-4">
            <Flex className={'gap-x-14 mb-2'}>
                <Text as={'p'} text={'Accommodation'} className={'text-base font-medium text-OxfordBlue hover:text-Grey duration-500'} />
                <Text as={'p'} text={'Meals'} className={'text-base font-medium text-OxfordBlue hover:text-Grey duration-500'} />
                <Text as={'p'} text={'Inclusions'} className={'text-base font-medium text-OxfordBlue hover:text-Grey duration-500'} />
                <Text as={'p'} text={'Special Info'} className={'text-base font-medium text-OxfordBlue hover:text-Grey duration-500'} />            
            </Flex>
        </div>
        <Text as={'p'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam euismod quis oiii'} className={'text-base text-OxfordBlue mb-8'} />
        <Flex className={'gap-x-12 mb-10'}>
            <div className="">
                <Text as={'p'} text={'Shared Room'} className={'text-base text-Grey mb-4'} />
                <Text as={'p'} text={'Double Room'} className={'text-base text-Grey mb-4'} />
                <Text as={'p'} text={'Single Room'} className={'text-base text-Grey'} />
            </div>
            <div className="">
                <Text as={'p'} text={'Included in package'} className={'text-base text-OxfordBlue mb-4'} />
                <Text as={'p'} text={'£45 per person extra'} className={'text-base text-OxfordBlue mb-4'} />
                <Text as={'p'} text={'£80 per person extra'} className={'text-base text-OxfordBlue'} />
            </div>
        </Flex>
        <Flex className={'justify-between '}>
            <ItineraryVarities title={'Shared'} imgsrc={Varity1} imgalt={'Varity1'}/>
            <ItineraryVarities title={'Double'} imgsrc={Varity2} imgalt={'Varity2'}/>
            <ItineraryVarities title={'Single'} imgsrc={Varity3} imgalt={'Varity3'} icon={<CiCirclePlus  className='absolute text-5xl text-white hover:scale-105 duration-300 bottom-9 left-1/2 -translate-x-1/2'/>}/>
        </Flex>
    </div>
    </>
  )
}

export default ItineraryFeature