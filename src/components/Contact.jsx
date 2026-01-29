export default function Contact() {
    return (
        <section id="contact" className="py-40 px-6 md:px-16 bg-neutral-50">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 uppercase mb-4 italic">
                Get in Touch
                </h2>
                <p className="text-lg text-neutral-700">
                Join our team or send us a message. We’ll get back to you as soon as possible.
                </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 md:p-12 rounded-lg">
                <form className="grid grid-cols-1 gap-6">
                <div>
                    <label className="block text-sm font-bold text-green-800 mb-2" htmlFor="name">
                    Full Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    placeholder="Your full name"
                    className="w-full border border-neutral-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-green-800 mb-2" htmlFor="email">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full border border-neutral-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-green-800 mb-2" htmlFor="message">
                    Message
                    </label>
                    <textarea
                    id="message"
                    rows="5"
                    placeholder="Your message..."
                    className="w-full border border-neutral-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-green-700 text-white font-bold py-3 px-6 rounded hover:bg-green-800 transition"
                >
                    Send Message
                </button>
                </form>

                {/* Optional: Contact info */}
                <div className="mt-12 text-center text-neutral-600">
                <p>Email: <a href="mailto:info@mtnfc.com" className="underline">info@mtnfc.com</a></p>
                <p>Phone: <a href="tel:+1234567890" className="underline">+1 234 567 890</a></p>
                </div>
            </div>
        </section>
    );
}
