import React from 'react'
import { useGlobalContext } from '../../Context'
import { Link } from 'react-router-dom'

const Dishes = () => {
    const {dishes} = useGlobalContext()

    let dishType = []
    for(let i=0;i<dishes.length;i++){
       const items = dishes[i].dishTypes 
        for(let j=0;j<items.length;j++){
            const firstItem = items[j]
            if (firstItem === items[j]){
                dishType.push(items[j])
            }
        }
    }
    
    const arr = dishType.filter((element, index)=>{
      return dishType.indexOf(element) === index;
    })
   
  return (
    <div>
      

      <Link to='/'> Home</Link>
    </div>
  )
}

export default Dishes
