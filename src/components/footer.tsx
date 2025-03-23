import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#121212] px-4 md:px-24 flex w-full flex-col items-start justify-start pt-14">
      <div className="flex flex-col md:flex-row justify-between gap-4 w-full items-start border-b-2 border-b-[#E9ECEF] pb-12">
        <Link href={"/"} className="relative">
          <Image
            src="/Postman-logo-full-white-2021 1.svg"
            alt="Postman Logo"
            width={229}
            height={69}
          />
        </Link>
        <div className="flex flex-col md:flex-row justify-around items-start gap-4 w-full">
          <div className="flex flex-col gap-4 items-start justify-start">
            <Link
              href={"/about"}
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
            <Link
              href={"/about"}
              className="text-[#FFFFFF] font-medium text-lg hover:opacity-70"
            >
              Documentation
            </Link>
            <Link
              href={"/about"}
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
              <Link href={"/"} className="relative">
                <Image
                  src={"/linkedin.svg"}
                  alt="LinkedIn"
                  height={32}
                  width={32}
                ></Image>
              </Link>
              <Link href={"/"} className="relative">
                <Image
                  src={"/instagram.svg"}
                  alt="Instagram"
                  height={32}
                  width={32}
                ></Image>
              </Link>
              <Link href={"/"} className="relative">
                <Image
                  src={"/github.svg"}
                  alt="GitHub"
                  height={32}
                  width={32}
                ></Image>
              </Link>
              <Link href={"/"} className="relative">
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
                href="mailto:campus@postman.com"
                className="text-[#FFFFFF] font-medium text-lg hover:opacity-70"
              >
                campus@postman.com
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center py-5 w-full">
        <Link
          href={"/"}
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