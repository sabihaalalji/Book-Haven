
function Hero({ searchTerm, setSearchTerm }) {
  return (
    <section className="bg-slate-50 px-10 py-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-12">

        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold tracking-[0.2em] text-blue-600 mb-5">
            YOUR NEXT CHAPTER STARTS HERE
          </h2>

          <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
            Find your next favourite book.
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Discover your next favourite read with Book Haven. Explore a world of
            stories, uncover hidden gems, discover new authors and find books that
            inspire your imagination. Whether you're drawn to fantasy, mystery,
            adventure or timeless classics, your next great read starts here.
          </p>

          <input
            className="w-full max-w-lg px-5 py-4 rounded-xl border border-slate-200 bg-white shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            placeholder="Search for books or authors..."
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="w-1/2">
          <img
            src="/hero-img.png"
            alt="Book Haven book collection"
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;

