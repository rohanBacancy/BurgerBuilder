import axios from 'axios';
import React,{useState} from 'react';
import { connect } from 'react-redux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BurgerControls/BuildControls';
import Model from '../../components/Model/Model';
import Checkout from '../Checkout/Checkout';
import * as actionTypes from '../../store/actions';


const BurgerBuilder = ( props ) => {

    const [modelShow,setModelShow] = useState(false);
    const [loading,setLoading] = useState(false);
    const [orderErr,setOrderErr] = useState("");

    const continueClickHandler = () => 
    {
        props.history.push("/checkout");
    }

    return (
        <>
            <Burger ingredients={props.ings}/>
            <BuildControls addIngredientHandler={props.onAddIngredientClick} removeIngredientHandler={props.onRemoveIngredientClick} totalPrice={props.tprice} purchasable={props.psable} setModelShow={setModelShow} onSetPurchasable={props.onSetPurchasable}/>   
            <Model ingredients={props.ings}  totalPrice={props.tprice} modelShow={modelShow} setModelShow={setModelShow} continueClickHandler={continueClickHandler} loading={loading} orderErr={orderErr} setOrderErr={setOrderErr}/>
        </>
    );
}

const mapStatetoProps = (state) =>
{
    return{
        ings : state.ingredients,
        tprice : state.totalPrice,
        psable : state.purchasable,
    };
}

const mapDispatchToProps = (dispatch) =>
{
    return{
        onAddIngredientClick : (ingNm) => dispatch({type:actionTypes.ADD_INGREDIENT,ingredientName:ingNm}),
        onRemoveIngredientClick : (ingNm) => dispatch({type:actionTypes.REMOVE_INGREDIENT,ingredientName:ingNm}),
        onSetPurchasable : () => dispatch({type:actionTypes.SETPURCHASABLE})
    };
}

export default connect(mapStatetoProps,mapDispatchToProps)(BurgerBuilder);
