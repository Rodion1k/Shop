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
        case actionTypes.LOAD_PRODUCTS:
            return {
                ...state,
                products: state // TODO add state products
            }
        default:
            return state;
    }
}
export default reducer;