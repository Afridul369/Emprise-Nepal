import React from 'react'
import Container from '../../Components/Container'
import Text from '../../Components/Text'
import QuestionCard from '../../Components/QuestionCard'
import Icon1 from '../../assets/icon1.png'
import Icon2 from '../../assets/icon2.png'

const QuestionPart = () => {
  return (
    <>
    <div className="py-16">
        <Container>
            <div className="text-center mb-[72px]">
                <Text as={'h1'} text={'Still have a question?'} className={'text-[40px] font-bold text-black mb-4'}/>
                <Text as={'p'} text={'The Brilliant reasons Entrada should be your one-stop-shop!'} className={'text-2xl text-Grey3 '}/>
            </div>
            <div className="flex justify-center gap-x-10">
                <QuestionCard icon={Icon1} className={'bg-SeaGreen text-Celeste'}/>
                <QuestionCard icon={Icon2} className={'bg-OxfordBlue text-Grey'}/>
            </div>
        </Container>
    </div>
    </>
  )
}

export default QuestionPart