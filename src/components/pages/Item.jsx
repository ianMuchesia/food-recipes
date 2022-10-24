import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../../Context'

const Item = () => {
  const {random} = useGlobalContext()

  const {itemsId} = useParams()

  const singleItem = random.find(item=>{
    return item.id === itemsId
  })
  console.log(itemsId)
  
  console.log(singleItem)
  return (
    <div>
      <h2></h2>
    </div>
  )
}

export default Item
