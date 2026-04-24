import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Inicio from "./pages/Inicio"
import Productos from "./pages/Productos"
import Contacto from "./pages/Contacto"

export default function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-[#111111] text-white">
                <Navbar />

                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/productos" element={<Productos />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    )
}