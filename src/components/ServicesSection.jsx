import services from "../Services";

function ServicesSection() {
    return (
      <section className="bg-blue-100 py-16">
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
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  export  default ServicesSection;