import {actionTypes} from "./actionTypes";

const addCart = (value) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: value,
    }
}
const loadProducts = () => {
    return {
        type: actionTypes.LOAD_PRODUCTS,
    }
}
export {addCart,loadProducts};