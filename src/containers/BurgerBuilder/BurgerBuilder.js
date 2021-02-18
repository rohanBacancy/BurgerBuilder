import React,{useState} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BurgerControls/BuildControls';
import Model from '../../components/Model/Model';

const BurgerBuilder = () => {

    const [ingredients,setIngredients] = useState(
        {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0,
        }
    );
    const [totalPrice,setTotalPrice] = useState(20);
    const [purchasable,setPurchasable] = useState(false);
    const [modelShow,setModelShow] = useState(false);


    const calcPrice = (tempIngs) =>
    {
        let tmpPrice = 20;
        for (let ing in tempIngs)
        {
            if(ing === "salad")
                tmpPrice = tmpPrice + tempIngs[ing] * 10;
            if(ing === "bacon")
                tmpPrice = tmpPrice + tempIngs[ing] * 30;
            if(ing === "cheese")
                tmpPrice = tmpPrice + tempIngs[ing] * 20;
            if(ing === "meat")
                tmpPrice = tmpPrice + tempIngs[ing] * 40;
        }
        console.log("current price is : " + tmpPrice);
        if(tmpPrice>20)
        {
            setPurchasable(true);
        }
        else
        {
            setPurchasable(false);
        }
        setTotalPrice(tmpPrice);
    }

    const addIngredientHandler = (type) =>
    {
        let extractedPropType = type["type"];
        let tempIngs = {...ingredients};
        console.log(tempIngs , extractedPropType);
        const oldIngCnt = ingredients[extractedPropType];
        tempIngs[extractedPropType] = oldIngCnt+1;
        setIngredients(tempIngs);
        calcPrice(tempIngs);
    }

    const removeIngredientHandler = (type) =>
    {
        let extractedPropType = type["type"];
        let tempIngs = {...ingredients};
        const oldIngCnt = ingredients[extractedPropType];
        if(oldIngCnt===0)
        {
              alert(`${extractedPropType} isn't present`)  
        }
        else{
        tempIngs[extractedPropType] = oldIngCnt-1;
        setIngredients(tempIngs);
        }
        calcPrice(tempIngs);
    }

    return (
        <>
            <Burger ingredients={ingredients}/>
            <BuildControls addIngredientHandler={addIngredientHandler} removeIngredientHandler={removeIngredientHandler} totalPrice={totalPrice} purchasable={purchasable} setModelShow={setModelShow}/>   
            <Model ingredients={ingredients}  totalPrice={totalPrice} modelShow={modelShow} setModelShow={setModelShow} />
        </>
    );
}

export default BurgerBuilder;
