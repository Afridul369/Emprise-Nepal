import React from 'react'
import Image from './Image'
import Text from './Text'

const QuestionCard = ({className,icon}) => {
  return (
    <>
    <div className="">
        <div className={`p-20  flex flex-col text-center rounded-xl w-[640px] hover:scale-105 duration-500 ${className}`}>
            <Image imgSrc={icon} imgAlt={''} className={'mb-16 mx-auto'}/>
            <div className="">
                <Text as={'h1'} text={'For Sales'} className={'text-[32px] font-medium text-white mb-8 '}/>
                <Text as={'p'} text={'The Brilliant reasons Entrada be your one-stop-shop!'} className={'text-2xl  mb-12 '}/>
                <Text as={'p'} text={'sales@entrada.com'} className={'text-2xl text-white font-medium mb-3'}/>
                <Text as={'p'} text={'+977(985) 456-32-12'} className={'text-2xl text-white font-medium mb-3'}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default QuestionCard