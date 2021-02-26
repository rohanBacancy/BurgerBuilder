import React from 'react'
import "./BuildControl.css";

const BuildControl = ({ label,type ,addIngredientHandler,removeIngredientHandler,onSetPurchasable }) => {

    let tmpPrice;
    if(label === "Salad")
                tmpPrice = 10;
    if(label === "Bacon")
                tmpPrice = 30;
    if(label === "Cheese")
                tmpPrice = 20;
    if(label === "Meat")
                tmpPrice = 40;

    return (
        <div className="BuildControl">
            <div className="Label">{label + "(" +tmpPrice+")"}</div>
            <button className="Less" onClick={() => {removeIngredientHandler({type}); onSetPurchasable()}}>Less</button>
            <button className="More" onClick={() => {addIngredientHandler({type}); onSetPurchasable()}}>More</button>
        </div>
    )
}

export default BuildControl
