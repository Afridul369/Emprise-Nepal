import React from 'react'
import Text from './Text'
import Flex from './Flex'
import Checkbox1 from './Checkbox1'
import Image from './Image'
import Range from '../assets/range.png'
import CheckboxStar from './CheckboxStar'
import Checkbox2 from './Checkbox2'


const SideBarFilter = () => {
  return (
    <>
    <div className="px-10">
        <div className="px-12 py-9 border border-Border rounded-2xl">
            <div className="mb-10">
                <Text as={'p'} text={'When are you traveling?'} className={'text-base font-medium  text-Grey3 mb-2'} />
                <input type="text" placeholder='Select Start Date' className='p-3 text-base text-Grey border rounded-xl'/>
            </div>
            <div className="mb-10">
                <Text as={'p'} text={'Popular Tags'} className={'text-base font-medium  text-Grey3 mb-2'} />
                <Checkbox1 text={'Child Friendly'}/>
                <Checkbox1 text={'Taking extra precautions'}/>
                <Checkbox1 text={'Away from the chaos'}/>
                <Checkbox1 text={'Epic Challenges'}/>
                <Checkbox1 text={'Virtual Experiences'}/>
            </div>
            <div className="mb-10">
                <Text as={'p'} text={'Price Range'} className={'text-base font-medium text-Grey3 mb-7'} />
                <Image imgSrc={Range} imgAlt={'range'} className={'mb-4'}/>
                <Flex className={'items-center gap-x-2'}>
                    <div className="py-2 pl-3 pr-20 border border-Border rounded-xl">
                        <Text as={'p'} text={'$ 2500'} className={'text-base text-Grey'}/>
                    </div>
                    <Text as={'p'} text={'-'} className={'text-base text-Grey'}/>
                    <div className="py-2 pl-3 pr-20 border border-Border rounded-xl">
                        <Text as={'p'} text={'$ 7500'} className={'text-base text-Grey'}/>
                    </div>
                </Flex>
            </div>
            <div className="mb-10">
                <Text as={'p'} text={'Duration'} className={'text-base font-medium text-Grey3 mb-3'} />
                <Checkbox2 text={'Upto 1 Hour'}/>
                <Checkbox2 text={'1 to 4 Hours'}/>
                <Checkbox2 text={'4 Hours to 1 Day'}/>
                <Checkbox2 text={'1 to 3 Days'}/>
                <Checkbox2 text={'3 Days or More'}/>
            </div>
            <div className="mb-10">
                <Text as={'p'} text={'Tour Rating'} className={'text-base font-medium text-Grey3 mb-3'} />
                <CheckboxStar/>
                <CheckboxStar/>
                <CheckboxStar/>
                <CheckboxStar/>
                <CheckboxStar/>
            </div>            
            <div className="mb-10">
                <Text as={'p'} text={'Age Group'} className={'text-base font-medium text-Grey3 mb-3'} />
                <Checkbox2 text={'1 & Up'}/>
                <Checkbox2 text={'3 & Up'}/>
                <Checkbox2 text={'7 & Up'}/>
                <Checkbox2 text={'13 & Up'}/>
                <Checkbox2 text={'18 & Up'}/>
            </div>
            <div className="">
                <Text as={'p'} text={'Specials'} className={'text-base font-medium text-Grey3 mb-3'} />
                <Checkbox2 text={'Discounted deals'}/>
                <Checkbox2 text={'Free Cancellations'}/>
                <Checkbox2 text={'Private Groups'}/>
                <Checkbox2 text={'New on Entrada'}/>
                <Checkbox2 text={'Entrada Specials'}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default SideBarFilter