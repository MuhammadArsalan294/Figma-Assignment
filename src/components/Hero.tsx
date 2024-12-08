import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative w-full h-[812px]">
      {/* Background Image */}
      <Image
        className="w-full h-full object-cover"
        src="/images/hero.png"
        alt="Hero Section Image"
        layout="fill"
        priority
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black/30">
        <div className="bg-[#FFF3E3] p-12 md:p-12 rounded-md shadow-lg w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] text-left mt-[100px] ml-[496px]">
          {/* Title Section */}
          <p className="text-black text-sm md:text-base font-medium mb-4">
            New Arrival
          </p>
          <h1 className="font-sans font-bold text-2xl md:text-4xl leading-tight text-[#B88E2F] mb-6">
            Discover Our New Collection
          </h1>
          {/* Description */}
          <p className="font-sans font-medium text-base leading-relaxed text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Button className="bg-[#B88E2F] text-white mt-12" variant="outline">Button</Button>
        </div>
      </div>
    </div>
  );
}

