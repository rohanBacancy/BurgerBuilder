import React, { useEffect } from 'react';
import Burger from '../Burger/Burger';
import './CheckoutSummery.css';

const CheckoutSummery = ({ingredients,totalPrice,history}) => {


    const onContinueClickHandler = () => {
     history.replace("/checkout/contact-data");   
    }

    const onCancleClickHandler = () => {
        console.log(history);
        history.goBack();
    }

    console.log("checkoutSummery" + totalPrice);
    return (
        <div className="checkoutsummerymain">
            <h3>We hope it'll be tasty</h3>
            <Burger ingredients={ingredients}/>
            <div style={{display:'flex',justifyContent:'space-evenly'}}>
                <button className="success" onClick={onContinueClickHandler} style={{marginRight:'10px',borderRadius:'25%',width:'90px',height:'35px'}}>Continue</button>
                <button className="danger" onClick={onCancleClickHandler} style={{borderRadius:'25%',width:'90px'}}>Cancel</button>
            </div>
        </div>
    )
}

export default CheckoutSummery
