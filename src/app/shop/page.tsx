import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Shop() {
  return (
    <div>
      <Header />
      <section className="relative">
        <Image
          src="/images/contact.png"
          alt="Contact Banner"
          width={1440}
          height={800}
          layout="responsive"
          className="w-full h-auto object-cover"
          priority
        />
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product Cards */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-64 rounded w-full object-cover object-center mb-6"
                src="/images/Image1.png"
                alt="Syltherine"
                width={600}
                height={600}
                quality={100}
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
                width={600}
                height={600}
                quality={100}
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
                width={600}
                height={600}
                quality={100}
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
                width={600}
                height={600}
                quality={100}
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
                width={600}
                height={600}
                quality={100}
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
                width={600}
                height={600}
                quality={100}
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
                width={600}
                height={600}
                quality={100}
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
                width={600}
                height={600}
                quality={100}
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

      <section className="relative">
        <Image
          src="/images/contact1.png"
          alt="Footer Banner"
          width={1440}
          height={800}
          layout="responsive"
          className="w-full h-auto object-cover"
        />
      </section>
      <Footer />
    </div>
  );
}
