"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import HamburgerMenu from "@/components/hamburger-menu";

function AboutHeader() {
  const [navLinks] = useState([
    { name: "Home", path: "/" },
    { name: "About Postman", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Resources", path: "/resources" },
    { name: "Contact Us", path: "/contact" },
  ]);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`px-4 md:px-24 pt-4 fixed top-0 left-0 z-[1000] w-full transition-colors duration-500 ${
        isScrolled ? "bg-white text-[#2D2D2D]" : "bg-[#FF6C37] text-white"
      }`}
    >
      <div className="border-b h-16 sm:h-24 pt-5 pb-4 border-b-[#E9ECEF] flex justify-between items-center">
        <Link href={"/"} className="relative">
          <Image
            src={`${
              isScrolled
                ? "/Postman-logo-orange-2021 1.svg"
                : "/Postman-logo-Variants.svg"
            }`}
            alt="Postman Logo"
            width={158}
            height={49}
            objectFit="contain"
            objectPosition="center"
            priority
          />
          <span className="text-lg my-2 block">Student Community, UNIUYO</span>
        </Link>
        <nav className="hidden md:flex gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`font-medium text-base md:text-xl py-2 px-4 navlink ${
                pathname === link.path ? (isScrolled ? "active" : "custom") : ""
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
              color={isScrolled ? true : false}
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
        <nav
          className={`flex flex-col items-center justify-start h-full gap-4 p-8 ${
            isScrolled ? "bg-white text-[#2D2D2D]" : "bg-[#FF6C37] text-white"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`font-medium text-2xl py-2 px-4 navlink ${
                pathname === link.path ? (isScrolled ? "active" : "custom") : ""
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

export default AboutHeader;
