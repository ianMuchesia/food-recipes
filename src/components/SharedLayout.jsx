import {  Outlet } from "react-router-dom"
import React from 'react'
import Navbar from "./Navbar"

const SharedLayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
          
    </>
  )
}

export default SharedLayout
    