import React from 'react'
import TourCard from '../../Components/TourCard'
import image1 from '../../assets/resultimg1.png'
import image2 from '../../assets/resultimg2.png'
import image3 from '../../assets/resultimg3.png'
import image4 from '../../assets/resultimg4.png'
import image5 from '../../assets/resultimg5.png'
import image6 from '../../assets/resultimg6.png'
import image7 from '../../assets/resultimg7.png'
import image8 from '../../assets/resultimg8.png'

const ResultPart = () => {
  return (
    <>
    <div className="pl-10 ">
        <div className="flex flex-wrap gap-x-7">
            <TourCard imgSrc={image1} title={'Cultural highlights round trip'} description={'Hiking Tour | Stoke on Trent'} price={'$895.00'}/>
            <TourCard imgSrc={image2} title={'Cultural highlights round trip'} description={'Hiking Tour | Stoke on Trent'} price={'$895.00'}/>
            <TourCard imgSrc={image3} title={'Cultural highlights round trip'} description={'Hiking Tour | Stoke on Trent'} price={'$895.00'}/>
            <TourCard imgSrc={image4} title={'Cultural highlights round trip'} description={'Hiking Tour | Stoke on Trent'} price={'$895.00'}/>
            <TourCard imgSrc={image2} title={'Cultural highlights round trip'} description={'Hiking Tour | Stoke on Trent'} price={'$895.00'}/>
            <TourCard imgSrc={image5} title={'Cultural highlights round trip'} description={'Hiking Tour | Stoke on Trent'} price={'$895.00'}/>
            <TourCard imgSrc={image6} title={'Cultural highlights round trip'} description={'Hiking Tour | Stoke on Trent'} price={'$895.00'}/>
            <TourCard imgSrc={image7} title={'Cultural highlights round trip'} description={'Hiking Tour | Stoke on Trent'} price={'$895.00'}/>
            <TourCard imgSrc={image1} title={'Cultural highlights round trip'} description={'Hiking Tour | Stoke on Trent'} price={'$895.00'}/>
            <TourCard imgSrc={image8} title={'Cultural highlights round trip'} description={'Hiking Tour | Stoke on Trent'} price={'$895.00'}/>
        </div>
    </div>
    </>
  )
}

export default ResultPart