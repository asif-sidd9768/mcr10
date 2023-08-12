import { ProductFilters } from "../../components/ProductFilters"
import { ProductListTable } from "../../components/ProductListTable"

export const ProductList = () => {

  return (
    <div className="m-3">
      <div className="d-flex justify-content-between">
        <ProductFilters />
      </div>
      <div className="mt-3">
        <ProductListTable />
      </div>
    </div>
  )
}