import axios from 'axios';
import React,{useState} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BurgerControls/BuildControls';
import Model from '../../components/Model/Model';
import Checkout from '../Checkout/Checkout';

const BurgerBuilder = ( {history} ) => {

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
    const [loading,setLoading] = useState(false);
    const [orderErr,setOrderErr] = useState("");


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

    const continueClickHandler = () => 
    {
        // setLoading(true);
        // const orderObj = {
        //     customer:{name:"Rohan",address:"Rajmandir flats",pincode:"382330"},
        //     ingredients,
        //     price:totalPrice,
        //     deliveryMethod:"Fastest"
        // };
        // axios.post(" https://react-burger-project-rhn-default-rtdb.firebaseio.com/orders.json",orderObj)
        // .then(response => { console.log(response); setLoading(false); setModelShow(false)} )
        // .catch(err => {console.log(err.message); setOrderErr(err.message); setLoading(false); });
        
        const queryParams = [];
        for(let i in ingredients)
        {
            queryParams.push( encodeURIComponent(i) + "=" + encodeURIComponent(ingredients[i]));
        }
        queryParams.push(encodeURIComponent("totalPrice") + "=" + encodeURIComponent(totalPrice));
        let dt = queryParams.join("&");
        history.push(
            {
                pathname:'/checkout',
                search: "?" + dt
            }
        );
    }

    return (
        <>
            <Burger ingredients={ingredients}/>
            <BuildControls addIngredientHandler={addIngredientHandler} removeIngredientHandler={removeIngredientHandler} totalPrice={totalPrice} purchasable={purchasable} setModelShow={setModelShow}/>   
            <Model ingredients={ingredients}  totalPrice={totalPrice} modelShow={modelShow} setModelShow={setModelShow} continueClickHandler={continueClickHandler} loading={loading} orderErr={orderErr} setOrderErr={setOrderErr}/>
        </>
    );
}

export default BurgerBuilder;
