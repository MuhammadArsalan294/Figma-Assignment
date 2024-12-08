import Image from "next/image";
export default function Hero03() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex justify-center mb-10">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">
            Our Products
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product Cards */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <Image
              className="h-64 rounded w-full object-cover object-center mb-6"
              src="/images/Image1.png"
              alt="Syltherine"
              width={100}
              height={100}
            />
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              Syltherine
            </h2>
            <p className="leading-relaxed text-base">Style cafe chair</p>
            <p className="leading-relaxed font-bold">Rp 2.500.000</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <Image
              className="h-64 rounded w-full object-cover object-center mb-6"
              src="/images/Image2.jpg"
              alt="Leviosa"
              width={100}
              height={100}
            />
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              Leviosa
            </h2>
            <p className="leading-relaxed text-base">Style cafe chair</p>
            <p className="leading-relaxed font-bold">Rp 2.500.000</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <Image
              className="h-64 rounded w-full object-cover object-center mb-6"
              src="/images/Image3.png"
              alt="Lolito"
              width={100}
              height={100}
            />
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              Lolito
            </h2>
            <p className="leading-relaxed text-base">Luxury big sofa</p>
            <p className="leading-relaxed font-bold">Rp 7.000.000</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <Image
              className="h-64 rounded w-full object-cover object-center mb-6"
              src="/images/Image4.png"
              alt="Respira"
              width={100}
              height={100}
            />
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              Respira
            </h2>
            <p className="leading-relaxed text-base">
              Outdoor bar table and stool
            </p>
            <p className="leading-relaxed font-bold">Rp 500.000</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <Image
              className="h-64 rounded w-full object-cover object-center mb-6"
              src="/images/Image5.png"
              alt="Grifo"
              width={100}
              height={100}
            />
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              Grifo
            </h2>
            <p className="leading-relaxed text-base">Night lamp</p>
            <p className="leading-relaxed font-bold">Rp 500.000</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <Image
              className="h-64 rounded w-full object-cover object-center mb-6"
              src="/images/Image6.png"
              alt="Muggo"
              width={100}
              height={100}
            />
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              Muggo
            </h2>
            <p className="leading-relaxed text-base">Small mug</p>
            <p className="leading-relaxed font-bold">Rp 500.000</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <Image
              className="h-64 rounded w-full object-cover object-center mb-6"
              src="/images/Image7.png"
              alt="Pingky"
              width={100}
              height={100}
            />
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              Pingky
            </h2>
            <p className="leading-relaxed text-base">Cute bed set</p>
            <p className="leading-relaxed font-bold">Rp 500.000</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <Image
              className="h-64 rounded w-full object-cover object-center mb-6"
              src="/images/Image8.png"
              alt="Potty"
              width={100}
              height={100}
            />
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              Potty
            </h2>
            <p className="leading-relaxed text-base">Minimalist flower pot</p>
            <p className="leading-relaxed font-bold">Rp 500.000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
