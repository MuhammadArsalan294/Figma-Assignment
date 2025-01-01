import Image from "next/image";

// components/HeroSection.js
export default function Hero4() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Section */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl">
              Our designer already made a lot of beautiful prototypes of rooms that inspire you.
            </p>
            <button className="px-8 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-all">
              Explore More
            </button>
          </div>

          {/* Image Slider */}
          <div className="relative">
            <div className="flex space-x-6 overflow-x-scroll scrollbar-hide">
              {/* Slide 1 */}
              <div className="min-w-[300px] max-w-sm h-[420px] bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                  src="/images/hero4a.png"
                  alt="Room 1"
                  width={300}
                  height={420}
                  className="w-full h-80 object-cover"
                />
                <div className="p-4 space-y-2">
                  <p className="text-gray-500 text-sm">01 — Bed Room</p>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Inner Peace
                  </h3>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="min-w-[300px] max-w-sm h-[420px] bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                  src="/images/hero4b.png"
                  alt="Room 2"
                  width={300}
                  height={420}
                  className="w-full h-80 object-cover"
                />
                <div className="p-4 space-y-2">
                  <p className="text-gray-500 text-sm">02 — Dining Room</p>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Cozy Space
                  </h3>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
              <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
              <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
              <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
