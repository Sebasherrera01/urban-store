import { NavLink } from "react-router-dom"

export default function Navbar() {
    const linkBase =
    "text-[16px] font-semibold transition"
    const linkActive = "text-white"
    const linkInactive = "text-[#cbd5e1] hover:text-white"

    return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1a1a1a]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-20 py-4">
        
        {/* LOGO */}
        <h1 className="text-[22px] font-bold tracking-wide text-white">
            URBAN THREADS
        </h1>

        {/* NAV */}
        <nav className="flex gap-10">
            <NavLink
            to="/"
            className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
        >
            Inicio
            </NavLink>

            <NavLink
            to="/productos"
            className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
            >
            Productos
            </NavLink>

            <NavLink
            to="/contacto"
            className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
            >
            Contacto
            </NavLink>
        </nav>
        </div>
    </header>
)
}