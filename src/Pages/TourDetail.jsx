import React from 'react'
import DetailImage from '../Layouts/DetailImages/DetailImage'
import ItemDetail from '../Layouts/ItemDetail/ItemDetail'
import BestSellerPart from '../Layouts/BestSellerPart/BestSellerPart'

const TourDetail = () => {
  return (
    <>
    <DetailImage/>
    <ItemDetail/>
    <BestSellerPart heading={'Similar Tours'}/>
    </>
  )
}

export default TourDetail