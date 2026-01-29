import { motion } from "framer-motion";
import gallery1 from "../assets/IMG-20260120-WA0006.jpg";
import gallery2 from "../assets/IMG-20241207-WA0020.jpg";
import gallery3 from "../assets/IMG-20241207-WA0023.jpg";
import gallery4 from "../assets/IMG-20260120-WA0015.jpg";
import gallery5 from "../assets/IMG-20260120-WA0017.jpg";
import gallery6 from "../assets/IMG-20260120-WA0021.jpg";

const galleryImages = [
    { src: gallery1, title: "Match Day Highlights" },
    { src: gallery2, title: "Match Day Highlights" },
    { src: gallery3, title: "Team Huddle" },
    { src: gallery4, title: "Match Day Highlights" },
    { src: gallery5, title: "Match Day Highlights" },
    { src: gallery6, title: "Match Day Highlights" },
];

export default function Gallery() {
    return (
        <section className="py-40 px-6 md:px-16 bg-neutral-50 relative">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-black italic uppercase text-green-900 tracking-tight mb-4">
                Gallery
                </h2>
                <p className="text-lg text-neutral-700">
                Moments that define our journey on and off the pitch.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {galleryImages.map((image, index) => (
                <motion.div
                    key={index}
                    className="overflow-hidden cursor-pointer relative border border-neutral-200"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                    <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                    />

                    <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-center py-2">
                        <span className="text-white font-bold italic">
                            {image.title}
                        </span>
                    </div>
                </motion.div>
                ))}
            </div>
        </section>
    );
}
