"use client";
import { useEffect, useState } from "react";
import BenefitsCard from "@/components/benefitsCard";
import BePart from "@/components/bePart";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Aboutpage() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="flex flex-col justify-center items-center mx-4 md:mx-24 my-14">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center w-full">
          <div
            className={`flex w-full md:w-1/2 flex-col items-start justify-center pl-4 h-fit border-l-4 ${
              isScrolled ? "border-[#FF6C37]" : "border-white"
            }`}
          >
            <h2 className="font-extrabold text-3xl md:text-4xl lg:text-6xl">
              About Postman
            </h2>
            <h3 className="font-normal text-4xl md:text-6xl lg:text-7xl pt-3 leading-20">
              Empowering the Next Generation of API Innovators
            </h3>
          </div>
          <div className="relative flex items-center justify-center w-full md:w-1/2">
            <Image
              alt=""
              src={"/blocks-light 1.svg"}
              width={562}
              height={397}
              objectFit="contain"
              objectPosition="center"
              layout="responsive"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col md:flex-row self-center justify-center items-center gap-10 md:gap-20 w-full md:w-[80%] my-12">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold w-full md:w-[40%]">
            What Postman Is
          </h1>
          <div className="flex flex-col justify-start items-start w-full md:w-[60%]">
            <h2 className="font-bold text-2xl md:text-3xl">
              Postman is more than just a tool—it’s a global community of
              developers, educators, and students shaping the future of APIs.
            </h2>
            <p className="font-medium text-lg md:text-xl">
              Postman, there is a believe in the power of collaboration and
              innovation. Our mission is to simplify API development and make it
              accessible to everyone, from beginners to experts. Through the Postman 
              Student Expert Program, they empower students and educators
              with the tools, resources, and knowledge they need to succeed in
              the world of APIs and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-center gap-6 mx-4 md:mx-24 my-14">
        <div className="flex flex-col justify-start items-start gap-4 w-full md:w-1/2">
          <BenefitsCard
            title="Collaboration: "
            description="Work with peers and educators on API projects in real-time."
          />
          <BenefitsCard
            title="Inspiration:"
            description=" Learn from success stories of students and educators using Postman to achieve their goals."
          />
          <BenefitsCard
            title="Support:  "
            description="Get help from the Postman team and the broader Postman community whenever you need it."
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full md:w-1/2 gap-2">
          <h3 className="font-medium text-2xl md:text-4xl"> Our Community</h3>
          <h3 className="font-extrabold text-4xl md:text-6xl">
            Join a Global Network of Learners and Innovators
          </h3>
        
          <Link
            href={"/"}
            className="bg-[#000000] cta-button-pri text-[#F8F8F8] font-semibold text-lg md:text-2xl px-6 py-3 rounded-lg flex w-fit items-center justify-center"
          >
            Join our WhatsApp Community
          </Link>
        </div>
      </section>

      <section className="flex-col px-4 flex justify-start items-center mx-auto w-full md:w-[80%] self-center">
        <h3></h3>
        <h2></h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-4">
          <div className="relative w-full md:w-1/2">
            <Image
              alt=""
              src={"/Side image.svg"}
              width={513.0615844726562}
              height={312.54376220703125}
              objectFit="contain"
              objectPosition="center"
              layout="responsive"
            ></Image>
          </div>
          <span className="text-lg md:text-2xl font-semibold w-full md:w-1/2">
            Postman is committed to helping students and educators thrive in the
            fast-evolving world of technology. By providing free tools,
            resources, and a supportive community, we aim to:
            <ul className="list-disc pl-8">
              <li>Build confidence in API development and testing.</li>
              <li>Encourage creativity and innovation.</li>
              <li>Bridge the gap between academic learning and industry
                demands.</li>
            </ul>
          </span>
        </div>
      </section>

      <BePart showSecondaryCTA={false} />
    </motion.div>
  );
}

export default Aboutpage;