import Navbar from "./components/Navbar"
import { Navigate, Route, Routes } from "react-router-dom"
import HomeScreen from "./routes/HomeScreen"
import LoginScreen from './routes/LoginScreen'
import AboutScreen from "./routes/AboutScreen"
import ContactScreen from "./routes/ContactScreen"
import UserProvider from "./context/UserProvider"
const App = () => {
  return (
    <UserProvider>  
        <Navbar />
        <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/login" element={<LoginScreen />}></Route>
            <Route path="/about" element={<AboutScreen />} ></Route>
            <Route path="/contact" element={<ContactScreen />}></Route>
            <Route path="/*" element={ <Navigate to='/' />}></Route>
        </Routes>
    </ UserProvider>
  )
}

export default App