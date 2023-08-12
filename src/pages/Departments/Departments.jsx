import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { InventoryContext } from "../../main"
import { departmentFilterAction } from "../../actions/inventoryActions"

export const Departments = () => {
  const {state, dispatch} = useContext(InventoryContext)
  const navigate = useNavigate()

  const departments = state.inventory.reduce((acc, curr) => {
    acc = acc.includes(curr.department) ? acc : [...acc, curr.department]
    return acc
  }, [])

  const handleDepartmentClick = (department) => {
    dispatch(departmentFilterAction(department))
    navigate("/products")
  }

  return (
    <div className="row mt-3 ms-3">
      {
        departments.map((department, index) => 
          <div key={index} onClick={() => handleDepartmentClick(department)} className="col-md-3 bg-secondary-subtle text-center p-2 rounded-2 m-1">
            <p className="fs-6 mb-0 py-4 fw-bold">{department}</p>
          </div>
        )
      }
      
    </div>
  )
}