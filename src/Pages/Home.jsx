import React from 'react'
import HeaderPart from '../Layouts/HeaderPart/HeaderPart'
import BannerPart from '../Layouts/BannerPart/BannerPart'
import CategoryPart from '../Layouts/CategoryPart/CategoryPart'
import TrendingPart from '../Layouts/TrendingPart/TrendingPart'
import DestinationPart from '../Layouts/DestinationPart/DestinationPart'
import BestSellerPart from '../Layouts/BestSellerPart/BestSellerPart'

const Home = () => {
  return (
    <>
    <HeaderPart/>
    <BannerPart/>
    <CategoryPart/>
    <TrendingPart/>
    <DestinationPart/>
    <BestSellerPart/>
    </>
  )
}

export default Home