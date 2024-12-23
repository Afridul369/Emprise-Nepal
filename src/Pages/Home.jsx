import React from 'react'
import HeaderPart from '../Layouts/HeaderPart/HeaderPart'
import BannerPart from '../Layouts/BannerPart/BannerPart'
import CategoryPart from '../Layouts/CategoryPart/CategoryPart'
import TrendingPart from '../Layouts/TrendingPart/TrendingPart'
import DestinationPart from '../Layouts/DestinationPart/DestinationPart'
import BestSellerPart from '../Layouts/BestSellerPart/BestSellerPart'
import GuidePart from '../Layouts/GuidePart/GuidePart'
import ExperiencePart from '../Layouts/ExperiencePart/ExperiencePart'
import SubscribePart from '../Layouts/SubscribePart/SubscribePart'
import ConcernPart from '../Layouts/ConcernPart/ConcernPart'
import QuestionPart from '../Layouts/QuestionPart/QuestionPart'
import FooterPart from '../Layouts/FooterPart/FooterPart'

const Home = () => {
  return (
    <>
    <BannerPart/>
    <CategoryPart/>
    <TrendingPart/>
    <DestinationPart/>
    <BestSellerPart heading={'Best Seller'}/>
    <GuidePart/>
    <ExperiencePart/>
    <SubscribePart/>
    <ConcernPart/>
    <QuestionPart/>
    </>
  )
}

export default Home