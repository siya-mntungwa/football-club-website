import { motion } from "framer-motion";
import heroBg from "../assets/IMG-20250301-WA0005.jpg";

export default function HeroCinematic() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center scale-105"
                style={{
                backgroundImage: `url(${heroBg})`,
                filter: "brightness(0.45) contrast(1.2)",
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

            <div className="absolute inset-0 bg-green-700/20 mix-blend-multiply" />

            <div className="relative z-10 flex h-full items-center px-6 md:px-16">
                <div className="max-w-3xl text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-tight">
                        Building Future <br />
                        <span className="text-green-400">Champions</span>
                    </h1>

                    <p className="mt-6 text-base md:text-lg text-neutral-200 max-w-xl">
                        A football club committed to excellence, discipline, and creating
                        pathways for young talent to thrive on and off the pitch.
                    </p>

                    <div className="mt-10 flex gap-6 flex-wrap">
                        <a href="#contact"
                            className="bg-green-600 px-10 py-4 font-extrabold uppercase tracking-wide text-white hover:scale-105 transition inline-block"
                            >
                            <span className="inline-block -skew-x-12">
                                Join The Club
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
