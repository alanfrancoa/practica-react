import { Routes, Route, Navigate } from "react-router-dom"
import  { NavBar } from "./components/NavBar"
import{ ProductosProvider }   from "./context/ProductosProvider"
import { CarritoPage } from "./pages/CarritoPage"
import { ComprasPage } from "./pages/ComprasPage"

export const CarritoApp = () => {
  return (
    <ProductosProvider>
      <NavBar></NavBar>
      <div className="container">
        <Routes>
          <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
          <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
          <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
      </div>
    </ ProductosProvider>
  )
}
