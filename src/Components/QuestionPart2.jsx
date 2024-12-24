import React from 'react'
import Flex from './Flex'
import Image from './Image'
import Question from '../assets/question.png'
import QuestionBar from './QuestionBar'
import QuestionFeature from './QuestionFeature'
import Text from './Text'

const QuestionPart2 = () => {
  return (
    <>
    <div className="">
        <Flex className={'gap-x-12'}>
            <Image imgSrc={Question} imgAlt={'Question'}/>
            <div className="">
                <QuestionBar mark={'?'} Que={'What type of clothing are suitable for this trek?'}/>
                <QuestionFeature/>
                <QuestionBar mark={'?'} Que={'What type of clothing are suitable for this trek?'}/>
                <QuestionBar mark={'?'} Que={'What type of clothing are suitable for this trek?'}/>
                <QuestionBar mark={'?'} Que={'What type of clothing are suitable for this trek?'}/>
                <QuestionBar mark={'?'} Que={'What type of clothing are suitable for this trek?'}/>
                <QuestionBar mark={'?'} Que={'What type of clothing are suitable for this trek?'}/>
                <QuestionBar mark={'?'} Que={'What type of clothing are suitable for this trek?'}/>
                <Text as={'p'} text={'Show 10+ more FAQ’s'} className={'text-Grey4 text-base py-6 border-b'} />   
            </div>
        </Flex>
    </div>
    </>
  )
}

export default QuestionPart2