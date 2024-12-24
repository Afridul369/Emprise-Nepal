import React from 'react'
import Flex from './Flex'
import Image from './Image'
import SupportImage from '../assets/support.png'
import Text from './Text'
import SupportCheck from './SupportCheck'
import { FaCheck } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'

const Support = () => {
  return (
    <>
    <div className="">
        <Flex className={'gap-x-12'}>
            <Image imgSrc={SupportImage} imgAlt={'Support'}/>
            <div className="border-b">
                <Text as={'p'} text={'Dolor elit voluptate cupidatat Mollit reprehenderit mascasasc fasf agna tempor ex.'} className={'text-base  text-OxfordBlue mb-6'}/>
                <Text as={'p'} text={'Show More'} className={'text-base  text-Grey mb-14'}/>  
                <SupportCheck icon={<FaCheck className='text-2xl text-SeaGreen'/>} title={'All breakfasts, 4 packed lunches, and 6 dinners'}/>              
                <SupportCheck icon={<FaCheck className='text-2xl text-SeaGreen'/>} title={'All Fees and Taxes'}/>              
                <SupportCheck icon={<FaCheck className='text-2xl text-SeaGreen'/>} title={'All necessary documents and paperwork (TIMS cards and permit)'}/>              
                <SupportCheck icon={<FaCheck className='text-2xl text-SeaGreen'/>} title={'Highly experienced Government Registered guide'}/>              
                <SupportCheck icon={<FaCheck className='text-2xl text-SeaGreen'/>} title={'First aid box'}/>              
                <SupportCheck icon={<FaCheck className='text-2xl text-SeaGreen'/>} title={'Farewell dinner'}/>                            
                <SupportCheck icon={<IoClose  className='text-3xl text-Cross'/>} title={'Alcoholic Beverages'}/>              
                <SupportCheck icon={<IoClose  className='text-3xl text-Cross'/>} title={'Portugal visa fee'}/>              
                <SupportCheck icon={<IoClose  className='text-3xl text-Cross'/>} title={'Personal expenses (Phone calls, bar bills, battery recharge, laundry)'}/>              
                <SupportCheck icon={<IoClose  className='text-3xl text-Cross'/>} title={'Tipping and donations'}/>              
            </div>
        </Flex>
    </div>
    </>
  )
}

export default Support