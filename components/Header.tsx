import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="py-5 px-4 md:px-10 ">
      <div className="flex items-center justify-between">
        {/* Logo (Left) */}
        <div className="flex items-center space-x-3">
          <Image
            src="/images/futureTech.svg"
            alt="Future Tech"
            width={50}
            height={50}
          />
          <span className="text-xl font-bold text-white">Future Tech</span>
        </div>

        <NavLinks />

        {/* Contact Button (Right) */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-4 py-2 bg-orange-500 text-black font-medium rounded-md transition hover:bg-orange-400"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
