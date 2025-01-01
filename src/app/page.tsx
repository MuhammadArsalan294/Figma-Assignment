import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero1 from "@/components/Hero1";
import Hero2 from "@/components/Hero2";
import Her03 from "@/components/Hero3";
import Hero4 from "@/components/Hero4";
import Her05 from "@/components/Hero5";
import { Link } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero1 />
      <Hero2 />
      <Her03 />
      <Hero4 />
      <Her05 />
      <Footer />
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center font-[500] gap-8 text-[20px] justify-center">
        <Link href="/" className="mr-5 hover:text-gray-900">
          Home
        </Link>
        <Link href="/shop" className="mr-5 hover:text-gray-900">
          Shop
        </Link>
        <Link href="/blog" className="mr-5 hover:text-gray-900">
          Blog
        </Link>
        <Link href="/contact" className="mr-5 hover:text-gray-900">
          Contact
        </Link>
      </nav>
    </div>
  );
}
