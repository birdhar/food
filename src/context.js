
import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import data from  './data.json'


const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [foods, setFoods] = useState([]);


    const fetchFoods = async () => {
        setLoading(true)
        try{
            const response = await fetch(url)
            const data = await response.json()
            // console.log(data);
            const { drinks } = data
            
            if (drinks) {
                
                const newFoods = drinks.map((item)=> {
                    const {strDrink, idDrink, strDrinkThumb} = item;
                    return {id: idDrink, name: strDrink, img: strDrinkThumb};
                    
                })
                setFoods(newFoods);
            } else {
                setFoods([])
            }
            setLoading(false);

        } catch (error){
            console.log(error)
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchFoods();
    },[])


    return (
        <AppContext.Provider value={{loading, foods}}>
            {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }