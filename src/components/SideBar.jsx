import { NavLink } from "react-router-dom"

export const SideBar = () => {
  const getStyles = ({isActive}) => ({
    color: isActive ? "white" : '#676767'
  })
  return (
    <>
      <NavLink style={getStyles} to="/" className=" text-decoration-none d-block mb-4 mt-3">Dashboard</NavLink>
      <NavLink style={getStyles} to="/departments" className=" text-decoration-none d-block mb-4">Departments</NavLink>
      <NavLink style={getStyles} to="/products" className=" text-decoration-none d-block mb-4">Products</NavLink>
    </>
  )
}