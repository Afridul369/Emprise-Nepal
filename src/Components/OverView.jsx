import React from 'react'
import Flex from './Flex'
import Image from './Image'
import Document from '../assets/document.png'
import Text from './Text'
import Items from './Items'
import Vector1 from '../assets/vector1.png'
import Vector2 from '../assets/vector2.png'
import Vector3 from '../assets/vector3.png'
import Vector4 from '../assets/vector4.png'
import Vector5 from '../assets/vector5.png'
import Vector6 from '../assets/vector6.png'

const OverView = () => {
  return (
    <>
    <div className="py-8">
        <Flex className={'gap-x-12'}>
            <Image imgSrc={Document} imgAlt={'Document'} className={'shrink-0'}/>
            <div className="border-b-2">
                <Text as={'p'} text={'Dolor elit voluptate cupidatat in eiusmod.  '} className={'text-base text-OxfordBlue mb-7'}/>
                <Text as={'p'} text={'Show More...  '} className={'text-base text-Grey mb-14'}/>
                <Flex className={'gap-x-[175px] '}>
                    <Items title1={'Duration'} image={Vector1} imageAlt={'Vector1'} description1={'2 Days'}/>
                    <Items title1={'Activity'} image={Vector2} imageAlt={'Vector1'} description1={'Walking'}/>
                    <Items title1={'Physical '} image={Vector3} imageAlt={'Vector1'} description1={'Strenuous'}/>                   
                </Flex>
                <Flex className={'gap-x-[190px] '}>
                    <Items title1={'Group Size'} image={Vector4} imageAlt={'Vector1'} description1={'8'}/>
                    <Items title1={'Age'} image={Vector5} imageAlt={'Vector1'} description1={'7+'}/>
                    <Items title1={'Season'} image={Vector6} imageAlt={'Vector1'} description1={'Apr-Sep'}/>                   
                </Flex>
            </div>
        </Flex>
    </div>
    </>
  )
}

export default OverView