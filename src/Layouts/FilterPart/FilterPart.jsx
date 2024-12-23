import React from 'react'
import Container from '../../Components/Container'
import Flex from '../../Components/Flex'
import SideBarFilter from '../../Components/SideBarFilter'

const FilterPart = () => {
  return (
    <>
    <div className="py-10">
        <Container>
            <Flex>
                <SideBarFilter/>
                
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default FilterPart