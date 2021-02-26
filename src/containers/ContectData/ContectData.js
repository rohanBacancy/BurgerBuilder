import React, { useEffect, useState } from 'react';
import './ContectData.css';
import axios from 'axios';

const ContectData = ( {ingredients,totalPrice,history} ) => {

    const [udata,setUdata] = useState(
        {
            name:'',
            email:'',
            street:'',
            postalCode:'',
            delivery:'cheap'
        }
    );
    // const [validity,setVality] = useState({nameCls:'invld',emailCls:'invld',streetCls:'invld',postalCls:'invld'})
    const [loading,setLoading] = useState(false);
    const [orderErr,setOrderErr] = useState("");
    const [orderComplete,setOrderComplete] = useState(false);
    let frmIs;
    
    // const validityChecker = () => 
    // {
    //     if(udata.name.length>=5)
    //     {
    //         setVality({...validity,nameCls:''});
    //     }
    //     else{console.log("name else");
    //         setVality({...validity,nameCls:'invld'});}
    //     if(udata.email.length>=1)
    //     {
    //         setVality({...validity,emailCls:''});
    //     }
    //     else{console.log("email else");setVality({...validity,emailCls:'invld'});}
    //     if(udata.postalCode.length === 5)
    //     {
    //         console.log(udata.postalCode.length)
    //        setVality({...validity,postalCls:''});
    //     }
    //     else{console.log("posytal else");setVality({...validity,postalCls:'invld'});}
    //     if(udata.street.length>1)
    //     {
    //         setVality({...validity,streetCls:''});
    //     }
    //     else{console.log("street else");setVality({...validity,streetCls:'invld'});}
    // }
    const handleSubmit = (e) => 
    {
        e.preventDefault();
        console.log(udata);

         setLoading(true);
         const orderObj = {
             userinfo:udata,
             ingredients:ingredients,
             price:totalPrice,
             deliveryMethod:udata.delivery
         };
         console.log(orderObj);
         axios.post(" https://react-burger-project-rhn-default-rtdb.firebaseio.com/orders.json",orderObj)
         .then(response => { console.log(response); setLoading(false);setOrderComplete(true);} )
         .catch(err => {console.log(err.message);setLoading(false); setOrderErr(err.message);  });
        
        }

        if(loading)
        {
        frmIs = (<div className="frmContain">
                <div className="loader">Loading...</div>
                </div>)
        }
        else if(orderErr.length>0){
            frmIs = (<div className="frmContain">
                <div>{orderErr}</div>
                </div>)
                console.log(history);
                setTimeout(() => {history.push("/")},3000)
        }
        else if(orderComplete)
        {
            frmIs = (<div className="frmContain">
                <h3>Order Completed</h3>
                </div>)
            setTimeout(() => {history.push("/")},3000)
        }
        else
        {
        frmIs = (<div className="frmContain">
            <h4 className="frmheading">Enter Your Data</h4>
            <form className="mainfrm" onSubmit={handleSubmit}>
                <input type="text" name="name" value={udata.name} onChange={(e) => {setUdata({...udata,name:e.target.value}); }} placeholder="Your Name"/>
                <input type="email" name="email" value={udata.email} onChange={(e) => {setUdata({...udata,email:e.target.value}); }}  placeholder="Your Email"/>
                <input  type="text" name="street" value={udata.street || ""} onChange={(e) => {setUdata({...udata,street:e.target.value}); }}  placeholder="Street"/>
                <input  type="text" name="postal" value={udata.postalCode  || ""} onChange={(e) => {setUdata({...udata,postalCode:e.target.value}); }}  placeholder="Postal Code"/>
                <select name="delivery" value={udata.delivery} onChange={(e) => {setUdata({...udata,delivery:e.target.value})}}>
                    <option value="fast">Fast</option>
                    <option value="cheap">Cheap</option>
                </select>
                <button className="frmsubmit" type="submit">ORDER</button>
            </form>
        </div>)
        }

    return (
        frmIs
    )
}

export default ContectData
