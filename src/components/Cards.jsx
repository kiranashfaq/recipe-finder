// import { useState,useEffect } from "react";

import { useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import React from "react";

function Card(){
    const [Recipes,setRecipes] = useState([])
    // const [selectedRecipe, setSelectedRecipe] = useState(null);

useEffect(()=>{


    fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(data => {
    //   console.log(data.recipes);
      setRecipes(data.recipes)
      // console.log(data.recipes);
      
    //   localStorage.setItem('recipes', JSON.stringify(data.recipes))
    })
},[])
  




return(
    <>
<div className="container">
        
        {
       Recipes.map((item,index)=>(
        
        <div key={index} className="card-hover">
        <div className="card-hover__content">
          <h3 className="card-hover__title">
           {item.name}
          </h3>
          <p className="card-hover__text">
              <li>Cooking Time Minute : {item.cookTimeMinutes}</li>
              <li>Serving : {item.servings}</li>
              <li>Cuisine : {item.cuisine}</li>
              <li>Meal Type : {item.mealType}</li>
          </p>
          <span className="card-hover__link">
           <Link to={`/Recipe/${item.name}`}><span>View Recipe</span></Link>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>        
          </span>
        </div>
        <div className="card-hover__extra">
          <h4><span></span>click view and get <span>Recipe</span> and enjoy Your Meal!</h4>
        </div>
        <img src={item.image} alt=""/>
      </div>       
      ))
        }
       
      </div>
    </>
)

}
export default Card