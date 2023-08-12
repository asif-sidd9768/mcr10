import { inventoryData } from "../data/db";

export const initialState = {
  inventory: JSON.parse(localStorage.getItem("inventory")) || inventoryData,
  filters: JSON.parse(localStorage.getItem("filters")) || {
    lowStock: false,
    department: "All",
    sort: "name"
  }
}

export const inventoryReducer = (state, action) => {
  switch(action.type){
    case "SET_DEPARTMENT_FILTER":
      return {...state, filters: {...state.filters, department: action.payload} }
    case "SET_PRODUCT_SORT":
      return {...state, filters: {...state.filters, sort: action.payload}}
    case "TOGGLE_LOW_STOCK":
      return {...state, filters: {...state.filters, lowStock: action.payload}}
    case "ADD_PRODUCT":
      return {...state, inventory: [...state.inventory, action.payload]}
    default: 
      return state
  }
}