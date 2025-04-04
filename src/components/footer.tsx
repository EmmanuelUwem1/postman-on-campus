import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#121212] px-4 md:px-24 flex w-full flex-col items-start justify-start pt-14">
      <div className="flex flex-col md:flex-row justify-between gap-4 w-full items-start border-b-2 border-b-[#E9ECEF] pb-12">
        <Link href={"/"} className="relative w-80 h-20" >
          <Image
            src="/psc logo white.png"
            alt="Postman Logo"
           
            objectFit="contain"
            objectPosition="left"
            layout="fill"
          />
        </Link>
        <div className="flex flex-col md:flex-row justify-around items-start gap-4 w-full">
          <div className="flex flex-col gap-4 items-start justify-start">
            <Link
              href={"https://postman.com"}
              className="text-[#FFFFFF] font-medium text-lg hover:opacity-70"
            >
              About Postman
            </Link>
            <Link
              href={"/resources"}
              className="text-[#FFFFFF] font-medium text-lg hover:opacity-70"
            >
              Campus Resources
            </Link>
            {/* <Link
              href={"/about"}
              className="text-[#FFFFFF] font-medium text-lg hover:opacity-70"
            >
              Documentation
            </Link> */}
            <Link
              href={"/contact"}
              className="text-[#FFFFFF] font-medium text-lg hover:opacity-70"
            >
              Support
            </Link>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start">
            <h3 className="font-extrabold text-2xl md:text-4xl text-[#FFFFFF]">
              Socials
            </h3>
            <div className="flex gap-3">
              <Link
                href={"https://www.linkedin.com/showcase/pscuniuyo"}
                className="relative"
              >
                <Image
                  src={"/linkedin.svg"}
                  alt="LinkedIn"
                  height={32}
                  width={32}
                ></Image>
              </Link>
              {/* <Link href={"/"} className="relative">
                <Image
                  src={"/instagram.svg"}
                  alt="Instagram"
                  height={32}
                  width={32}
                ></Image>
              </Link> */}
              {/* <Link href={"/"} className="relative">
                <Image
                  src={"/github.svg"}
                  alt="GitHub"
                  height={32}
                  width={32}
                ></Image>
              </Link> */}
              <Link href={"https://x.com/pscuniuyo"} className="relative">
                <Image
                  src={"/Subtract.svg"}
                  alt="Twitter"
                  height={32}
                  width={32}
                ></Image>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start">
            <h3 className="font-extrabold text-2xl md:text-4xl text-[#FFFFFF]">
              Have questions?
            </h3>
            <span className="text-[#FFFFFF] font-medium text-lg">
              Reach out to us at{" "}
              <a
                href="mailto:hello@pscuniuyo.org"
                className="text-[#FFFFFF] font-medium text-lg hover:opacity-70"
              >
                hello@pscuniuyo.org
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center py-5 w-full">
        <Link
          href={"https://www.postman.com/downloads/"}
          className="text-[#FF6C37] font-medium text-lg md:text-2xl"
        >
          Download Postman
        </Link>
        <p className="font-medium text-[#FFFFFF] text-base mt-4 md:mt-0">
          © 2025 PostmanOnCampus-Uniuyo
        </p>
      </div>
    </footer>
  );
}

export default Footer;