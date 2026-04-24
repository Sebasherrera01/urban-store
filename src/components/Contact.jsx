import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
    const [form, setForm] = useState({
        nombre: "",
        apellidos: "",
        email: "",
        asunto: "",
        mensaje: "",
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const contactos = JSON.parse(localStorage.getItem("contactos")) || []
        contactos.push(form)

        localStorage.setItem("contactos", JSON.stringify(contactos))

        alert("Mensaje guardado correctamente")

        setForm({
            nombre: "",
            apellidos: "",
            email: "",
            asunto: "",
            mensaje: "",
        })
    }

    return (
        <section className="bg-[#f4f4f4] px-6 py-[70px] text-[#0f172a]">
            <div className="mx-auto max-w-[1000px]">
                <div className="text-center">
                    <h2 className="text-[38px] font-extrabold uppercase tracking-[2px]">
                        CONTACTO
                    </h2>

                    <p className="mt-5 text-[20px] font-light text-[#475569]">
                        ¿Tienes alguna pregunta? Nos encantaría escucharte
                    </p>
                </div>

                <div className="mt-[60px] grid grid-cols-1 gap-[70px] lg:grid-cols-[1fr_420px]">
                    <div>
                        <h3 className="text-[28px] font-extrabold uppercase">
                            INFORMACIÓN DE CONTACTO
                        </h3>

                        <div className="mt-10 space-y-9">
                            <ContactItem icon={<MapPin size={22} />} title="DIRECCIÓN">
                                Calle Urban Style 123 <br />
                                28001 Madrid, España
                            </ContactItem>

                            <ContactItem icon={<Phone size={22} />} title="TELÉFONO">
                                +34 91 123 45 67
                            </ContactItem>

                            <ContactItem icon={<Mail size={22} />} title="EMAIL">
                                info@urbanthreads.com
                            </ContactItem>

                            <ContactItem icon={<Clock size={22} />} title="HORARIO">
                                Lun - Vie: 9:00 - 18:00 <br />
                                Sáb: 10:00 - 14:00
                            </ContactItem>
                        </div>
                    </div>

                    <div className="bg-white px-[34px] py-[36px] shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                        <h3 className="text-[26px] font-extrabold uppercase">
                            ENVÍANOS UN MENSAJE
                        </h3>

                        <div className="mt-7 border-l-4 border-[#f5a000] bg-[#fff3c4] px-4 py-4 text-[#b45309]">
                            <p className="text-[14px] leading-6">
                                <span className="font-bold">Demo:</span> Este es un formulario
                                de demostración. Los mensajes no se enviarán realmente.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-[13px] font-bold uppercase text-[#475569]">
                                        Nombre
                                    </label>
                                    <input
                                        name="nombre"
                                        value={form.nombre}
                                        onChange={handleChange}
                                        className="h-[52px] w-full border border-[#cbd5e1] bg-white px-4 outline-none focus:border-[#111827]"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-[13px] font-bold uppercase text-[#475569]">
                                        Apellidos
                                    </label>
                                    <input
                                        name="apellidos"
                                        value={form.apellidos}
                                        onChange={handleChange}
                                        className="h-[52px] w-full border border-[#cbd5e1] bg-white px-4 outline-none focus:border-[#111827]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-[13px] font-bold uppercase text-[#475569]">
                                    Email
                                </label>
                                <input
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="h-[52px] w-full border border-[#cbd5e1] bg-white px-4 outline-none focus:border-[#111827]"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-[13px] font-bold uppercase text-[#475569]">
                                    Asunto
                                </label>
                                <select
                                    name="asunto"
                                    value={form.asunto}
                                    onChange={handleChange}
                                    className="h-[52px] w-full border border-[#cbd5e1] bg-white px-4 outline-none focus:border-[#111827]"
                                >
                                    <option value="">Selecciona un asunto</option>
                                    <option>Consulta general</option>
                                    <option>Información de producto</option>
                                    <option>Estado de pedido</option>
                                    <option>Devoluciones</option>
                                    <option>Otro</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-2 block text-[13px] font-bold uppercase text-[#475569]">
                                    Mensaje
                                </label>
                                <textarea
                                    name="mensaje"
                                    value={form.mensaje}
                                    onChange={handleChange}
                                    className="min-h-[145px] w-full border border-[#cbd5e1] bg-white px-4 py-3 outline-none focus:border-[#111827]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#000000] py-4 text-[14px] font-extrabold uppercase text-white"
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

function ContactItem({ icon, title, children }) {
    return (
        <div className="flex gap-5">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center bg-[#0f172a] text-[24px] text-white">
                {icon}
            </div>

            <div>
                <h4 className="text-[20px] font-extrabold uppercase">{title}</h4>
                <p className="mt-1 text-[17px] leading-7 text-[#475569]">
                    {children}
                </p>
            </div>
        </div>
    )
}