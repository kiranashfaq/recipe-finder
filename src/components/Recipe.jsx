import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import LikeBtn from "./Like";
function ViewRecipe(){
    const params = useParams()
    const {name} = params
  
    const [RecipesDetails,setRecipesDetails] = useState([])


useEffect(()=>{


    fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(data => {
   
      setRecipesDetails(data.recipes)
      console.log(data.recipes);
      
     
    })
},[])



    return (
      <div>
<h1 className="food-name"> {name}  <LikeBtn/> </h1>


{
  RecipesDetails.map((detail,index)=>(
    name==detail.name?(
      <>
     <div key={index} className="recipe-sec">
    
    <div  className="recipe-details">
      <h3>Calories : {detail.caloriesPerServing}</h3>
      <br />  
  <h2>Ingredients</h2>
  <p> {detail.ingredients}</p>
<h1>Instructions</h1>
<p>{detail.instructions}</p>

<Link to={'/'}>
<button className="go-back">Go back</button>

</Link>
{/* <i class="bi bi-heart"></i> */}
</div>
<div className="food-img">
<img src={detail.image} alt="" />
</div>
</div>
</>
   ):null

  ))
}

{/* <div className="recipe-details">
  <h2>Ingredients</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis at, in nemo natus cupiditate asperiores consequatur, necessitatibus similique provident optio, dolorem veniam dignissimos eos? Dicta sint et illum repellendus facilis?</p>
<h1>Instructions</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis debitis consequatur, natus reprehenderit ut fugit, iste voluptatum temporibus ipsa similique molestiae sint praesentium numquam illum minima soluta ab magni quo!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odit ipsum enim temporibus reiciendis quo quasi magnam autem ad. Impedit doloremque asperiores tenetur debitis veniam, iure eligendi inventore provident vel!
</p>

<Link to={'/'}>
<button className="go-back">Go back</button>

</Link>

</div>

<div className="food-img">
<img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" alt="" />
</div> */}
      {/* </div> */}
      
      </div>
    );
}
export default ViewRecipe