import React from 'react';
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl"

const controls = [
    {label:"Salad" , type:"salad"},
    {label:"Bacon" , type:"bacon"},
    {label:"Cheese" , type:"cheese"},
    {label:"Meat" , type:"meat"},
];

const BuildControls = ({addIngredientHandler,removeIngredientHandler,totalPrice,purchasable,setModelShow}) => {
    return (
        <div className="BuildControls">
            <p style={{marginTop:'1px'}}><strong>Current Price : {totalPrice} Rs</strong></p>
            {controls.map( (ctrl) => <BuildControl key={ctrl.label} label={ctrl.label} type={ctrl.type} addIngredientHandler={addIngredientHandler} removeIngredientHandler={removeIngredientHandler}/>)}
            {purchasable ? <button className="OrderButton" onClick={() => {setModelShow(true)}}> ORDER NOW </button> : null}
        </div>
    )
}

export default BuildControls
