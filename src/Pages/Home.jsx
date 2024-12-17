import React from 'react'
import HeaderPart from '../Layouts/HeaderPart/HeaderPart'
import BannerPart from '../Layouts/BannerPart/BannerPart'
import CategoryPart from '../Layouts/CategoryPart/CategoryPart'
import TrendingPart from '../Layouts/TrendingPart/TrendingPart'
import DestinationPart from '../Layouts/DestinationPart/DestinationPart'
import BestSellerPart from '../Layouts/BestSellerPart/BestSellerPart'
import GuidePart from '../Layouts/GuidePart/GuidePart'
import ExperiencePart from '../Layouts/ExperiencePart/ExperiencePart'

const Home = () => {
  return (
    <>
    <HeaderPart/>
    <BannerPart/>
    <CategoryPart/>
    <TrendingPart/>
    <DestinationPart/>
    <BestSellerPart/>
    <GuidePart/>
    <ExperiencePart/>
    </>
  )
}

export default Home