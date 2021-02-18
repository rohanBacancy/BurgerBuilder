import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import "./Burger.css"

const Burger = ( {ingredients} ) => {

    let sumIng=0;

    const transformedIngredients = Object.keys(ingredients)
    .map( (igKey) => {
        return [...Array(ingredients[igKey])].map( (_,i) => 
        {
            return <BurgerIngredient key={igKey+i} type={igKey}/>
        })
    })

    for(let ing in ingredients)
    {
        sumIng += ingredients[ing];
    }

    return (
        <div className="Burger">

          <BurgerIngredient type="bread-top"/>
          {
          (sumIng<=0) ? <p>Start Adding Ingredients</p> : transformedIngredients
          }
          <BurgerIngredient type="bread-bottom"/>

        </div>
    )
}

export default Burger
