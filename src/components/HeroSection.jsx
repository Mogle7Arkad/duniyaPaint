
export default function HeroSection() {
  return (
<div
      className="relative bg-cover bg-center h-[60vh] lg:h-screen flex items-center justify-center px-4 sm:px-8"
      style={{ backgroundImage: "url(/assets/services/interiorService.webp)" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative z-10 text-center max-w-2xl">
        <h2 className="text-white text-sm sm:text-base tracking-wide">
          PROFESSIONAL PAINTING COMPANY
        </h2>
        <h1 className="text-white text-4xl sm:text-5xl font-bold mt-2">
          YOU CAN TRUST
        </h1>
        <div className="mt-6">
        <button className="border bg-purple-400 border-none text-gray-800 hover:bg-gray-100 px-6 py-3 mb-4 text-lg rounded-lg transition-transform transform hover:scale-105">
        Get a Free Estimate
          </button>
        </div>
      </div>
    </div>
  );
}
