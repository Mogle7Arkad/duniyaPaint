import services from "../Services";

function ServicesSection() {
    return (
      <section className="bg-gray-100 text-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Professional Painting Services
          </h2>
          <p className="mt-4 text-gray-600">
            At Precision Painting Plus, we’re known for transforming homes and
            businesses with our professional painting services. Whether you need
            interior painting, exterior painting, or commercial services, we
            provide expert local painters to deliver high-quality results on time.
          </p>
  
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-lg overflow-hidden shadow"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 py-3">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-4 text-gray-600 mb-4 px-4">
                  {service.description}
                </p>
                <button className="border bg-blue-400 border-gray-300 text-gray-800 hover:bg-gray-100 px-6 py-3 mb-4 text-lg rounded-lg transition-transform transform hover:scale-105">
                  See More.
              </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  export  default ServicesSection;