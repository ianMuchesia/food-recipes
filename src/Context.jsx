import React, {useContext, useEffect, useState} from 'react'

const AppContext = React.createContext()
//api key
const REACT_APP_API_KEY="94a64b8f674b4c8784a5060fdfa15040"

const AppProvider=({children})=>{
    //Navbar toggle button
    const [open , setOpen] = useState(false)

  const handleClick=()=>{
    setOpen(prevOpen=>!prevOpen)
  }



    //fetching random meals for the homepage

    const [random , setRandom]=useState([])

    const getRandomMeals = async()=>{
        setLoading(true)
        try{const response = await fetch(
           `https://api.spoonacular.com/recipes/random?apiKey=${REACT_APP_API_KEY}&number=10`
        )
        const data = await response.json()
        setRandom(data.recipes)
        setDishes(data.recipes)
        setLoading(false)
    }
    catch(error){
        console.log(error)

    }}
    useEffect(()=>{
        getRandomMeals()
    },[])


    //african recipes
    const [african , setAfrican]=useState([])

    const getAfricanMeals = async()=>{
        
        try{const response = await fetch(
           `https://api.spoonacular.com/recipes/complexSearch?apiKey=${REACT_APP_API_KEY}&cuisine=African`
        )
        const data = await response.json()
        
        setAfrican(data.results)
        
    }
    catch(error){
        console.log(error)

    }}
    useEffect(()=>{
        getAfricanMeals()
    },[])
    //loading
    const [ loading , setLoading ] = useState(false)

    //types of dishes
    const [dishes, setDishes] = useState([])


    //selected food
    const [selectedFood, setSelectedFood] =useState([])

    const selectFood =(id)=>
    {
        const food = random.find(item=>item.id===id)
        setSelectedFood(food)
    }




    
return(
        <AppContext.Provider value={{handleClick,open,random,loading,african,dishes,selectedFood ,setSelectedFood}}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppContext, AppProvider}