
import React, { useState, useContext, useEffect, useReducer } from 'react'
import { useCallback } from 'react'
import data from  './data.json'
import cartItems from './cart-items'
import { reducer } from './reducer'


const initialState = {
    foods : cartItems,
    totalItems: 0,
    totalAmount: 0

}


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [foods, setFoods] = useState([]);
  const [totalItems, setTotalItems] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const [state, dispatch] = useReducer(reducer, initialState)

    const increase = (id) => {
        return dispatch({type: 'inc', payload: id});
    }

    const decrease = (id) => {
        return dispatch({type: 'dec', payload: id});
    }

    const getTotal = (id) => {
        return dispatch({type: 'getTotal', payload: id});
    }

    useEffect(()=>{
        dispatch({type: 'getTotal'})
        
    },[state.foods])


    return (
        <AppContext.Provider value={{loading, ...state, increase, decrease, getTotal}}>
            {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }