import React from 'react'
import Flex from './Flex'
import Image from './Image'
import Rating from '../assets/rating.png'
import RatingBar from './RatingBar'
import RatingFeature from './RatingFeature'
import Badge1 from '../assets/badge1.png'
import Badge2 from '../assets/badge2.png'
import Badge3 from '../assets/badge3.png'
import Text from './Text'

const RatingPart = () => {
  return (
    <>
    <div className="py-8">
        <Flex className={'gap-x-12 '}> 
            <Image imgSrc={Rating} imgAlt={'Rating'}/>
            <div className="">
                <RatingBar photo={Badge1} name={"Brooklyn Simmons"}/>
                <RatingFeature title={'“Exceptional”'}/>
                <RatingBar photo={Badge2} name={"Wade Warren"}/>
                <RatingFeature title={'“Terrific”'}/>
                <RatingBar photo={Badge3} name={"Leslie Alexander"}/>
                <RatingFeature title={'“Awesome”'}/>
                <Text as={'p'} text={'Show 10+ more reviews'} className={'text-Grey4 text-base py-6 border-b'} /> 
            </div>
        </Flex>
    </div>
    </>
  )
}

export default RatingPart