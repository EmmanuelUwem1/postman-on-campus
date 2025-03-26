"use client"
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

function HeroAnimation() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="font-normal text-4xl md:text-6xl lg:text-8xl text-[#4A4A4A] text-center">
        <Typewriter
          options={{
            strings: [
              "Empowering Campus Life with",
              "Creating Seamless Integrations with",
              "Fostering API Education with",
              "Driving API Excellence with",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="relative flex items-center justify-center gap-2">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="text-[#FF6C37] text-4xl md:text-6xl lg:text-8xl font-semibold overflow-hidden"
        >
          <Link href={"https://postman.com"}>Postman</Link>
        </motion.span>
      </div>
    </div>
  );
}

export default HeroAnimation