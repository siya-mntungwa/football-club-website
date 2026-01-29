import logo from "../assets/Logo.png";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-green-700/30 shadow-sm">
            <nav className="max-w-7xl mx-auto px-6 md:px-16">
                <div className="flex items-center justify-between h-20">
                    <div className="text-green-800 font-extrabold text-xl md:text-2xl uppercase">
                    Elsburg Juniors
                    </div>

                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
                        <img
                        src={logo}
                        alt="Club Logo"
                        className="h-16 md:h-20 w-auto"
                        />
                    </div>

                    <div className="text-green-800 font-extrabold text-lg md:text-xl uppercase">
                    Football Club
                    </div>

                    <div className="md:hidden w-full flex justify-center">
                        <img
                        src={logo}
                        alt="Club Logo"
                        className="h-12 w-auto"
                        />
                    </div>

                </div>
            </nav>
        </header>
    );
}
