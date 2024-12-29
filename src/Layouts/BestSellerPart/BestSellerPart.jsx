import React from 'react'
import Container from '../../Components/Container'
import Text from '../../Components/Text'
import Flex from '../../Components/Flex'
import Badge2 from '../../Components/Badge2'
import SellerCard from '../../Components/SellerCard'
import Sellercard1 from '../../assets/sellercard1.png'
import Sellercard2 from '../../assets/sellercard2.png'
import Sellercard3 from '../../assets/sellercard3.png'


const BestSellerPart = ({heading}) => {
  return (
    <>
    <div className="py-16">
        <Container>
            <div className="mb-16">
                <Text as={'h1'} text={heading} className={'text-[40px] font-bold text-OxfordBlue mb-4'} />
                <Text as={'h1'} text={'Sost Brilliant reasons Entrada should be your one-stop-shop!'} className={'text-2xl text-Grey3'} />
            </div>
            <Flex className={'justify-between'}>
                <SellerCard image={Sellercard1} icon={<Badge2 text={'30%'} className={'absolute top-7 left-[420px]'}/>} title={'Train Tour Skyline'} description1={'Check Out Daily Deals and Promotion on Hotels.'} description2={'Easy & Fast Booking'}/>
                <SellerCard image={Sellercard2} icon={<Badge2 text={'40%'} className={'absolute top-7 left-[420px]'}/>} title={'Sea Nature Views'} description1={'Check Out Daily Deals and Promotion on Hotels.'} description2={'Easy & Fast Booking'}/>
                <SellerCard image={Sellercard3} icon={<Badge2 text={'50%'} className={'absolute top-7 left-[420px]'}/>} title={'Trilogy Market Ptr'} description1={'Check Out Daily Deals and Promotion on Hotels.'} description2={'Easy & Fast Booking'}/>    
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default BestSellerPart