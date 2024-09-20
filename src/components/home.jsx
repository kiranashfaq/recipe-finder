import Card from "./Cards"


function Home(){
   
   
    return(
    
        <>
          <div className="main-container">
        <h1 className="head">Find meals for your ingredients</h1>
        <p className="quote">"Cooking is not about being a chef, it's about making people happy."</p>
        <p className='poet-name'>— Ina Garten</p>
        <div className="input-div">
          <input type="text" placeholder='find recipe' className="input" />
          
          <button id='searchBtn'>Search</button>
        </div>
      </div>
      
<Card/>
        </>
    )
}
export default Home