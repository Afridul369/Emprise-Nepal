import React from 'react'
import Flex from './Flex'
import Image from './Image'
import Map from '../assets/map.png'
import ItineraryBar from './ItineraryBar'
import ItineraryFeature from './ItineraryFeature'
import Text from './Text'

const Itinerary = () => {
  return (
    <>
    <div className="py-8">
        <Flex className={'gap-x-12'}>
            <Image imgSrc={Map} imgAlt={'Map'}/>
            <div className="">
                <ItineraryBar number={'1'} Day={'Day 1'}/>        
                <ItineraryBar number={'2'} Day={'Day 2'}/>
                <ItineraryBar number={'3'} Day={'Day 3'}/>
                <ItineraryBar number={'4'} Day={'Day 4'}/>
                <ItineraryBar number={'5'} Day={'Day 5'}/>
                <ItineraryBar number={'6'} Day={'Day 6'}/>
                <ItineraryBar number={'7'} Day={'Day 7'}/>
                <Text as={'p'} text={'Show 12 more itinerary days'} className={'text-Grey4 text-base py-6 border-b'} />               
            </div>
        </Flex>
    </div>
    </>
  )
}

export default Itinerary