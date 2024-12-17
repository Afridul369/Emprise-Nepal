import React from 'react'
import Container from '../../Components/Container'
import Text from '../../Components/Text'
import Button2 from '../../Components/Button2'

const ExperiencePart = () => {
  return (
    <>
    <div className="py-16">
        <Container>
            <div className="px-64 pt-20 pb-10 rounded-2xl bg-SeaGreen">
                <Text as={'h1'} text='Tour the World from Your Couch with #ExperienceLive!' className='text-[56px] text-center font-medium text-white mb-6'/>
                <Text as={'p'} text='To kickstart your digital adventures with Entrada' className='text-[32px] text-center text-Celeste mb-14'/>
                <Button2 text={'Check All'} className={'hover:scale-105 duration-500 mx-auto'}/>
            </div>
        </Container>
    </div>
    </>
  )
}

export default ExperiencePart