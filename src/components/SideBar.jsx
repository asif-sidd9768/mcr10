import { NavLink } from "react-router-dom"

export const SideBar = () => {
  return (
    <>
      <NavLink to="/" className="text-white text-decoration-none d-block mb-4 mt-3">Dashboard</NavLink>
      <NavLink to="/departments" className="text-white text-decoration-none d-block mb-4">Departments</NavLink>
      <NavLink to="/products" className="text-white text-decoration-none d-block mb-4">Products</NavLink>
    </>
  )
}