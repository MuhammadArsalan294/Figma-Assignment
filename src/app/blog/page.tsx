import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Blog() {
  return (
    <div className="bg-white">
      <Header />
      <main className="flex flex-col items-center">
        <section className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Image
            src="/images/blog1.png"
            alt="Contact Banner"
            width={1440}
            height={800}
            layout="responsive"
            className="w-full h-auto object-cover rounded-lg shadow-md"
            priority
          />
        </section>
        <section className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Image
            src="/images/blog2.png"
            alt="Contact Banner"
            width={1440}
            height={800}
            layout="responsive"
            className="w-full h-auto object-cover rounded-lg shadow-md"
            priority
          />
        </section>
        <section className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Image
            src="/images/contact1.png"
            alt="Footer Banner"
            width={1440}
            height={800}
            layout="responsive"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
