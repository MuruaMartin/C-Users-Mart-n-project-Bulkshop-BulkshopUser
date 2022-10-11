import {createContext, useState, useEffect, useContext} from "react";
import { DataStore } from "aws-amplify";
import { Basket, BasketDish } from "../models";
import { useAuthContext } from "./AuthContext";


const BasketContext = createContext ({});

const BasketContextProvider = ({ children }) => {
    const {sub} = useAuthContext();
    
    const [restaurant, setRestaurant] = useState(null);
    const [basket, setBasket] = useState(null);

    const addDishToBasket = (dish, quantity) => {
        // get the existing basket or create a new one

        //create a BasketDish Item and save to datastore

    }

    return (
        <BasketContext.Provider value= {{ addDishToBasket, setRestaurant}}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketContextProvider;

export const useBasketContext = () => useContext(BasketContext);