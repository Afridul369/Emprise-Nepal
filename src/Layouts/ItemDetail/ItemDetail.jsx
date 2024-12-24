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


const ItemDetail = () => {
  return (
    <>
    <div className="pb-28">
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
                <div className="w-[370px]  py-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae illo deserunt magnam, nostrum, debitis rem numquam aperiam tempora esse laudantium quibusdam quo ratione, nemo enim! Non aut itaque ipsam illum atque suscipit illo recusandae eos consequatur amet hic dicta tempore delectus laborum officiis neque unde nulla fuga sequi, perferendis ab blanditiis porro reiciendis. Itaque commodi, fugiat aspernatur possimus delectus harum ratione? Neque architecto fugit temporibus qui, nostrum similique aspernatur, hic possimus, suscipit animi recusandae. Laborum esse possimus quaerat eum nobis vitae cumque vel iure cum officia. Eius magnam explicabo voluptates? Sit ducimus nisi repudiandae necessitatibus atque fuga sint aliquam perspiciatis.
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default ItemDetail