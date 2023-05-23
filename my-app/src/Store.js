import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {  
    data:null
}

function reducer(state,action){
    switch(action.type){
        case 'DATA_SEND':
            return {...state, data:action.payload}
        default:
            return state
    }
}

export function StoreProvider(props) {
    const [state,dispatch] = useReducer(reducer, initialState);
    const value = {state,dispatch}
    return <Store.Provider value={value}>{ props.children }</Store.Provider>
} 