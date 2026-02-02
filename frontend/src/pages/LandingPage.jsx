import { useEffect, useRef, useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";


function LandingPage() {
  const clientSectionRef = useRef(null);
  const [clientsVisible, setClientsVisible] = useState(false);
  const why = useScrollReveal();
  const meals = useScrollReveal();
  const categories = useScrollReveal();


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setClientsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.25 },
    );

    if (clientSectionRef.current) {
      observer.observe(clientSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero section: primary value proposition and visual entry point */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#F6E7D8] to-[#E6F4EA]">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          {/* Hero text block */}
          <div className="animate-hero-text">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-emerald-800">
              Fresh, Nutritious Meals
              <br />
              <span className="text-emerald-600">Delivered Daily</span>
            </h1>

            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              Fruits Bounty delivers carefully prepared, health-focused meals
              made with fresh fruits and clean ingredients, built for
              consistency, balance, and everyday performance.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="px-8 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">
                Order Now
              </button>

              <button className="px-8 py-3 rounded-full bg-white text-gray-900 font-semibold border border-gray-300 hover:bg-gray-100 transition">
                Explore Meals
              </button>
            </div>
          </div>

          {/* Hero image block */}
          <div className="flex justify-center animate-hero-image">
            <img
              src="/Image/hero.png"
              alt="Healthy meals presentation"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Why  choose us  */}
      <section
        ref={why.ref}
        className={`bg-[#FBF7F2] py-24 transition-all duration-700 ease-out
       ${why.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
       `}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-700">
            Why Choose Us?
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl px-8 py-12 text-center shadow-md transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl">
              <div className="flex justify-center mb-6 text-emerald-600">
                <svg
                  width="44"
                  height="44"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.8"
                >
                  <path d="M12 3v18M3 12h18" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-emerald-700">
                Freshly Prepared Daily
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Meals are prepared every day using fresh fruits and ingredients
                to maintain nutrition, taste, and overall quality.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl px-8 py-12 text-center shadow-md transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl">
              <div className="flex justify-center mb-6 text-emerald-600">
                <svg
                  width="44"
                  height="44"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.8"
                >
                  <path d="M12 21s-6-4.5-9-8.6C-1 6.6 6 2.3 12 7c6-4.7 13-.4 9 5.4-3 4.1-9 8.6-9 8.6z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-emerald-700">
                Trusted by Customers
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Customers rely on Fruits Bounty for consistency, quality, and
                long-term healthy eating habits.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl px-8 py-12 text-center shadow-md transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl">
              <div className="flex justify-center mb-6 text-emerald-600">
                <svg
                  width="44"
                  height="44"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.8"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8.5 12.5l2.2 2.2L15.5 10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-emerald-700">
                Clean Ingredients
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We use high-quality fruits and clean ingredients with no
                unnecessary additives or preservatives.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl px-8 py-12 text-center shadow-md transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl">
              <div className="flex justify-center mb-6 text-emerald-600">
                <svg
                  width="44"
                  height="44"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.8"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-emerald-700">
                On-Time Delivery
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Orders are delivered on schedule so your daily nutrition routine
                remains uninterrupted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MOST SELLING ITEMS SECTION */}
      <section
        ref={meals.ref}
        className={`bg-gradient-to-r from-[#F6E7D8] to-[#E6F4EA] py-16
       transition-all duration-700 ease-out
       ${meals.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
       `}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0E9F6E] mb-10">
            Most Ordered Meals
          </h2>

          <div className="flex gap-8 overflow-x-auto pb-4 perspective-container no-scrollbar">
            {[
              { title: "Power Fruit Bowl", img: "/Image/a.png" },
              { title: "Detox Fruit Mix", img: "/Image/b.png" },
              { title: "Immunity Boost", img: "/Image/m.png" },
              { title: "Protein Fruit Mix", img: "/Image/n.png" },
            ].map((item) => (
              <div
                key={item.title}
                className="group min-w-[260px] bg-white rounded-2xl shadow-md overflow-hidden
                     transform transition-all duration-300
                     hover:shadow-2xl hover:scale-[1.03]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/45 backdrop-blur-sm text-white text-center py-3 text-sm font-semibold">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY SECTION */}

      <section
        ref={categories.ref}
        className={`bg-gradient-to-r from-[#F6E7D8] to-[#E6F4EA]
  py-20 transition-all duration-700 ease-out
  ${categories.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
  `}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0E9F6E] mb-12">
            Categories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Fruit Bowls", img: "/Image/a.png" },
              { title: "Detox Mixes", img: "/Image/b.png" },
              { title: "Immunity Boosters", img: "/Image/m.png" },
              { title: "Protein Mixes", img: "/Image/n.png" },
              { title: "Fresh Cuts", img: "/Image/o.png" },
              { title: "Daily Combos", img: "/Image/p.png" },
              { title: "Energy Snacks", img: "/Image/Q.png" },
              { title: "Custom Orders", img: "/Image/R.png" },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-white rounded-2xl shadow-md overflow-hidden
                     transition-all duration-300
                     hover:shadow-2xl hover:scale-[1.04]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm text-white text-center py-3 text-sm font-semibold">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our happy coustomer  */}

      <section
        ref={clientSectionRef}
        className="bg-gradient-to-r from-[#F6E7D8] to-[#E6F4EA] py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0E9F6E] mb-14">
            Our Happy Clients
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "Aarav Sharma",
                img: "https://i.pravatar.cc/150?img=12",
                review:
                  "Fruits Bounty has completely changed my daily eating habits. Clean, fresh and reliable.",
              },
              {
                name: "Priya Mehta",
                img: "https://i.pravatar.cc/150?img=47",
                review:
                  "Healthy food without compromise. You can taste the quality in every meal.",
              },
              {
                name: "Rohan Verma",
                img: "https://i.pravatar.cc/150?img=32",
                review:
                  "Perfect for busy professionals who want consistent nutrition every day.",
              },
            ].map((client, i) => (
              <div
                key={client.name}
                className={`
            bg-white rounded-2xl p-8 shadow-md
            transition-all duration-700 ease-out
            hover:shadow-2xl hover:-translate-y-2
            ${
              clientsVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-95"
            }
          `}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full overflow-hidden transition-transform duration-500 hover:scale-110">
                    <img
                      src={client.img}
                      alt={client.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h4 className="font-semibold text-lg text-gray-900">
                    {client.name}
                  </h4>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  “{client.review}”
                </p>

                <div className="flex gap-1 text-yellow-400">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

export default LandingPage;
