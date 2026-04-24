export default function Hero() {
    return (
    <section
        id="inicio"
        className="flex h-[500px] items-center justify-center px-6 text-center"
        style={{
        background:
            "linear-gradient(90deg, #1a1a1a 0%, #2b2b2b 50%, #1a1a1a 100%)",
        }}
    >
        <div className="mx-auto max-w-[1100px]">
        <h2 className="text-[64px] font-bold leading-none text-white">
            ESTILO URBANO
        </h2>

        <h2 className="text-[64px] font-bold leading-none text-[#f4b321]">
            REDEFINIDO
        </h2>

        <p className="mt-6 text-[24px] text-white">
            Descubre nuestra colección exclusiva de ropa urbana minimalista
        </p>

        <a
            href="/productos"
            className="mt-10 inline-block bg-[#f5a000] px-10 py-4 font-bold text-black"
        >
            EXPLORAR COLECCIÓN
        </a>
        </div>
    </section>
    )
}