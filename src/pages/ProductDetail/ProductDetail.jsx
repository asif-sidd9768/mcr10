import { useContext } from "react"
import { useParams } from "react-router-dom"
import { InventoryContext } from "../../main"

export const ProductDetail = () => {
  const { state } = useContext(InventoryContext)
  const {productId} = useParams()

  const foundProduct = state.inventory.find(({id}) => id === Number(productId))
  return (
    <div className="ms-5 mt-3">
      <h4 className="fw-bold">{foundProduct?.name}</h4>
      <img src={foundProduct?.imageUrl} className="w-50" />
      <p>Price: ${foundProduct?.price}</p>
      <p>stock: {foundProduct?.stock}</p>
      <p>supplier: {foundProduct?.supplier}</p>
      <p>Department: {foundProduct?.department}</p>
      <p>SKU: {foundProduct?.sku}</p>
      <p>Delivered: {foundProduct?.delivered}</p>
      <p>Description: {foundProduct?.description}</p>
    </div>
  )
}