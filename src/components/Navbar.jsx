import React, {useState}from 'react'
import { NavLink } from 'react-router-dom'

import AiOutlineClose from '../assets/AiOutlineClose'
import AiOutlineMenu from '../assets/AiOutlineMenu'
import { useGlobalContext } from '../Context'
const Navbar = () => {

  //open event of the navbar
  const {open} = useGlobalContext()
  

  const classes={
    linkContainer:"mx-4 my-6 md:y-0",
    smallScreenList:"z-[-1]  bg-white w-full left-0 opacity-100  top-[400px]",
    hidden:"hidden",
    navBar:"p-5 bg-white md:flex md:justify-evenly",
    navBarDiv:"flex justify-between items-center",
    navBarTitle:'text-4xl font-[poppins] cursor-pointer text-purple-900',
    toggleSpan:'text-3xl cursor-pointer md:hidden block text-purple-900',
    links:"md:flex md:items-center  md:z-auto md:static md:w-auto md:py-0 py-4 md:pl-0 pl7 md:opacity-100  transition-all ease-in duration-500 text-purple-900 ",
    eachLink:'text-xl hover:text-purple-800 duration-700 hover:underline'
    
  }
  return (
    <div>
      <nav className={classes.navBar}>
        <div className={classes.navBarDiv}>
          <span className={classes.navBarTitle}>food-recipe</span>
          <span className={classes.toggleSpan}>
          {open?<AiOutlineClose/>:<AiOutlineMenu/>}  
          </span>

        </div>
        <ul className={`${classes.links} ${!open && classes.hidden}  ${open && classes.smallScreenList}`}>
          <li className={classes.linkContainer}>
            <NavLink to='/' className={classes.eachLink}>Home</NavLink>
          </li>
          <li className={classes.linkContainer}>
            <NavLink to='Favorites' className={classes.eachLink}>Favorites</NavLink>
          </li>
          <li className={classes.linkContainer}>
            <NavLink to='Categories' className={classes.eachLink}>Categories</NavLink>
          </li>
          <li className={classes.linkContainer}>
            <NavLink to='Dishes' className={classes.eachLink}>Dishes</NavLink>
          </li>
        </ul>
      </nav>      
    </div>
  )
}

export default Navbar
