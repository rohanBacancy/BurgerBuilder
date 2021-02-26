import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Orders.css'

const Orders = () => {

    const [dataReceived,setDataReceived] = useState([]);
    let tempArr = [];
    useEffect( () => {
        console.log("here");
        axios.get("https://react-burger-project-rhn-default-rtdb.firebaseio.com/orders.json")
        .then(  
                    res => {
                    for(let key in res.data)
                    {
                        tempArr.push({data:res.data[key],key:key});
                    }
                    setDataReceived(tempArr);
                    console.log(dataReceived)
                    }
            )
        .catch(err => console.log(err))
    },[])

    return (
        <div className="OrdersRoot">
                {dataReceived.map( (ele) => 
            <div className="Indorder" key={ele.key}>
                <div className="ordName">
                    {ele.data.userinfo.name}
                </div>
                <div className="ordIng">
                    Ingredients = Salad : {ele.data.ingredients.salad} Cheese : {ele.data.ingredients.cheese} Becon : {ele.data.ingredients.bacon} Meat : {ele.data.ingredients.meat}
                </div>
                <div className="ordPrice">
                    Price = INR {ele.data.price}
                </div> 
             
            </div> )}
        </div>
    )
}

export default Orders
