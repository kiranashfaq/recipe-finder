import { useState } from "react";
function LikeBtn(){
 const [Like,setLike]= useState(false)
 const handleLike=()=>{
setLike(!Like)
 }
    return(
        <>
<div className="like-btn" onClick={handleLike}>

    {
    Like ?  (<i className="bi bi-suit-heart-fill"></i>) : <i className="bi bi-suit-heart"></i>
    }

</div>

        </>
    )
}
export default LikeBtn