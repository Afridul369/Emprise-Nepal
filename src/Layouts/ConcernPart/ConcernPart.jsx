import React from 'react'
import Container from '../../Components/Container'
import Image from '../../Components/Image'
import Concernimg from '../../assets/concerns.png'

const ConcernPart = () => {
  return (
   <>
   <div className="py-16">
        <Container>
            <div className="">
                <Image imgSrc={Concernimg} imgAlt={'Concernimg'} className={'flex justify-center'}/>
            </div>
        </Container>
   </div>
   </>
  )
}

export default ConcernPart