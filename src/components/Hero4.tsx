import Image from "next/image";

export default function Hero4() {
  return (
    <div className="relative">
      <Image
        className="h-[500px] w-full mt-[23px] bg-[#FCF8F3]"
        src="/images/hero4.png"
        alt="Beautiful Room"
        layout="responsive" // This helps the image scale properly
        width={1670} // Set the original width of the image
        height={500} // Set the original height of the image
      />
    </div>
  );
}
