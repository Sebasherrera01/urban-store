export default function Contact() {
    return (
        <section className="bg-[#151515] py-[90px] px-6 text-white">
            <div className="mx-auto max-w-[1200px]">

                {/* HEADER */}
                <div className="text-center">
                    <h2 className="text-[36px] font-extrabold uppercase tracking-[2px]">
                        CONTACTO
                    </h2>

                    <p className="mt-4 text-[20px] font-light text-[#cbd5e1]">
                        ¿Tienes alguna pregunta? Nos encantaría escucharte
                    </p>
                </div>

                {/* GRID */}
                <div className="mt-[60px] grid grid-cols-1 gap-[40px] lg:grid-cols-2">

                    {/* INFO */}
                    <div className="bg-[#1f1f1f] px-[28px] py-[30px]">
                        <h3 className="text-[20px] font-extrabold uppercase">
                            INFORMACIÓN DE CONTACTO
                        </h3>

                        <div className="mt-6 space-y-6 text-[16px] text-[#cbd5e1]">
                            <div>
                                <p className="font-semibold text-white">Dirección</p>
                                <p className="mt-1">
                                    Calle Urban Style 123 <br />
                                    28001 Madrid, España
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold text-white">Teléfono</p>
                                <p className="mt-1">+34 91 123 45 67</p>
                            </div>

                            <div>
                                <p className="font-semibold text-white">Email</p>
                                <p className="mt-1">info@urbanthreads.com</p>
                            </div>

                            <div>
                                <p className="font-semibold text-white">Horario</p>
                                <p className="mt-1">
                                    Lun - Vie: 9:00 - 18:00 <br />
                                    Sáb: 10:00 - 14:00
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* FORM */}
                    <div className="bg-[#1f1f1f] px-[28px] py-[30px]">
                        <h3 className="text-[20px] font-extrabold uppercase">
                            ENVÍANOS UN MENSAJE
                        </h3>

                        <p className="mt-3 text-[14px] text-[#94a3b8]">
                            Demo: Este formulario no envía datos reales.
                        </p>

                        <div className="mt-6 space-y-4">

                            {/* NOMBRE / APELLIDO */}
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <input
                                    className="w-full bg-[#111111] px-4 py-3 text-[14px] outline-none"
                                    placeholder="NOMBRE"
                                />
                                <input
                                    className="w-full bg-[#111111] px-4 py-3 text-[14px] outline-none"
                                    placeholder="APELLIDOS"
                                />
                            </div>

                            {/* EMAIL */}
                            <input
                                className="w-full bg-[#111111] px-4 py-3 text-[14px] outline-none"
                                placeholder="EMAIL"
                            />

                            {/* SELECT */}
                            <select className="w-full bg-[#111111] px-4 py-3 text-[14px] outline-none">
                                <option>Selecciona un asunto</option>
                                <option>Consulta general</option>
                                <option>Información de producto</option>
                                <option>Estado de pedido</option>
                                <option>Devoluciones</option>
                            </select>

                            {/* MENSAJE */}
                            <textarea
                                className="w-full bg-[#111111] px-4 py-3 text-[14px] outline-none"
                                rows="4"
                                placeholder="MENSAJE"
                            />

                            {/* BOTÓN */}
                            <button className="mt-2 w-full bg-[#f5a000] py-3 text-[14px] font-bold uppercase text-black">
                                ENVIAR MENSAJE
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}