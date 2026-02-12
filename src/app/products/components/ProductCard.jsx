"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaFlask, FaInfoCircle, FaPaperPlane } from "react-icons/fa";

/* Fade-up on scroll */
function useScrollFadeIn() {
    const ref = useRef(null);
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    obs.unobserve(el);
                }
            },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return [ref, isVisible];
}

/* Subtle 3D tilt on hover */
function useTilt(max = 7) {
    const [style, setStyle] = useState({
        transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)",
    });

    const onMouseMove = (e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const rx = (0.5 - py) * 2 * max;
        const ry = (px - 0.5) * 2 * max;
        setStyle({
            transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`,
        });
    };

    const onMouseLeave = () => {
        setStyle({
            transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)",
        });
    };

    return { style, onMouseMove, onMouseLeave };
}

export default function ProductCard({
    image,
    title,
    subtitle,
    description,
    icon: Icon,
    accent = "text-emerald-500",
    badge,
}) {
    const [ref, isVisible] = useScrollFadeIn();
    const tilt = useTilt();

    return (
        <article
            ref={ref}
            className={`group relative transform-gpu ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                } transition-all duration-500`}
            aria-label={title}
        >
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-blue-500/30 via-emerald-400/20 to-cyan-500/30 shadow-[0_10px_40px_-10px_rgba(30,64,175,0.25)] group-hover:shadow-[0_20px_60px_-12px_rgba(30,64,175,0.35)] transition-all duration-500">
                <div
                    onMouseMove={tilt.onMouseMove}
                    onMouseLeave={tilt.onMouseLeave}
                    style={tilt.style}
                    className="rounded-2xl bg-white/90 backdrop-blur-md ring-1 ring-white/60 overflow-hidden"
                >
                    {/* Image */}
                    <div className="relative h-60 card-media">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            priority={false}
                        />
                        {/* Shine sweep */}
                        <div className="pointer-events-none absolute inset-0 overflow-hidden">
                            <span className="absolute -inset-y-10 -left-1/2 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 animate-shine" />
                        </div>
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/25 to-transparent transition-colors duration-300 group-hover:from-black/30 group-hover:via-black/10" />
                        {/* Icon bubble */}
                        <div className="absolute top-4 left-4 flex items-center gap-3">
                            <div className="relative h-12 w-12 rounded-full bg-white grid place-items-center shadow-lg ring-1 ring-white/50">
                                <div className="absolute -inset-2 -z-10 rounded-full bg-blue-500/20 blur-xl" />
                                {Icon ? (
                                    <Icon className={`${accent} text-xl`} />
                                ) : (
                                    <FaFlask className="text-emerald-600 text-xl" />
                                )}
                            </div>
                        </div>
                        {/* Badge */}
                        {badge && (
                            <div className="absolute top-4 right-4">
                                <span className="inline-flex items-center rounded-full bg-white/90 text-blue-700 text-xs font-semibold px-2.5 py-1 shadow ring-1 ring-white/50">
                                    {badge}
                                </span>
                            </div>
                        )}
                        {/* Title */}
                        <div className="absolute inset-x-0 bottom-4 px-4">
                            <h4 className="text-white text-lg font-semibold drop-shadow">
                                {title}
                            </h4>
                        </div>
                    </div>

                    {/* Subtitle */}
                    {subtitle && <h5 className="mt-4 px-4 text-center">{subtitle}</h5>}

                    {/* Description + CTAs */}
                    <div className="p-4">
                        <p
                            className="text-gray-600 text-sm"
                            style={{
                                display: "-webkit-box",
                                WebkitLineClamp: 4,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                            }}
                        >
                            {description}
                        </p>
                        <div className="mt-4 flex items-center gap-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow hover:from-blue-700 hover:to-indigo-700"
                            >
                                <FaPaperPlane className="text-white/90" />
                                Request Quote
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold ring-1 ring-blue-200 text-blue-700 hover:bg-blue-50"
                            >
                                <FaInfoCircle className="text-blue-600/80" />
                                Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}