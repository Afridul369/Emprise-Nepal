import React from 'react'
import Container from '../../Components/Container'
import Flex from '../../Components/Flex'
import SearchContent from '../../Components/SearchContent'
import { CiLocationOn } from 'react-icons/ci'
import { MdOutlineArrowDropDownCircle } from 'react-icons/md'
import { ImCalendar } from 'react-icons/im'
import { IoSearch } from 'react-icons/io5'
import Banner from '../Banner/Banner'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const BannerPart = () => {
    var settings  = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows:false,
        autoplay: true,
        speed: 1000,
        dots:true,
        // nextArrow: <BannerSlideNext/>,
      };
  return (
    <>
    <div className="pt-12 pb-32">
        <Container>
            <Slider {...settings}>
                <Banner className={'bg-Banner'}/>
                <Banner className={'bg-Banner'}/>
                <Banner className={'bg-Banner2'}/>
            </Slider>
            <div className="w-[1330px] px-8 py-8 bg-white rounded-lg left-1/2 -translate-x-1/2 absolute bottom-[-10px] shadow-lg z-20">
                <Flex className={''}>
                    <SearchContent title={'Location'} dec={'Enter your destination'} icon={<CiLocationOn className='text-2xl text-black'/>}/>
                    <SearchContent title={'Activity'} dec={'Bungee jump'} icon={<MdOutlineArrowDropDownCircle  className='text-2xl text-black'/>}/>
                    <SearchContent  title={'Date'} dec={'Set date'} icon={<ImCalendar className='text-2xl text-black'/>} className={'border-none'}/>
                    <div className="p-7 bg-SeaGreen rounded-xl ml-auto mr-10">
                        <IoSearch className='text-4xl text-white'/>
                    </div>      
                </Flex>
            </div>
        </Container>
    </div>
    </>
  )
}

export default BannerPart