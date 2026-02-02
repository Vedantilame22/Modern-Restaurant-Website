function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo only */}
        <div className="flex items-center">
          <img
            src="/Image/logo.png"
            alt="Fruits Bounty"
            className="h-10 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <button className="hover:text-emerald-600 transition">Home</button>
          <button className="hover:text-emerald-600 transition">Meals</button>
          <button className="hover:text-emerald-600 transition">About</button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          {/* Wishlist icon */}
          <button
            aria-label="Wishlist"
            className="text-gray-600 hover:text-emerald-600 transition"
          >
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 21s-6-4.35-9-8.4C-1 6.5 6 2.5 12 7c6-4.5 13-.5 9 5.6-3 4.05-9 8.4-9 8.4z" />
            </svg>
          </button>

          {/* Cart icon */}
          <button
            aria-label="Cart"
            className="text-gray-600 hover:text-emerald-600 transition"
          >
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="20" r="1" />
              <circle cx="17" cy="20" r="1" />
              <path d="M3 3h2l3.6 10.6a2 2 0 0 0 2 1.4h6.8a2 2 0 0 0 2-1.4L21 7H6" />
            </svg>
          </button>

          {/* Auth placeholder button */}
          <button
            className="px-5 py-2 rounded-full bg-emerald-600 text-white text-sm font-semibold
                       hover:bg-emerald-700 transition"
          >
            Login / Signup
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
