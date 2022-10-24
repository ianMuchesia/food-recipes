import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Categories from './components/pages/Categories'
import Favorites from './components/pages/Favorites'
import Home from './components/pages/Home'
import Item from './components/pages/Item'
import Error from './components/pages/Error'
import Dishes from './components/pages/Dishes'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route index element={<Home/>}/>
          <Route path="/:itemsId" element={<Item/>}/>
          <Route path="Favorites" element={<Favorites/>}/>
          <Route path="Categories" element={<Categories/>}/>
          <Route path="Dishes" element={<Dishes/>}/>
          <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
