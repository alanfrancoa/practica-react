import { Routes, Route, Navigate } from "react-router-dom"
import NavBar  from "./components/NavBar"
import CarritoPage from "./pages/CarritoPage"
import ComprasPage from "./pages/ComprasPage"

const CarritoApp = () => {
  return (
    <>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
            <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
            <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
    </>
  )
}

export default CarritoApp