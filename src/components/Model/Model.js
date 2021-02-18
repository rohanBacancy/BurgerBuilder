import React from 'react'
import './Model.css'

const Model = ( { ingredients, totalPrice, modelShow,setModelShow} ) => {
    
    let arr;
    
    if(ingredients)
    arr = Object.keys(ingredients);

    return (
        modelShow && 
        <div className="Model" id="unimodel">
            <h3 style={{marginBottom:'0px'}}> Order Summary </h3>
           
            { arr &&  arr.map( (ing) => 
           <p key={ing} style={{marginBottom:'2px',fontWeight:'bolder'}}> {ing} -&gt; {ingredients[ing]} </p>  )}

           <p style={{marginTop:'20px'}}><strong>Total Price : {totalPrice} Rs</strong></p>
           <div style={{display:'flex',justifyContent:'space-evenly'}}>
           <button className="Modelbtns" style={{marginBottom:'20px'}}>Continue</button>
           <button className="Modelbtns" onClick={() => {setModelShow(false)}} style={{marginBottom:'20px',marginLeft:'7px'}}>Close</button>
           </div>
        </div>

    )
}

export default Model
