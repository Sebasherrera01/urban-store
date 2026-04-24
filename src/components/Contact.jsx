export default function Contact() {
    return (
        <section className="bg-[#f4f4f4] px-6 py-[80px] text-[#111827]">
            <div className="mx-auto max-w-[900px]">
                <div className="text-center">
                    <h2 className="text-[38px] font-extrabold uppercase tracking-[2px]">
                        CONTACTO
                    </h2>

                    <p className="mt-5 text-[20px] font-light text-[#475569]">
                        ¿Tienes alguna pregunta? Nos encantaría escucharte
                    </p>
                </div>

                <div className="mt-[50px] grid grid-cols-1 gap-[28px] lg:grid-cols-2">
                    <div className="bg-white px-[28px] py-[32px] shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                        <h3 className="text-[21px] font-extrabold uppercase">
                            INFORMACIÓN DE CONTACTO
                        </h3>

                        <div className="mt-7 space-y-6 text-[16px] text-[#475569]">
                            <div>
                                <h4 className="text-[14px] font-extrabold uppercase text-[#111827]">
                                    Dirección
                                </h4>
                                <p className="mt-2 leading-7">
                                    Calle Urban Style 123 <br />
                                    28001 Madrid, España
                                </p>
                            </div>

                            <div>
                                <h4 className="text-[14px] font-extrabold uppercase text-[#111827]">
                                    Teléfono
                                </h4>
                                <p className="mt-2">+34 91 123 45 67</p>
                            </div>

                            <div>
                                <h4 className="text-[14px] font-extrabold uppercase text-[#111827]">
                                    Email
                                </h4>
                                <p className="mt-2">info@urbanthreads.com</p>
                            </div>

                            <div>
                                <h4 className="text-[14px] font-extrabold uppercase text-[#111827]">
                                    Horario
                                </h4>
                                <p className="mt-2 leading-7">
                                    Lun - Vie: 9:00 - 18:00 <br />
                                    Sáb: 10:00 - 14:00
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white px-[28px] py-[32px] shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                        <h3 className="text-[21px] font-extrabold uppercase">
                            ENVÍANOS UN MENSAJE
                        </h3>

                        <div className="mt-4 flex items-start gap-3 border-l-4 border-[#f59e0b] bg-[#fef3c7] px-4 py-3 text-[#92400e]">
                            <p className="text-[14px] leading-6">
                                <span className="font-bold">Demo:</span> Este es un formulario de demostración. Los mensajes no se enviarán realmente.
                            </p>
                        </div>

                        <form className="mt-6 space-y-4">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <input
                                    className="w-full bg-[#f1f1f1] px-4 py-3 text-[14px] outline-none"
                                    placeholder="NOMBRE"
                                />

                                <input
                                    className="w-full bg-[#f1f1f1] px-4 py-3 text-[14px] outline-none"
                                    placeholder="APELLIDOS"
                                />
                            </div>

                            <input
                                className="w-full bg-[#f1f1f1] px-4 py-3 text-[14px] outline-none"
                                placeholder="EMAIL"
                            />

                            <select className="w-full bg-[#f1f1f1] px-4 py-3 text-[14px] text-[#475569] outline-none">
                                <option>Selecciona un asunto</option>
                                <option>Consulta general</option>
                                <option>Información de producto</option>
                                <option>Estado de pedido</option>
                                <option>Devoluciones</option>
                                <option>Otro</option>
                            </select>

                            <textarea
                                className="min-h-[140px] w-full bg-[#f1f1f1] px-4 py-3 text-[14px] outline-none"
                                placeholder="MENSAJE"
                            />

                            <button
                                type="button"
                                className="w-full bg-[#000000] py-3 text-[14px] font-extrabold uppercase text-white"
                            >
                                ENVIAR MENSAJE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}