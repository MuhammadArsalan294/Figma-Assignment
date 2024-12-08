import Image from "next/image";
export default function Contact() {
    return (
      <div>
        <div className="w-[1440px] h-[316px] mt-[100px]">
        <Image
              className="w-[1440px] h-[316px] mt-[100px]"
              src="/images/contact.png"

              alt="Logo"
              width={410} // Adjusted for better visibility
              height={410} // Adjusted for better visibility
            />
            
            </div>
      </div>
    );
  }
  