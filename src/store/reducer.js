import * as actionTypes from './actions'; 
import * as imgPrices from './ingPrices';

const initialState = {
    ingredients : {
        salad:0,
        bacon:0,
        cheese:0,
        meat:0,
    },
    totalPrice:20,
    purchasable:false,
}

const reducer = ( state = initialState , action ) =>
{
    
    if(action.type === actionTypes.ADD_INGREDIENT)
    {
        return{
            ...state,
            ingredients:{
                ...state.ingredients,
                [action.ingredientName["type"]]:state.ingredients[action.ingredientName["type"]] + 1,
            }
            ,totalPrice: [action.ingredientName["type"]]=="salad" ? state.totalPrice+imgPrices.saladPrice : 
            [action.ingredientName["type"]]=="bacon" ? state.totalPrice+imgPrices.baconPrice :
            [action.ingredientName["type"]]=="cheese" ? state.totalPrice+imgPrices.cheesePrice :
            [action.ingredientName["type"]]=="meat" ? state.totalPrice+imgPrices.meatPrice : state.totalPrice
            
        }
        // let extractedPropType = action.typ["type"];
        // let tempIngs = {...state.ingredients};
        // console.log(tempIngs , extractedPropType);
        // const oldIngCnt = state.ingredients[extractedPropType];
        // tempIngs[extractedPropType] = oldIngCnt+1;
        // state.ingredients = tempIngs;
        // //calcPrice(tempIngs);
    }
    else if(action.type === actionTypes.REMOVE_INGREDIENT)
    {
        if(state.ingredients[action.ingredientName["type"]] === 0)
            alert("Can't Remove What's not There");
        else
        { 
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName["type"]]:state.ingredients[action.ingredientName["type"]] - 1,
                }
            ,totalPrice:[action.ingredientName["type"]]=="salad" ? state.totalPrice-imgPrices.saladPrice : 
            [action.ingredientName["type"]]=="bacon" ? state.totalPrice-imgPrices.baconPrice :
            [action.ingredientName["type"]]=="cheese" ? state.totalPrice-imgPrices.cheesePrice :
            [action.ingredientName["type"]]=="meat" ? state.totalPrice-imgPrices.meatPrice : state.totalPrice
            }
        }
    }
    else if(action.type === actionTypes.SETPURCHASABLE)
    {
        return{...state,purchasable: (state.totalPrice>20)};
    }


    return state;
}

export default reducer;