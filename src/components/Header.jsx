
function Header() {
    return (
        <header className="w-full bg-white px-10 py-5 shadow-sm">
            <nav className="flex items-center justify-between max-w-7xl mx-auto">

                <a href="#" className="text-2xl font-bold text-slate-900">
                    Book<span className="text-blue-600">Haven.</span>
                </a>

                <div className="flex items-center gap-10">
                    <a href="#" className="text-slate-700 hover:text-blue-600 transition">Home</a>
                    <a href="#" className="text-slate-700 hover:text-blue-600 transition">Discover</a>
                    <a href="#" className="text-slate-700 hover:text-blue-600 transition">My Library</a>
                </div>

                <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition">
                    Explore Books
                </button>

            </nav>
        </header>
    );
}

export default Header;

