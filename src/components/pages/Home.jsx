
import { Link } from "react-router-dom";
import {  useGlobalContext } from "../../Context";
import Navbar from "../Navbar";
import { Splide , SplideSlide } from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"
import styled from 'styled-components'
import SearchBar from "../SearchBar";



const Home = () => {

  const {random, loading, african} = useGlobalContext()
  
  return (
    <div className='bg-white'><Navbar/><SearchBar/>
    <div className=' mt-32  lg:mx-32  sm:mx-16 '>
      <h1 className="text-purple-900 text-4xl text-center md:text-left">Popular now!!</h1>
      <Splide
      options={{
        type: "loop",
        focus:'center',
        perPage:4,
        gap: "5rem",
        arrows:true,
        pagination: false,
        breakpoints:{
          1500: {
            perPage:3,
          },
          1150: {
            perPage:2,
          },
          720: {
            perPage:1,
          }
        },
      
      }}>
      {loading? <h1 className='text-8xl'>Loading...</h1> : random.map(item=>{
        return(
          
          <SplideSlide key={item.id}>
          <Link to={`/${item.id}`} className="w-80 grid place-items-center overflow-hidden my-3 relative mx-auto">
            <img  className="h-56 rounded-2xl  left-0" src={item.image} alt={item.title}/>
            <Gradient/>
            <h2 className='text-xl text-black absolute z-10  bottom-[0%] transform transition-{-50%, 0%} text-center text-white font-semibold text-base '>{item.title}</h2>
          </Link>
          </SplideSlide>
        )
      })}
      </Splide>
      <h1 className="text-purple-900 text-4xl text-center md:text-left mt-10">What's in for Africa!!</h1>
      <Splide
      options={{
        type: "loop",
        focus:'center',
        perPage:4,
        gap: "5rem",
        arrows:true,
        pagination: false,
        breakpoints:{
          1500: {
            perPage:3,
          },
          1150: {
            perPage:2,
          },
          720: {
            perPage:1,
          }
        },
      
      }}>
      {loading? <h1 className='text-8xl'>Loading...</h1> : african.map(item=>{
        return(
          
          <SplideSlide key={item.id}>
          <div  className="w-80 grid place-items-center overflow-hidden my-3 relative mx-auto">
            <img  className="h-56 rounded-2xl  left-0" src={item.image} alt={item.title}/>
            <Gradient/>
            <h2 className='text-xl text-black absolute z-10  bottom-[0%] transform transition-{-50%, 0%} text-center text-white font-semibold text-base '>{item.title}</h2>
          </div>
          </SplideSlide>
        )
      })}
      </Splide>

    </div>
    </div>
  )
}
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Home