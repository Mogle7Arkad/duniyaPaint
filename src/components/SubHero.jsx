function SubHero() {
    return (
      <section className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Transform Your Space with Expert Painting & Home Improvement
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              From flawless interior painting to complete home upgrades, our team
              delivers quality, efficiency, and professionalism for every
              project. Let’s bring your dream house to life!
            </p>
            <div className="mt-6 flex gap-4">
            <button className="border bg-purple-400 border-gray-300 text-gray-800 hover:bg-gray-100 px-6 py-3 mb-4 text-lg rounded-lg transition-transform transform hover:scale-105">
            Get a Free Quote
              </button>
              <button className="border border-gray-300 text-gray-800 hover:bg-gray-100 px-6 py-3 mb-4 text-lg rounded-lg transition-transform transform hover:scale-105">
                View Services
              </button>
            </div>
          </div>
  
          <div className="transition-transform transform hover:scale-105">
            <img
              src="../assets/house.jpg"
              alt="Painting Service"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
  
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-50"></div>
      </section>
    );
  }
  
  export default SubHero