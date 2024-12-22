import React from 'react'
import HeaderPart from '../HeaderPart/HeaderPart'
import { Outlet } from 'react-router'
import FooterPart from '../FooterPart/FooterPart'

const RootLayoutPart = () => {
  return (
    <>
    <div className="">
        <HeaderPart/>
        <Outlet/>
        <FooterPart/>
    </div>
    </>
  )
}

export default RootLayoutPart