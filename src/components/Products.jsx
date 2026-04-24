export default function Products() {
    const products = [
        {
            name: "Camiseta Básica Urban",
            desc: "Algodón 100% orgánico",
            price: "€29",
            icon: "👕",
        },
        {
            name: "Jeans Slim Fit",
            desc: "Denim premium stretch",
            price: "€89",
            icon: "👖",
        },
        {
            name: "Sudadera Oversize",
            desc: "Algodón French Terry",
            price: "€65",
            icon: "🧥",
        },
        {
            name: "Chaqueta Bomber",
            desc: "Nylon resistente al agua",
            price: "€120",
            icon: "🧥",
        },
        {
            name: "Gorra Snapback",
            desc: "Bordado premium",
            price: "€35",
            icon: "🧢",
        },
        {
            name: "Zapatillas Urban",
            desc: "Suela de goma antideslizante",
            price: "€95",
            icon: "👟",
        },
    ]

    return (
        <section className="bg-[#f4f4f4] px-6 py-[70px]">
            <div className="mx-auto max-w-[1200px] text-center">

                <h2 className="text-[34px] font-extrabold uppercase tracking-[2px] text-[#0f172a]">
                    NUESTRA COLECCIÓN
                </h2>

                <p className="mt-4 text-[18px] text-[#64748b]">
                    Estilo urbano para cada ocasión
                </p>

                <div className="mt-[50px] grid grid-cols-1 gap-[30px] sm:grid-cols-2 md:grid-cols-4">
                    {products.map((product, i) => (
                        <div key={i} className="bg-white shadow-md">

                            {/* IMAGEN / ICONO */}
                            <div className="flex h-[320px] items-center justify-center bg-[#e5e7eb]">
                                <span className="text-[64px] grayscale opacity-70">
                                    {product.icon}
                                </span>
                            </div>

                            {/* INFO */}
                            <div className="px-6 py-5 text-left">
                                <h3 className="text-[18px] font-extrabold text-[#0f172a]">
                                    {product.name}
                                </h3>

                                <p className="mt-2 text-[14px] text-[#64748b]">
                                    {product.desc}
                                </p>

                                <div className="mt-5 flex items-center justify-between">
                                    <span className="text-[20px] font-extrabold text-[#0f172a]">
                                        {product.price}
                                    </span>

                                    <button className="bg-[#0f172a] px-5 py-2 text-[13px] font-extrabold uppercase text-white">
                                        AÑADIR
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}