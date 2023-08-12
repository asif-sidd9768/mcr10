import { useContext } from "react"
import { NavLink } from "react-router-dom"

import { InventoryContext } from "../main"
import { departmentFilterAction, productSortAction, toggleLowStockAction } from "../actions/inventoryActions"

export const ProductFilters = () => {
  const { state, dispatch } = useContext(InventoryContext)

  const departments = state?.inventory?.reduce((acc, curr) => {
    acc = acc.includes(curr.department) ? acc : [...acc, curr.department]
    return acc
  }, [])

  const setDepartmentFilter = (event) => {
    dispatch(departmentFilterAction(event.target.value))
  }

  const setProductSort = (event) => {
    dispatch(productSortAction(event.target.value))
  }

  const lowStockToggle = (event) => {
    dispatch(toggleLowStockAction(event.target.checked))
  }

  return (
    <>
      <p className="fw-bold fs-5">Products</p>
        <select onChange={setDepartmentFilter} defaultValue={state.filters.department}>
          {
            ['All',...departments].map((department, index) =>
              <option key={index} value={department}>{department}</option>
            )
          }
        </select>
        <div>
          <input checked={state.filters.lowStock} type="checkbox" onChange={lowStockToggle} />Low Stock Items
        </div>
        <select onChange={setProductSort} defaultValue={state.filters.sort}>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>
        <NavLink to="/products/add" className="btn btn-primary">New</NavLink>
    </>
  )
}