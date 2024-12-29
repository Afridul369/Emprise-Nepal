import React from 'react'
import DetailHeading from '../../Components/DetailHeading'
import Container from '../../Components/Container'
import Flex from '../../Components/Flex'
import SubMenu from '../../Components/SubMenu'
import OverView from '../../Components/OverView'
import Itinerary from '../../Components/Itinerary'
import Support from '../../Components/Support'
import RatingPart from '../../Components/RatingPart'
import QuestionPart2 from '../../Components/QuestionPart2'
import BookingForm from '../../Components/BookingForm'
import Expert from '../../Components/Expert'


const ItemDetail = () => {
  return (
    <>
    <div className="pb-12">
        <Container>
            <Flex className={'gap-x-[162px] justify-end'}>
                <div className="py-6 ">
                    <DetailHeading/>
                    <SubMenu/>
                    <OverView/>
                    <Itinerary/>
                    <Support/>
                    <RatingPart/>
                    <QuestionPart2/>
                </div>
                <div className="">
                    <BookingForm/>
                    <Expert/>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default ItemDetail