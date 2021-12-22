import {
    RESTAURANT_LIST_REQUEST,
    RESTAURANT_LIST_SUCCESS,
    RESTAURANT_LIST_FAIL,
  } from "../constants/restaurantConstants";
  
  export const restaurantListReaducer=( states={restaurants:[]}, action)=>{
    switch(action.type){
      case RESTAURANT_LIST_REQUEST:
        return {restaurants:[]}

      case RESTAURANT_LIST_SUCCESS:
        return {restaurants:action.payload}

      case RESTAURANT_LIST_FAIL:
        return {restaurants:action.payload}
        
      default:
        return states
    }
  }