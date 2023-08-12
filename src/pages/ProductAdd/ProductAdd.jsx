import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { InventoryContext } from "../../main"
import { addProductAction } from "../../actions/inventoryActions"

export const ProductAdd = () => {
  const { state, dispatch } = useContext(InventoryContext)
  const navigate = useNavigate()

  const handleProductAdd = (event) => {
    event.preventDefault()
    const product = {
      id: state.inventory[state.inventory.length - 1].id + 1,
      department: event.target[0].value,
      name: event.target[1].value,
      description: event.target[2].value,
      price: Number(event.target[3].value),
      stock: Number(event.target[4].value),
      sku: event.target[5].value,
      supplier:event.target[6].value,
      delivered:Number(event.target[7].value),
      imageUrl:event.target[8].value
    }
    dispatch(addProductAction(product))
    navigate('/products', {replace: true})
  }

  return (
    <form className="ms-4 mt-3 w-75 mb-3" onSubmit={handleProductAdd}>
      <p className="fs-4 fw-bold">Add New Product</p>
      <div className="col-md-4 w-100 mb-3">
        <label for="inputState" className="form-label">Department:</label>
        <select id="inputState" className="form-select" required>
          <option selected disabled value="">Select Department</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
        </select>
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label">Name:</label>
        <input type="text" className="form-control" id="formGroupExampleInput" required/>
      </div>
      <div className="mb-3">
        <label for="floatingTextarea">Description:</label>
        <textarea className="form-control" id="floatingTextarea" required></textarea>
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label">Price:</label>
        <input type="number" step="any" className="form-control" id="formGroupExampleInput" placeholder="0" required/>
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label">Stock:</label>
        <input type="number" className="form-control" id="formGroupExampleInput" placeholder="0" required/>
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label">SKU:</label>
        <input type="text" className="form-control" id="formGroupExampleInput" required/>
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label">Supplier:</label>
        <input type="text" className="form-control" id="formGroupExampleInput" required/>
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label">Delivered:</label>
        <input type="number" className="form-control" id="formGroupExampleInput" placeholder="0" required/>
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label">Image URL:</label>
        <input type="text" className="form-control" id="formGroupExampleInput" required/>
      </div>
      <button type="submit" className="btn btn-primary">Add Product</button>
    </form>
  )
}