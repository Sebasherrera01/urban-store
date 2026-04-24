export default function Features() {
    const items = [
    {
        icon: "✦",
        title: "DISEÑO ÚNICO",
        text: "Piezas exclusivas con estética urbana y minimalista",
    },
    {
        icon: "✔",
        title: "CALIDAD PREMIUM",
        text: "Materiales de alta calidad para máxima durabilidad",
    },
    {
        icon: "⚡",
        title: "ENVÍO RÁPIDO",
        text: "Entrega express en 24-48 horas",
    },
    ]

    return (
    <section className="bg-[#f4f4f4] py-[80px] px-6 text-center text-[#0f172a]">
        <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-[60px] md:grid-cols-3">
            {items.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
                
              {/* ICONO */}
                <div className="flex h-[80px] w-[80px] items-center justify-center bg-[#0f172a] text-[30px] text-white">
                {item.icon}
                </div>

              {/* TITULO */}
                <h3 className="mt-6 text-[20px] font-bold uppercase">
                {item.title}
                </h3>

              {/* TEXTO */}
                <p className="mt-3 max-w-[280px] text-[16px] font-light text-[#475569]">
                {item.text}
                </p>

            </div>
            ))}
        </div>
        </div>
    </section>
    )
}
