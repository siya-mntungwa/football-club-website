export default function MissionVision() {
    const clubName = "Elsburg Junior";

    return (
        <section className="relative py-40 px-6 md:px-16 overflow-hidden bg-white">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h1 className="text-[18vw] font-black uppercase text-green-900/5 tracking-widest select-none">
                    {clubName}
                </h1>
            </div>

            <div className="absolute bottom-10 left-10 pointer-events-none">
                <span className="text-7xl md:text-9xl font-extrabold uppercase text-green-900/5">
                    
                </span>
            </div>

            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
                
                <div>
                    <span className="block text-sm font-bold text-green-700 tracking-widest mb-4">
                        01
                    </span>
                    <h2 className="text-4xl font-extrabold uppercase text-green-800">
                        Our Mission
                    </h2>
                    <p className="mt-6 text-neutral-700 text-lg leading-relaxed">
                        To develop disciplined, confident footballers by providing a
                        professional environment that nurtures talent, teamwork, and
                        character both on and off the pitch.
                    </p>
                </div>

                <div>
                    <span className="block text-sm font-bold text-green-700 tracking-widest mb-4">
                        02
                    </span>
                    <h2 className="text-4xl font-extrabold uppercase text-green-800">
                        Our Vision
                    </h2>
                    <p className="mt-6 text-neutral-700 text-lg leading-relaxed">
                        To develop young football talent, nurture character and teamwork,
                        and create pathways to professional opportunities,
                        while inspiring a lifelong love of the game.
                    </p>
                </div>

            </div>
        </section>
    );
}
