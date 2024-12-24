import React from 'react'
import Flex from './Flex'
import Text from './Text'
import { BsChevronDown } from 'react-icons/bs'

const QuestionBar = ({mark,Que}) => {
  return (
    <div className="px-3 py-6 border rounded-t-3xl bg-Barbg">
        <Flex className={'gap-x-[180px] items-center justify-between'}>
            <div className="">
                <Flex className={'gap-x-4 items-center'}>
                    <div className="rounded-full w-8 h-8 bg-SeaGreen">
                        <Text as={'p'} text={mark} className={'text-base font-semibold text-Celeste text-center py-1'}/>
                    </div>
                    <Text as={'p'} text={Que} className={'text-base font-semibold text-Grey2 '}/>
                </Flex>
            </div>   
            <div className="">
                <BsChevronDown className='text-2xl text-Down'/>    
            </div>   
        </Flex>           
    </div>
  )
}

export default QuestionBar