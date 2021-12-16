import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


const reducers=combineReducers({})


const initialState={};
const middleware=[thunk];


const store=createStore(reducers,initialState,applyMiddleware(...middleware));

export default store


//redux is a state management tool
//inorder to avoid props drilling we use redux
//redux 3 basic blocks- Store, action, reducers
//component lifecycle methods - componentidmount, componentidupdate, componentwillunmount
