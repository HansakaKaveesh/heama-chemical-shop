"use client";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center scale-105"
                style={{ backgroundImage: "url('/about.png')" }}
                aria-hidden="true"
            />
            {/* Gradient veil */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/70 backdrop-blur-[2px]" />
            {/* Floating blobs */}
            <div className="hero-blob -top-16 -left-16 h-72 w-72 bg-blue-500/40 animate-pulse-slow" />
            <div className="hero-blob -bottom-24 -right-24 h-96 w-96 bg-cyan-400/40 animate-pulse-slow" />
            <div className="grain" />
            {/* Content */}
            <div className="relative z-10 px-6 py-24 md:py-32 lg:py-40 text-center text-white">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow glow-flash">
                    Our Products
                </h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed text-gray-200">
                    Reliable performance and luxurious quality in every product we offer.
                </p>
                <div className="mt-8 flex items-center justify-center gap-3">
                    <button
                        onClick={() => {
                            const el = document.getElementById("cleaning");
                            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 text-blue-800 font-semibold shadow hover:bg-white"
                    >
                        Explore Cleaning
                    </button>

                    <button
                        onClick={() => {
                            const el = document.getElementById("chemicals");
                            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 text-blue-800 font-semibold shadow hover:bg-white"
                    >
                        Explore Chemicals
                    </button>
                </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute inset-0 bg-dots opacity-30" aria-hidden="true" />
        </section>
    );
}