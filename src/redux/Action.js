import { ADD_TO_CART } from "./constant"

 export const addToCart = (data) => {
    console.log("action btn work" + data)
    return {
        type: ADD_TO_CART,
          data
 
    }
 }