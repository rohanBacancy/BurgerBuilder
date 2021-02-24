import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom';
import CheckoutSummery from '../../components/CheckoutSummary/CheckoutSummery'
import ContectData from '../ContectData/ContectData';

const Checkout = ({location,history,match}) => {
    
    const [ingredients,setIngredients] = useState({});
    const [totalPrice,setTotalPrice] = useState(0);
    useEffect(()=>
    {
        let tmpIngredients={};
        const qry = new URLSearchParams(location.search);
        for(let param of qry.entries())
        {
            if(param[0]==="totalPrice")
            {
                setTotalPrice(param[1]);
            }
            else{
            tmpIngredients[param[0]] = +param[1];
            setIngredients(tmpIngredients);
            }
        }
    },[ ])
    
    return (
        <>
          <CheckoutSummery ingredients={ingredients} totalPrice={totalPrice} history={history}/> 
          <Route path={match.path + "/contact-data"} render={() => <ContectData ingredients={ingredients} totalPrice={totalPrice} history={history} />}/> 
        </>
    )
}

export default Checkout
