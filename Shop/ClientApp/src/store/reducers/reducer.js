import {actionTypes} from "../Actions/actionTypes";

const initialState = {
    cartProducts: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                products: state.cartProducts = action.payload,
            }
        default:
            return state;
    }
}
export default reducer;