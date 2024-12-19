import React from 'react'
import Image from './Image'
import Text from './Text'
import Badge from './Badge'

const ActivityCard = ({Badgetitle,Cardimg,title}) => {
  return (
    <>
    <div className="p-7 w-[376px] bg-white rounded-lg shadow-xl">
        <div className="mb-10 flex justify-self-end">
            <Badge Badgetitle={Badgetitle}/>
        </div>
        <Image imgSrc={Cardimg} className={'mb-4'}/>
        <Text as={'p'} text={title} className={'text-2xl font-poppins font-medium text-OxfordBlue mb-4'}/>
        <Text as={'p'} text={'196 Activities'} className={'text-base font-poppins text-Grey'}/>
    </div>
    </>
  )
}

export default ActivityCard