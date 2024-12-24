import React from 'react'
import Text from './Text'
import Image from './Image'

const ItineraryVarities = ({title,imgsrc,imgalt,icon}) => {
  return (
    <>
    <div className="relative">
        <Text as={'p'} text={title} className={'text-base text-Grey mb-4'} />
        <Image imgSrc={imgsrc} imgAlt={imgalt}/>
        {icon}
    </div>
    </>
  )
}

export default ItineraryVarities