import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { InventoryContext } from "../main"
import { getFilteredAndSortedProducts } from "../utils/getFilteredAndSortedProducts"

export const ProductListTable = () => {
  const { state } = useContext(InventoryContext)
  const filteredProducts = getFilteredAndSortedProducts(state)
  
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col" colSpan="10">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Supplier</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(item => (
            <tr key={item.id}>
              <td>
                <img src={item.imageUrl} alt={item.name} width="50" />
              </td>
              <td>
                <NavLink to={`/products/${item.id}`}>
                  {item.name}
                </NavLink>
              </td>
              <td colSpan="10">{item.description}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.stock}</td>
              <td>{item.supplier}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}