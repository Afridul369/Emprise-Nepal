import React from 'react'
import Container from '../../Components/Container'
import Flex from '../../Components/Flex'
import Image from '../../Components/Image'
import Logo from '../../assets/empriseLogo.png'
import Menu from '../../Components/Menu'
import Button1 from '../../Components/Button1'
import { IoSearch } from 'react-icons/io5'
import { Link } from 'react-router'

const HeaderPart = () => {
  return (
    <>
    <div className="py-8 ">
        <Container>
            <Flex className={'items-center'}>      
                <Link to={'/'}>
                    <Image imgSrc={Logo} imgAlt={'Logo'}/>
                </Link>
                <ul className='flex items-center gap-x-16 px-24'>
                    <Link to={'/search'}>
                        <Menu menuname={'Destination'}/>
                    </Link>
                    <Link to={'/tour'}>
                        <Menu menuname={'Activities'}/>
                    </Link>
                    <Menu menuname={'Specials'}/>
                    <IoSearch className='text-2xl'/>
                </ul>
                <Flex className={'gap-x-3 ml-auto'}>
                    <Button1 text={'Login'}/>
                    <Button1 text={'Sign Up'}/>
                </Flex>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default HeaderPart