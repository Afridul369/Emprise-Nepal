import React from 'react'
import Container from '../../Components/Container'
import Flex from '../../Components/Flex'
import Image from '../../Components/Image'
import Tour01 from '../../assets/tour01.png'
import Tour02 from '../../assets/tour02.png'
import Tour03 from '../../assets/tour03.png'
import Tour04 from '../../assets/tour04.png'
import Tour05 from '../../assets/tour05.png'
import GalleryButton from '../../assets/gallerybutton.png'

const DetailImage = () => {
  return (
    <>
    <div className="">
        <Container>
            <Flex className={'justify-between'}>
                <div className="">
                    <Image imgSrc={Tour01} className={'mb-4'}/>
                    <Image imgSrc={Tour02} className={'mb-4'}/>
                    <Image imgSrc={Tour03} className={'mb-4'}/>
                    <Image imgSrc={Tour04} className={'mb-4'}/>
                </div>
                <div className="relative">
                    <Image imgSrc={Tour05} imgAlt={'tour05'}/>
                    <Image imgSrc={GalleryButton} imgAlt={'GalleryButton'} className={'absolute bottom-10 right-8'}/>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default DetailImage