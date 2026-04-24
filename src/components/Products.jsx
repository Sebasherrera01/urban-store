export default function Products() {
    const products = [
    { name: "Camiseta Básica Urban", desc: "Algodón 100% orgánico", price: "€29" },
    { name: "Jeans Slim Fit", desc: "Denim premium stretch", price: "€89" },
    { name: "Sudadera Oversize", desc: "Algodón French Terry", price: "€65" },
    { name: "Chaqueta Bomber", desc: "Nylon resistente al agua", price: "€120" },
    { name: "Gorra Snapback", desc: "Bordado premium", price: "€35" },
    { name: "Zapatillas Urban", desc: "Suela de goma antideslizante", price: "€95" },
    ]

    return (
    <section className="bg-[#f4f4f4] py-[70px] px-6 text-[#0f172a]">
        <div className="mx-auto max-w-[1200px]">

        {/* HEADER */}
        <div className="text-center">
            <h2 className="text-[38px] font-extrabold uppercase tracking-[2px]">
            NUESTRA COLECCIÓN
            </h2>

            <p className="mt-5 text-[20px] font-light text-[#475569]">
            Estilo urbano para cada ocasión
            </p>
        </div>

        {/* GRID */}
        <div className="mt-[40px] grid grid-cols-1 gap-[32px] sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
            <article
                key={product.name}
                className="bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            >
              {/* IMAGEN */}
                <div className="flex h-[320px] items-center justify-center bg-[#e5e7eb]">
                <div className="h-[60px] w-[60px] rounded-md bg-gradient-to-b from-[#e9d5ff] to-[#a78bfa]" />
                </div>

              {/* CONTENIDO */}
                <div className="px-[28px] pt-[30px] pb-[28px]">
                <h3 className="text-[20px] font-extrabold leading-tight">
                    {product.name}
                </h3>

                <p className="mt-3 text-[16px] font-light text-[#475569]">
                    {product.desc}
                </p>

                <div className="mt-6 flex items-center justify-between">
                    <span className="text-[26px] font-extrabold">
                    {product.price}
                    </span>

                    <button className="bg-[#0f172a] px-6 py-2 text-[14px] font-semibold uppercase text-white">
                    AÑADIR
                    </button>
                </div>
                </div>
            </article>
            ))}
        </div>

        </div>
    </section>
    )
}