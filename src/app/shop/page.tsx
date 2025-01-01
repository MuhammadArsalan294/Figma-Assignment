import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { PiCirclesFourFill } from "react-icons/pi";
import { BsViewList } from "react-icons/bs";
import { PiListBold } from "react-icons/pi";

export default function Shop() {
  return (
    <div>
      {/* Header Section */}
      <Header />
      <div className="relative">
        <Image
          src={"/images/contactpic.png"}
          alt="Contact Header Image"
          width={1500}
          height={100}
          className="w-full h-auto"
        />
        <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h3 className="font-bold text-xl sm:text-2xl">Shop</h3>
          <div className="flex items-center justify-center text-sm sm:text-base">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Shop</h3>
          </div>
        </div>
      </div>

      <div className="bg-[#f9f5eb] py-4 px-4 md:px-8 lg:px-20 border-b border-gray-300">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Left Section: Filter and View Icons */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-700 hover:text-black">
              <PiListBold />
              <span className="text-sm font-medium">Filter</span>
            </button>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded hover:bg-gray-200">
                <PiCirclesFourFill />
              </button>
              <button className="p-2 rounded hover:bg-gray-200">
                <BsViewList />
              </button>
            </div>
            <div className="text-sm text-gray-700">
              Showing <span className="font-semibold">1–16</span> of{" "}
              <span className="font-semibold">32</span> results
            </div>
          </div>

          {/* Right Section: Show and Sort Options */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label
                htmlFor="show"
                className="text-sm font-medium text-gray-700"
              >
                Show
              </label>
              <input
                id="show"
                type="number"
                defaultValue="16"
                className="w-16 p-1 border rounded text-center text-gray-700"
              />
            </div>
            <div className="flex items-center gap-2">
              <label
                htmlFor="sort"
                className="text-sm font-medium text-gray-700"
              >
                Sort by
              </label>
              <select
                id="sort"
                className="border p-1 rounded text-gray-700 bg-white"
              >
                <option value="default">Default</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font container px-5 py-8 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="relative bg-gray-100 p-4 rounded-lg">
            <Image
              src="/images/Image1.png"
              alt="Syltherine"
              width={600}
              height={400}
              className="rounded w-full object-cover"
            />
            <span className="absolute top-6 right-6 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -30%
            </span>
            <h2 className="text-lg font-medium text-gray-900 mt-4">
              Syltherine
            </h2>
            <p className="text-sm text-gray-600">Stylish cafe chair</p>
            <p className="text-gray-900 font-bold">
              Rp 2.500.000{" "}
              <span className="text-gray-400 line-through ml-2">
                Rp 3.500.000
              </span>
            </p>
          </div>

          {/* Product 2 */}
          <div className="relative bg-gray-100 p-4 rounded-lg">
            <Image
              src="/images/Image2.jpg"
              alt="Leviosa"
              width={600}
              height={400}
              className="rounded w-full object-cover"
            />
            <h2 className="text-lg font-medium text-gray-900 mt-4">Leviosa</h2>
            <p className="text-sm text-gray-600">Stylish cafe chair</p>
            <p className="text-gray-900 font-bold">Rp 2.500.000</p>
          </div>

          {/* Product 3 */}
          <div className="relative bg-gray-100 p-4 rounded-lg">
            <Image
              src="/images/Image3.png"
              alt="Lolito"
              width={600}
              height={400}
              className="rounded w-full object-cover"
            />
            <span className="absolute top-6 right-6 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -50%
            </span>
            <h2 className="text-lg font-medium text-gray-900 mt-4">Lolito</h2>
            <p className="text-sm text-gray-600">Luxury big sofa</p>
            <p className="text-gray-900 font-bold">
              Rp 7.000.000{" "}
              <span className="text-gray-400 line-through ml-2">
                Rp 14.000.000
              </span>
            </p>
          </div>

          {/* Product 4 */}
          <div className="relative bg-gray-100 p-4 rounded-lg">
            <Image
              src="/images/Image4.png"
              alt="Respira"
              width={600}
              height={400}
              className="rounded w-full object-cover"
            />
            <span className="absolute top-6 right-[22px] bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              New
            </span>
            <h2 className="text-lg font-medium text-gray-900 mt-4">Respira</h2>
            <p className="text-sm text-gray-600">Outdoor bar table and stool</p>
            <p className="text-gray-900 font-bold">Rp 500.000</p>
          </div>
          {/* Product 5 */}
          <div className="relative bg-gray-100 p-4 rounded-lg">
            <Image
              src="/images/Image1.png"
              alt="Syltherine"
              width={600}
              height={400}
              className="rounded w-full object-cover"
            />
            <span className="absolute top-6 right-6 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -30%
            </span>
            <h2 className="text-lg font-medium text-gray-900 mt-4">
              Syltherine
            </h2>
            <p className="text-sm text-gray-600">Stylish cafe chair</p>
            <p className="text-gray-900 font-bold">
              Rp 2.500.000{" "}
              <span className="text-gray-400 line-through ml-2">
                Rp 3.500.000
              </span>
            </p>
          </div>

          {/* Product 6 */}
          <div className="relative bg-gray-100 p-4 rounded-lg">
            <Image
              src="/images/Image2.jpg"
              alt="Leviosa"
              width={600}
              height={400}
              className="rounded w-full object-cover"
            />
            <h2 className="text-lg font-medium text-gray-900 mt-4">Leviosa</h2>
            <p className="text-sm text-gray-600">Stylish cafe chair</p>
            <p className="text-gray-900 font-bold">Rp 2.500.000</p>
          </div>

          {/* Product 7 */}
          <div className="relative bg-gray-100 p-4 rounded-lg">
            <Image
              src="/images/Image3.png"
              alt="Lolito"
              width={600}
              height={400}
              className="rounded w-full object-cover"
            />
            <span className="absolute top-6 right-6 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -50%
            </span>
            <h2 className="text-lg font-medium text-gray-900 mt-4">Lolito</h2>
            <p className="text-sm text-gray-600">Luxury big sofa</p>
            <p className="text-gray-900 font-bold">
              Rp 7.000.000{" "}
              <span className="text-gray-400 line-through ml-2">
                Rp 14.000.000
              </span>
            </p>
          </div>

          {/* Product 8 */}
          <div className="relative bg-gray-100 p-4 rounded-lg">
            <Image
              src="/images/Image4.png"
              alt="Respira"
              width={600}
              height={400}
              className="rounded w-full object-cover"
            />
            <span className="absolute top-6 right-[22px] bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              New
            </span>
            <h2 className="text-lg font-medium text-gray-900 mt-4">Respira</h2>
            <p className="text-sm text-gray-600">Outdoor bar table and stool</p>
            <p className="text-gray-900 font-bold">Rp 500.000</p>
          </div>
          {/* Product 9 */}
          <div className="relative bg-gray-100 p-4 rounded-lg">
            <Image
              src="/images/Image1.png"
              alt="Syltherine"
              width={600}
              height={400}
              className="rounded w-full object-cover"
            />
            <span className="absolute top-6 right-6 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -30%
            </span>
            <h2 className="text-lg font-medium text-gray-900 mt-4">
              Syltherine
            </h2>
            <p className="text-sm text-gray-600">Stylish cafe chair</p>
            <p className="text-gray-900 font-bold">
              Rp 2.500.000{" "}
              <span className="text-gray-400 line-through ml-2">
                Rp 3.500.000
              </span>
            </p>
          </div>

          {/* Product 10 */}
          <div className="relative bg-gray-100 p-4 rounded-lg">
            <Image
              src="/images/Image2.jpg"
              alt="Leviosa"
              width={600}
              height={400}
              className="rounded w-full object-cover"
            />
            <h2 className="text-lg font-medium text-gray-900 mt-4">Leviosa</h2>
            <p className="text-sm text-gray-600">Stylish cafe chair</p>
            <p className="text-gray-900 font-bold">Rp 2.500.000</p>
          </div>

          {/* Product 11 */}
          <div className="relative bg-gray-100 p-4 rounded-lg">
            <Image
              src="/images/Image3.png"
              alt="Lolito"
              width={600}
              height={400}
              className="rounded w-full object-cover"
            />
            <span className="absolute top-6 right-6 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -50%
            </span>
            <h2 className="text-lg font-medium text-gray-900 mt-4">Lolito</h2>
            <p className="text-sm text-gray-600">Luxury big sofa</p>
            <p className="text-gray-900 font-bold">
              Rp 7.000.000{" "}
              <span className="text-gray-400 line-through ml-2">
                Rp 14.000.000
              </span>
            </p>
          </div>

          {/* Product 12 */}
          <div className="relative bg-gray-100 p-4 rounded-lg">
            <Image
              src="/images/Image4.png"
              alt="Respira"
              width={600}
              height={400}
              className="rounded w-full object-cover"
            />
            <span className="absolute top-6 right-[22px] bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              New
            </span>
            <h2 className="text-lg font-medium text-gray-900 mt-4">Respira</h2>
            <p className="text-sm text-gray-600">Outdoor bar table and stool</p>
            <p className="text-gray-900 font-bold">Rp 500.000</p>
          </div>
          {/* Product 13 */}
          <div className="relative bg-gray-100 p-4 rounded-lg">
            <Image
              src="/images/Image1.png"
              alt="Syltherine"
              width={600}
              height={400}
              className="rounded w-full object-cover"
            />
            <span className="absolute top-6 right-6 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -30%
            </span>
            <h2 className="text-lg font-medium text-gray-900 mt-4">
              Syltherine
            </h2>
            <p className="text-sm text-gray-600">Stylish cafe chair</p>
            <p className="text-gray-900 font-bold">
              Rp 2.500.000{" "}
              <span className="text-gray-400 line-through ml-2">
                Rp 3.500.000
              </span>
            </p>
          </div>

          {/* Product 14 */}
          <div className="relative bg-gray-100 p-4 rounded-lg">
            <Image
              src="/images/Image2.jpg"
              alt="Leviosa"
              width={600}
              height={400}
              className="rounded w-full object-cover"
            />
            <h2 className="text-lg font-medium text-gray-900 mt-4">Leviosa</h2>
            <p className="text-sm text-gray-600">Stylish cafe chair</p>
            <p className="text-gray-900 font-bold">Rp 2.500.000</p>
          </div>

          {/* Product 15 */}
          <div className="relative bg-gray-100 p-4 rounded-lg">
            <Image
              src="/images/Image3.png"
              alt="Lolito"
              width={600}
              height={400}
              className="rounded w-full object-cover"
            />
            <span className="absolute top-6 right-6 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -50%
            </span>
            <h2 className="text-lg font-medium text-gray-900 mt-4">Lolito</h2>
            <p className="text-sm text-gray-600">Luxury big sofa</p>
            <p className="text-gray-900 font-bold">
              Rp 7.000.000{" "}
              <span className="text-gray-400 line-through ml-2">
                Rp 14.000.000
              </span>
            </p>
          </div>

          {/* Product 16 */}
          <div className="relative bg-gray-100 p-4 rounded-lg">
            <Image
              src="/images/Image4.png"
              alt="Respira"
              width={600}
              height={400}
              className="rounded w-full object-cover"
            />
            <span className="absolute top-6 right-[22px] bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              New
            </span>
            <h2 className="text-lg font-medium text-gray-900 mt-4">Respira</h2>
            <p className="text-sm text-gray-600">Outdoor bar table and stool</p>
            <p className="text-gray-900 font-bold">Rp 500.000</p>
          </div>
        </div>
      </section>
      <div className=" flex gap-4 justify-center">
        <button className="w-[2.5rem] h-[2.5rem] mb-3   bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-black rounded-xl">
          1
        </button>

        <Link href={"/shop2"}>
          <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-black rounded-xl">
            2
          </button>
        </Link>
        <button className="w-[2.5rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-black rounded-xl">
          3
        </button>
        <button className="w-[4rem] h-[2.5rem] mb-3  bg-[#F9F1E7]  hover:bg-[#B88E2F] cursor-pointer text-black rounded-xl">
          Next
        </button>
      </div>

      {/* Features Section */}
      <div className="mt-5 mb-5 flex flex-wrap items-center justify-around gap-6 p-4 bg-[#F9F1E7]">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <Image
            src="/images/contact1.png"
            width={40}
            height={40}
            alt="High Quality Materials"
          />
          <div>
            <h4 className="font-bold text-base sm:text-lg">High Quality</h4>
            <p className="text-sm sm:text-base">crafted from top materials</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <Image
            src="/images/contact2.png"
            width={40}
            height={40}
            alt="Warranty Guarantee"
          />
          <div>
            <h4 className="font-bold text-base sm:text-lg">
              Warranty Protection
            </h4>
            <p className="text-sm sm:text-base">Over 2 years</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <Image
            src="/images/contact3.png"
            width={40}
            height={40}
            alt="Free Shipping"
          />
          <div>
            <h4 className="font-bold text-base sm:text-lg">Free Shipping</h4>
            <p className="text-sm sm:text-base">Order over 150 $</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <Image
            src="/images/contact4.png"
            width={40}
            height={40}
            alt="24/7 Customer Support"
          />
          <div>
            <h4 className="font-bold text-base sm:text-lg">24 / 7 Support</h4>
            <p className="text-sm sm:text-base">Dedicated support</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
