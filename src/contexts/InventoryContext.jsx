import { createContext, useEffect, useReducer } from "react";
import { initialState, inventoryReducer } from "../reducers/inventoryReducer";

export const InventoryContext = createContext()
export const InventoryProvider = ({children}) => {
  const [state, dispatch] = useReducer(inventoryReducer, initialState)

  useEffect(() => {
    const inventoryItems = localStorage.getItem("inventory")
    if(inventoryItems){
      // console.log(localStorage.getItem("inventory"))
    }else{
      localStorage.setItem("inventory", JSON.stringify(state.inventory))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(state.inventory))
  }, [state.inventory])

  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(state.filters))
  }, [state.filters])

  return (
    <InventoryContext.Provider value={{state, dispatch}}>
      {children}
    </InventoryContext.Provider>
  )
}