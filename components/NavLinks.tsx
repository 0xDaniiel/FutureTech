"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { GiHamburgerMenu } from "react-icons/gi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "News", path: "/news" },
  { name: "Podcasts", path: "/podcast" },
  { name: "Resources", path: "/resources" },
];

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <div>
      {/* Navigation (Center) */}
      <nav className="hidden md:flex flex-1 justify-center space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`px-3 py-1 rounded-md transition text-gray-100 ${
              pathname === link.path
                ? "text-gray-100"
                : "hover:text-black hover:bg-gray-300"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <Popover className="text-white">
        <PopoverTrigger className="text-white text-2xl md:hidden block">
          <GiHamburgerMenu />
        </PopoverTrigger>
        <PopoverContent className="flex flex-col items-center justify-center gap-5 backdrop-blur-2xl  bg-black">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`px-3 py-1 rounded-md transition text-gray-100 ${
                pathname === link.path
                  ? "text-gray-100"
                  : "hover:text-black hover:bg-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className="px-4 py-2 bg-orange-500 text-black font-medium rounded-md transition hover:bg-orange-400"
          >
            Contact
          </Link>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NavLinks;
