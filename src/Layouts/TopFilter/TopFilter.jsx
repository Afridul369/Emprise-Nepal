import React from 'react'
import Container from '../../Components/Container'
import Flex from '../../Components/Flex'
import TopFilterCard from '../../Components/TopFilterCard'
import Money from '../../assets/money.png'
import Cross from '../../assets/cross.png'
import Special from '../../assets/special.png'
import Timer from '../../assets/timer.png'
import Chopper from '../../assets/chopper.png'
import Starplus from '../../assets/starplus.png'

const TopFilter = () => {
  return (
    <>
    <div className="py-10">
        <Container>
            <div className="">
                <Flex className={'justify-between'}>
                    <TopFilterCard image={Money} text={'Discounted Deals'}/>
                    <TopFilterCard image={Cross} text={'Free Cancellation'}/>
                    <TopFilterCard image={Special} text={'Entrada Specials'}/>
                    <TopFilterCard image={Timer} text={'Few Seats Left'}/>
                    <TopFilterCard image={Chopper} text={'Private Tours'}/>
                    <TopFilterCard image={Starplus} text={'New on Entrada'}/>
                </Flex>
            </div>
        </Container>
    </div>
    </>
  )
}

export default TopFilter