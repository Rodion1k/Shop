import {actionTypes} from "./actionTypes";

const updateCart = (value) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: value,
    }
}
export {updateCart};