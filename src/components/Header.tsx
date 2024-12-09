import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <div>
      <header className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={40} // Adjusted for better visibility
              height={40} // Adjusted for better visibility
            />
            <span className="ml-1 text-2xl font-bold">Funiro</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center font-[500] gap-8 text-[20px] justify-center">
            <Link href={"/"} className="mr-5 hover:text-gray-900">Home</Link>
            <Link href={"/shop"} className="mr-5 hover:text-gray-900">Shop</Link>
            <Link href={"/block"} className="mr-5 hover:text-gray-900">Block</Link>
            <Link href={"/contact"} className="mr-5 hover:text-gray-900">Contact</Link>
          </nav>
          <div className="gap-6 flex font-[500]">
            <MdManageAccounts className="w-6 h-6 cursor-pointer gap-5" />
            <FiSearch className="w-6 h-6 cursor-pointer gap-4" />
            <FaRegHeart className="w-6 h-6 cursor-pointer" />
            <IoCartOutline className="w-8 h-6 cursor-pointer" />
          </div>
        </div>
      </header>
    </div>
  );
}
