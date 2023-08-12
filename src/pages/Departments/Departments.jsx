import { useContext } from "react"
import { InventoryContext } from "../../main"

export const Departments = () => {
  const {state} = useContext(InventoryContext)
  const departments = state.inventory.reduce((acc, curr) => {
    acc = acc.includes(curr.department) ? acc : [...acc, curr.department]
    return acc
  }, [])
  return (
    <div className="row mt-3 ms-3">
      {
        departments.map((department, index) => 
          <div key={index} className="col-md-3 bg-secondary-subtle text-center p-2 rounded-2 m-1">
            <p className="fs-6 mb-0 py-4 fw-bold">{department}</p>
          </div>
        )
      }
      
    </div>
  )
}