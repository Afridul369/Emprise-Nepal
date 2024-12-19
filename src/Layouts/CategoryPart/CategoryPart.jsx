import React from 'react'
import Container from '../../Components/Container'
import Flex from '../../Components/Flex'
import Text from '../../Components/Text'
import Beach from '../../assets/beach.png'
import Bungee from '../../assets/bungee.png'
import City from '../../assets/city.png'
import Backpack from '../../assets/backpack.png'
import Jungle from '../../assets/jungle.png'
import ActivityCard from '../../Components/ActivityCard'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";


const CategoryPart = () => {
    var settings  = {
        infinite: true,
        slidesToShow: 4,
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
                <div className="mb-14">
                    <Text as={'h1'} text={'Select Category'} className={'text-[40px] font-poppins mb-4 font-bold text-OxfordBlue'} />
                    <Text as={'p'} text={'Sost Brilliant reasons Entrada should be your one-stop-shop!'} className={'text-2xl font-poppins text-Grey3'} />
                </div>
            </Flex>
            {/* <Flex className={'gap-x-10'}>    */}

            <Slider {...settings}>
                <ActivityCard Badgetitle={'4.9'} Cardimg={Beach} title={'Beach Activity'}/>
                <ActivityCard Badgetitle={'4.5'} Cardimg={Bungee} title={'Bungee Jump'}/>
                <ActivityCard Badgetitle={'3.8'} Cardimg={City} title={'City Tours'}/>
                <ActivityCard Badgetitle={'4.8'} Cardimg={Backpack} title={'Hiking trips'}/>
                <ActivityCard Badgetitle={'4.8'} Cardimg={Jungle} title={'Jungle'}/>
             </Slider>


            {/* </Flex> */}


        </Container>
   </div>
   </>
  )
}

export default CategoryPart