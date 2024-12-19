import React from 'react'
import Container from '../../Components/Container'
import Flex from '../../Components/Flex'
import Text from '../../Components/Text'
import TourCard from '../../Components/TourCard'
import Tourimg1 from '../../assets/tourimg1.png'
import Tourimg2 from '../../assets/tourimg2.png'
import Tourimg3 from '../../assets/tourimg3.png'
import Tourimg4 from '../../assets/tourimg4.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const TrendingPart = () => {
    var settings  = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows:false,
        autoplay: true,
        speed: 1000,
        // dots:true,
      };
  return (
    <>
    <div className="py-16">
        <Container>
            <Flex>
                <div className="mb-16">
                    <Text as={'h1'} text={'Trending 2021'} className={'text-[40px] font-poppins font-bold mb-4 text-OxfordBlue'} />
                    <Text as={'p'} text={'Sost Brilliant reasons Entrada should be your one-stop-shop!'} className={'text-2xl font-poppins text-Grey3'} />
                </div>
            </Flex>
            {/* <Flex className={'justify-between'}> */}
            <Slider {...settings}>
                <TourCard imgSrc={Tourimg1} title={'Mountain Hiking Tour'} description={'Hiking Tour | Stoke on Trent'} price={'$895.00'}/>
                <TourCard imgSrc={Tourimg2} title={'Train Tour Skyline'} description={'Hiking Tour | Stoke on Trent'} price={'$895.00'}/>
                <TourCard imgSrc={Tourimg3} title={'Forest Wild Life'} description={'Hiking Tour | Stoke on Trent'} price={'$895.00'}/>
                <TourCard imgSrc={Tourimg4} title={'Forest Wild Life'} description={'Hiking Tour | Stoke on Trent'} price={'$895.00'}/>
                </Slider>
            {/* </Flex> */}
        </Container>
    </div>
    </>
  )
}

export default TrendingPart