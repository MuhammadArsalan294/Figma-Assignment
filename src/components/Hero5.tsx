import Image from "next/image";

export default function Her05() {
  return (
    <div className="relative max-w-7xl mx-auto p-4">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <div className="text-center ">
          <p className="leading-relaxed text-base mx-auto sm:w-3/5">
            Share your setup with
          </p>
          <h1 className="text-2xl font-bold text-gray-900">#FuniroFurniture</h1>
        </div>
        <Image
          src="/images/hero5.jpg"
          alt="A scenic view of the hero section"
          layout="responsive"
          width={1600}
          height={900}
          priority
        />
      </div>
    </div>
  );
}
