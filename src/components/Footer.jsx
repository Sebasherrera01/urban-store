import { Globe, Share2, Heart } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-[#222222] px-6 pt-[55px] pb-[38px] text-white">
            <div className="mx-auto max-w-[1400px]">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
                    <div>
                        <h3 className="text-[22px] font-extrabold uppercase">
                            URBAN THREADS
                        </h3>

                        <p className="mt-6 max-w-[290px] text-[19px] leading-[1.45] text-[#e5e7eb]">
                            Redefiniendo el estilo urbano con diseños minimalistas y calidad
                            premium.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[18px] font-extrabold uppercase">ENLACES</h4>

                        <ul className="mt-5 space-y-3 text-[19px] text-[#e5e7eb]">
                            <li>Inicio</li>
                            <li>Productos</li>
                            <li>Contacto</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[18px] font-extrabold uppercase">AYUDA</h4>

                        <ul className="mt-5 space-y-3 text-[19px] text-[#e5e7eb]">
                            <li>Guía de tallas</li>
                            <li>Envíos</li>
                            <li>Devoluciones</li>
                            <li>FAQ</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[18px] font-extrabold uppercase">SÍGUENOS</h4>

                        <div className="mt-6 flex gap-4">
                            <a className="flex h-[42px] w-[42px] items-center justify-center bg-[#1f2937] text-white">
                                <Globe size={18} />
                            </a>

                            <a className="flex h-[42px] w-[42px] items-center justify-center bg-[#1f2937] text-white">
                                <Share2 size={18} />
                            </a>

                            <a className="flex h-[42px] w-[42px] items-center justify-center bg-[#1f2937] text-white">
                                <Heart size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-[42px] border-t border-[#4b5563] pt-[34px] text-center">
                    <p className="text-[18px] text-[#e5e7eb]">
                        © 2024 Urban Threads. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}