"use client";
import { useEffect, useState } from "react";

interface AboutPageContainerProps {
  children: React.ReactNode;
}

function AboutPageContainer({ children }: AboutPageContainerProps) {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <>
      <div
        className={`fixed -top-[30%] -left-[30%] w-[200%] rounded-[100%]  h-[200%] transition-transform duration-500 ${
          isScrolled ? "translate-y-[-100%]" : "translate-y-0"
        } bg-[#FF6C37]`}
      ></div>
      <div
        className={`transition-colors duration-500 absolute z-[2000] top-0 left-0 w-full h-full ${
          isScrolled ? "bg-white text-[#2D2D2D]" : "bg-transparent text-white"
        }`}
      >
        {children}
      </div>
    </>
  );
}

export default AboutPageContainer;