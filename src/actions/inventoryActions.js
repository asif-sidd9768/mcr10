export const departmentFilterAction = (type) => ({
  type:"SET_DEPARTMENT_FILTER",
  payload: type
})

export const productSortAction = (type) => ({
  type:"SET_PRODUCT_SORT",
  payload: type
})

export const toggleLowStockAction = (value) => ({
  type:"TOGGLE_LOW_STOCK",
  payload: value
})

export const addProductAction = (productData) => ({
  type:"ADD_PRODUCT",
  payload: productData
})