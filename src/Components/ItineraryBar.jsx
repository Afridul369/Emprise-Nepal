import React, { useRef } from 'react'
import Flex from './Flex'
import Text from './Text'
import ItineraryFeature from './ItineraryFeature'
import { BsChevronDown } from 'react-icons/bs'

const ItineraryBar = ({number,Day}) => {

const modalRef = useRef(null);

const handleClick = () => {
if (modalRef.current.style.display == 'block') {
  modalRef.current.style.display = 'none';
} else {
  modalRef.current.style.display = 'block';
}
};

  return (
    <>
    <div className="px-3 py-6 border rounded-t-3xl bg-Barbg">
        <Flex className={'gap-x-[530px] items-center justify-between'}>
            <div className="">
                <Flex className={'gap-x-4 items-center'}>
                    <div className="rounded-full w-8 h-8 bg-SeaGreen">
                        <Text as={'p'} text={number} className={'text-base font-semibold text-Celeste text-center py-1'}/>
                    </div>
                    <Text as={'p'} text={Day} className={'text-base font-semibold text-Grey2 '}/>
                </Flex>
            </div>   
            <div className="">
                <BsChevronDown className='text-2xl text-Down' onClick={handleClick}/>    
            </div>   
        </Flex>           
    </div>
    <div className={'hidden'} ref={modalRef}>
        <ItineraryFeature />
    </div>
    </>
  )
}

export default ItineraryBar

          
     