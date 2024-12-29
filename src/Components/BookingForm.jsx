import React from 'react'
import Text from './Text'
import Flex from './Flex'
import Badge2 from './Badge2'
import Bagde3 from './Bagde3'
import BookingItem from './BookingItem'
import Icon from './Icon'
import { IoCalendar } from 'react-icons/io5'
import { CiCirclePlus } from 'react-icons/ci'

const BookingForm = () => {
  return (
    <>
    <div className="">
        <div className="w-[370px] bg-Barbg rounded-lg px-6 pt-4 pb-10 py-6">
            <del className='text-Red'><Text as='p' text='£2469' className='text-sm font-medium text-Red mb-2'/></del> 
            <Flex className={'items-center mb-3'}>
                <Text as='p' text='£1759' className='text-OxfordBlue text-4xl font-bold'/>
                <Text as='p' text='per person' className='text-Grey3 text-sm font-medium pr-9 pl-2'/>
                <Bagde3 text={'20% OFF'}/>
            </Flex>
            <Text as='p' text='*Price based on selections bellow.' className='text-Grey text-sm mb-8'/>
            <BookingItem title={'Dates'} text={'Select preferred dates'} icon={<IoCalendar className='text-2xl text-Grey'/>}/>
            <BookingItem title={'Travelers'} text={'2 Adult, 1 Child'} icon={<Icon text={'3'}/>}/>
            <BookingItem title={'Selections'} text={'Flight, hotel, car etc.'} icon={<CiCirclePlus className='text-3xl text-Grey'/>}/>
            <div className="px-20 py-3 border bg-gradient-to-r from-Orange to-Pink rounded-lg mt-8 cursor-pointer">
                <button className='text-[16px] font-semibold text-white '>Check Availability</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default BookingForm