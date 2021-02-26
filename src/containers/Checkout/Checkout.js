import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom';
import CheckoutSummery from '../../components/CheckoutSummary/CheckoutSummery'
import ContectData from '../ContectData/ContectData';
import {connect} from 'react-redux';

const Checkout = (props) => {
    
    return (
        <>
          <CheckoutSummery ingredients={props.ings} totalPrice={props.tprice} history={props.history}/> 
          <Route path={props.match.path + "/contact-data"} component={ContectData}/> 
        </>
    )
}

const mapStateToProps = (state) =>
{
    return{
        ings : state.ingredients,
        tprice : state.totalPrice,
    }
}


export default connect(mapStateToProps)(Checkout);
