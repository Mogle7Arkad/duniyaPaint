import portfolios from "../Portfolio";

function Portfolio() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Painting & Finishes Portfolio
        </h2>
        <p className="mt-4 text-gray-600">
          Browse some of our latest painting and finishing projects.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map((portfolio, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={portfolio.image}
                alt={portfolio.title}
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-lg font-semibold">{portfolio.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio