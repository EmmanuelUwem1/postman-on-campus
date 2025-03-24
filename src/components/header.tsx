"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import HamburgerMenu from "./hamburger-menu";

function Header() {
  const [navLinks] = useState([
    { name: "Home", path: "/" },
    { name: "About Postman", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Resources", path: "/resources" },
    { name: "Contact Us", path: "/contact" },
  ]);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="px-4 md:px-24 pt-4 fixed top-0 left-0 bg-white z-[1000] w-full">
      <div className="border-b h-16 sm:h-24 pt-5 pb-4 border-b-[#E9ECEF] flex justify-between items-center">
        <Link href={"https://postman.com"} rel="noreferrer" target="_blank" className="relative">
          <Image
            src="/Postman-logo-orange-2021 1.svg"
            alt="Postman Logo"
            width={1200}
            height={200}
            objectFit="contain"
            objectPosition="center"
            layout="responsive"
            priority={true}
          ></Image>
          <span className="text-lg my-2 block">Student Community, UNIUYO</span>
        </Link>
        <nav className="hidden md:flex gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`font-medium text-base md:text-xl text-[#2D2D2D] py-2 px-4 navlink ${
                pathname === link.path ||
                (link.path !== "/" && pathname.startsWith(link.path))
                  ? "active"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <span onClick={toggleMenu} className="focus:outline-none relative">
            <HamburgerMenu
              isOpened={isMenuOpen}
              toggleMenu={toggleMenu}
              color={true}
            />
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 right-0 h-full w-full bg-white z-[999] transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <nav className="flex flex-col items-center justify-start h-full gap-4 p-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`font-medium text-2xl text-[#2D2D2D] py-0 px-4 navlink rounded-full ${
                pathname === link.path ||
                (link.path !== "/" && pathname.startsWith(link.path))
                  ? "active"
                  : ""
              }`}
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
