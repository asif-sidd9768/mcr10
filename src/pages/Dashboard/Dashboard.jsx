import { useContext } from "react"
import { InventoryContext } from "../../main"

export const Dashboard = () => {
  const {state} = useContext(InventoryContext)
  console.log(state)
  const data = state.inventory.reduce((acc, curr) => {
    acc['stockQuantity'] = acc['stockQuantity'] + curr.stock
    acc['delivered'] = acc['delivered'] + curr.delivered
    acc['lowStock'] = curr.stock <= 10 ? acc['lowStock']+=1 : acc['lowStock']
    return acc
  }, {stockQuantity: 0, delivered: 0, lowStock: 0})
  return (
    <div className="row mt-3 ms-3">
      <div className="col-md-3 bg-secondary-subtle text-center p-2 rounded-2 m-1">
        <p className="fs-4 mb-0 text-success fw-bold">{data.stockQuantity}</p>
        <p>Total Quantity</p>
      </div>
      <div className="col-md-3 bg-secondary-subtle text-center p-2 rounded-2 m-1">
        <p className="fs-4 mb-0 text-warning fw-bold">{data.delivered}</p>
        <p>Total Quantity</p>
      </div>
      <div className="col-md-3 bg-secondary-subtle text-center p-2 rounded-2 m-1">
        <p className="fs-4 mb-0 text-danger fw-bold">{data.lowStock}</p>
        <p>Total Quantity</p>
      </div>
    </div>
  )
}