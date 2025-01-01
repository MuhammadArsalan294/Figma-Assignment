import Image from "next/image";

const Hero5 = () => {
  return (
    <div className="bg-gray-100 py-12">
      <h1 className="text-center text-2xl font-bold mb-8">
        Share your setup with{" "}
        <span className="text-blue-500">#FuniroFurniture</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-12">
        {/* Images */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/hero5b.png"
            alt="Setup 1"
            width={400}
            height={400}
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/hero5c.png"
            alt="Setup 2"
            width={400}
            height={400}
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/hero5d.png"
            alt="Setup 3"
            width={400}
            height={400}
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/hero5e.png"
            alt="Setup 4"
            width={400}
            height={400}
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/hero5f.png"
            alt="Setup 5"
            width={400}
            height={400}
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/hero5g.png"
            alt="Setup 6"
            width={400}
            height={400}
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/hero5h.png"
            alt="Setup 7"
            width={400}
            height={400}
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/images/hero5i.png"
            alt="Setup 8"
            width={400}
            height={400}
            className="w-full h-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero5;
