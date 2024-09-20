// import { useState } from 'react'
import Home from "./components/home"
import Card from "./components/Cards"
import './App.css'
import ViewRecipe from "./components/Recipe"
import { HashRouter,Route,Routes } from "react-router-dom"

function App() {

  return (
    <>
{/* <Home/> */}
<HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Recipe/:name" element={<ViewRecipe/>}></Route>
    </Routes>
    </HashRouter>

    </>
  )
}

export default App
