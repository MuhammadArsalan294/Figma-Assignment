import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero03() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              src="/images/Image5.png"
              alt="Respira"
              width={600}
              height={400}
              className="rounded w-full object-cover"
            />
            <h2 className="text-lg font-medium text-gray-900 mt-4">Grifo</h2>
            <p className="text-sm text-gray-600">Night lamp</p>
            <p className="text-gray-900 font-bold">Rp 1.500.000</p>
          </div>

          {/* Product 6 */}
          <div className="relative bg-gray-100 p-4 rounded-lg">
            <Image
              src="/images/Image6.png"
              alt="Respira"
              width={600}
              height={400}
              className="rounded w-full object-cover"
            />
            <span className="absolute top-6 right-[22px] bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              New
            </span>
            <h2 className="text-lg font-medium text-gray-900 mt-4">Muggo</h2>
            <p className="text-sm text-gray-600">Small mug</p>
            <p className="text-gray-900 font-bold">Rp 150.000</p>
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
            <h2 className="text-lg font-medium text-gray-900 mt-4">Pingky</h2>
            <p className="text-sm text-gray-600">Cute bed set</p>
            <p className="text-gray-900 font-bold">
              Rp 7.000.000
              <span className="text-gray-400 line-through ml-2">
                Rp 14.000.000
              </span>
            </p>
          </div>
          {/* Product 8 */}
          <div className="relative bg-gray-100 p-4 rounded-lg">
            <Image
              src="/images/Image8.png"
              alt="Respira"
              width={600}
              height={400}
              className="rounded w-full object-cover"
            />
            <span className="absolute top-6 right-[22px] bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              New
            </span>
            <h2 className="text-lg font-medium text-gray-900 mt-4">Potty</h2>
            <p className="text-sm text-gray-600">Minimalist flower pot</p>
            <p className="text-gray-900 font-bold">Rp 500.000</p>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button className="px-6 py-2 border border-yellow-500 text-yellow-500 font-medium rounded hover:bg-yellow-100">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
}

/*
"use client";

import { console } from "inspector";
import { useState } from "react";

export default function Home() {
  const [state_count, setCount] = useState(5); //aik variable hai state_count jis main value pass karty hain jasey 5 ki hai or setCount function hai

  function handleClick() {
    //            5      + 1 = 6
    setCount(state_count + 1);
  }
  return (
    <button className="bg-blue-500 py-2 px-4" onClick={handleClick}>
      Count: {state_count}
    </button>
  );
}
*/

/*
import { useState } from "react";
import Image from "next/image";

export default function Hero03() {
  const allProducts = [
    {
      src: "/images/Image1.png",
      alt: "Syltherine",
      title: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
      discount: "-30%",
    },
    {
      src: "/images/Image2.jpg",
      alt: "Leviosa",
      title: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      src: "/images/Image3.png",
      alt: "Lolito",
      title: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      discount: "-50%",
    },
    {
      src: "/images/Image4.png",
      alt: "Respira",
      title: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      badge: "New",
    },
    {
      src: "/images/Image5.png",
      alt: "Grifo",
      title: "Grifo",
      description: "Night lamp",
      price: "Rp 1.500.000",
    },
    {
      src: "/images/Image6.png",
      alt: "Muggo",
      title: "Muggo",
      description: "Small mug",
      price: "Rp 150.000",
      badge: "New",
    },
    {
      src: "/images/Image7.png",
      alt: "Pingky",
      title: "Pingky",
      description: "Cute bed set",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      discount: "-50%",
    },
    {
      src: "/images/Image8.png",
      alt: "Potty",
      title: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 500.000",
      badge: "New",
    },
  ];

  const [visibleProducts, setVisibleProducts] = useState(4);

  const handleShowMore = () => {
    setVisibleProducts((prev) => Math.min(prev + 4, allProducts.length));
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts.slice(0, visibleProducts).map((product, index) => (
            <div key={index} className="relative bg-gray-100 p-4 rounded-lg">
              <Image
                src={product.src}
                alt={product.alt}
                width={600}
                height={400}
                className="rounded w-full object-cover"
              />
              {product.discount && (
                <span className="absolute top-6 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discount}
                </span>
              )}
              {product.badge && (
                <span className="absolute top-6 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.badge}
                </span>
              )}
              <h2 className="text-lg font-medium text-gray-900 mt-4">
                {product.title}
              </h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-gray-900 font-bold">
                {product.price}
                {product.oldPrice && (
                  <span className="text-gray-400 line-through ml-2">
                    {product.oldPrice}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
        {visibleProducts < allProducts.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleShowMore}
              className="px-6 py-2 border border-yellow-500 text-yellow-500 font-medium rounded hover:bg-yellow-100"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
  */
