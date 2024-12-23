import React from 'react'
import Container from '../../Components/Container'
import Flex from '../../Components/Flex'
import SideBarFilter from '../../Components/SideBarFilter'
import ResultPart from '../ResultPart/ResultPart'
import BestSellerPart from '../BestSellerPart/BestSellerPart'

const FilterPart = () => {
  return (
    <>
    <div className="py-10">
        <Container>
            <Flex>
                <SideBarFilter/>
                <ResultPart/>
            </Flex>
            <BestSellerPart heading={'Recently Viewed'}/>
        </Container>
    </div>
    </>
  )
}

export default FilterPart