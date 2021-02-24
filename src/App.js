import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import {Switch,Route, NavLink} from 'react-router-dom';
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./components/Orders/Orders";

function App() {
  return (
    <div>
        <Layout>
          <nav style={{borderBottom:'1px solid red'}}>
            <ul style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',listStyle:'none'}}>
              <NavLink activeStyle={{color:'green'}} style={{color:'grey',fontWeight:'bolder',textDecoration:'none'}} exact to="/"><li>Burger Builder</li></NavLink>
              <NavLink activeStyle={{color:'green'}} style={{color:'grey',fontWeight:'bolder',textDecoration:'none'}} to="/myorders"><li>MyOrders</li></NavLink>
            </ul>
          </nav>
        </Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/myorders" component={Orders} />
          <Route path="/" component={BurgerBuilder} />  
        </Switch>
        {/* https://react-burger-project-rhn-default-rtdb.firebaseio.com/   */}
    </div>
  );
}

export default App;
