import React from 'react'
import Container from '../../Components/Container'
import Text from '../../Components/Text'
import Guideimg1 from '../../assets/guideimg1.png'
import Guideimg2 from '../../assets/guideimg2.png'
import Guideimg3 from '../../assets/guideimg3.png'
import GuideItem from '../GuideItem/GuideItem'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";


const GuidePart = () => {

    var settings  = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows:false,
        autoplay: true,
        speed: 1000,
        // dots:true,
      };

  return (
   <>
   <div className="py-16 ">
    <Container>
        <div className="mb-16">
            <Text as={'h1'} text={'Tour Guides'} className={'text-[40px] font-bold text-OxfordBlue mb-4'} />
            <Text as={'h1'} text={'Sost Brilliant reasons Entrada should be your one-stop-shop!'} className={'text-2xl text-Grey3 '} />
        </div>
        <Slider {...settings}>
            <GuideItem GuideImage={Guideimg1} GuideAlt={'Guideimg1'}/>
            <GuideItem GuideImage={Guideimg2} GuideAlt={'Guideimg1'}/>
            <GuideItem GuideImage={Guideimg3} GuideAlt={'Guideimg1'}/>
        </Slider>
    </Container>
   </div>
   </>
  )
}

export default GuidePart