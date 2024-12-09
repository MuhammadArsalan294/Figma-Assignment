import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";

export default function Contact() {
  return (
    <div className="bg-gray-50">
      <Header />

      {/* Hero Image */}
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

      {/* Contact Section */}
      <section className="text-gray-600 body-font relative">
        {/* Heading */}
        <div className="text-center mt-12 px-6 sm:px-12 lg:px-20">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            Get In Touch With Us
          </h1>
          <p className="leading-relaxed text-sm sm:text-base lg:text-lg text-gray-700 mx-auto max-w-3xl mt-4">
            For more information about our products & services, feel free to drop us an email. Our staff will always be there to assist you. Don’t hesitate!
          </p>
        </div>

        <div className="container mx-auto px-6 sm:px-12 lg:px-20 py-14 flex flex-col lg:flex-row items-start gap-12">
          {/* Address Section */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start mb-8">
                <FaLocationDot className="text-black text-2xl mt-1" />
                <div className="ml-5">
                  <h2 className="font-semibold text-gray-900 text-sm uppercase">
                    Address
                  </h2>
                  <p className="mt-2 text-gray-600">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-8">
                <FaPhone className="text-black text-2xl mt-1" />
                <div className="ml-5">
                  <h2 className="font-semibold text-gray-900 text-sm uppercase">
                    Phone
                  </h2>
                  <p className="mt-2 text-gray-600">Mobile: +(84) 546-6789</p>
                </div>
              </div>
              <div className="flex items-start">
                <MdAccessTimeFilled className="text-black text-2xl mt-1" />
                <div className="ml-5">
                  <h2 className="font-semibold text-gray-900 text-sm uppercase">
                    Working Time
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Monday-Friday: 9:00 AM - 10:00 PM <br />
                    Saturday-Sunday: 9:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:w-1/2 w-full bg-white rounded-lg shadow-lg p-8">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2.5 px-4"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2.5 px-4"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-gray-100 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2.5 px-4"
                  placeholder="Optional subject"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2.5 px-4 resize-none"
                  placeholder="Hi! I’d like to ask about..."
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#B88E2F] border-0 py-3 px-6 focus:outline-none hover:bg-[#6d5724] rounded-lg text-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Image */}
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

