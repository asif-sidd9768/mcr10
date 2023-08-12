

import { useContext } from 'react'
import { Routes, Route, NavLink } from "react-router-dom"

import { InventoryContext } from './main'

import './App.css'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { Departments } from './pages/Departments/Departments'
import { ProductList } from './pages/ProductList/ProductList'
import { ProductDetail } from './pages/ProductDetail/ProductDetail'
import { SideBar } from './components/SideBar'
import { ProductAdd } from './pages/ProductAdd/ProductAdd'

function App() {
  return (
    <div className='row w-100 h-100'>
      <div className='col-md-3 bg-dark pt-3 ps-5'>
        <SideBar />
      </div>
      <div className='col-md-9'>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/products/add" element={<ProductAdd />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
