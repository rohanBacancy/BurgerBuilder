import React from 'react'
import './Model.css'
import './loading.css'

const Model = ( { ingredients, totalPrice, modelShow,setModelShow,continueClickHandler,loading,orderErr,setOrderErr} ) => {
    
    let arr,theModel;
    
    if(ingredients)
    arr = Object.keys(ingredients);

    if(loading)
    {
        theModel = <div className="Model"><div className="loader">Loading...</div></div>
    }
    else if(orderErr.length>0)
    {
        theModel = <div className="Model">{orderErr}<div style={{display:'flex',justifyContent:'space-evenly'}}>
           <button className="Modelbtns" onClick={() => {setModelShow(false); setOrderErr("");}} style={{marginTop:'40px'}}>Close</button>
           </div></div>
    }
    else{
    theModel = <div className="Model" id="unimodel">
            <h3 style={{marginBottom:'0px'}}> Order Summary </h3>
           
            { arr &&  arr.map( (ing) => 
           <p key={ing} style={{marginBottom:'2px',fontWeight:'bolder'}}> {ing} -&gt; {ingredients[ing]} </p>  )}

           <p style={{marginTop:'20px'}}><strong>Total Price : {totalPrice} Rs</strong></p>
           <div style={{display:'flex',justifyContent:'space-evenly'}}>
           <button className="Modelbtns" onClick={() => continueClickHandler()} style={{marginBottom:'20px'}}>Continue</button>
           <button className="Modelbtns" onClick={() => {setModelShow(false)}} style={{marginBottom:'20px',marginLeft:'7px'}}>Close</button>
           </div>
        </div>
    }

    return (
        modelShow ? ( theModel ) : null 
    )
}

export default Model
