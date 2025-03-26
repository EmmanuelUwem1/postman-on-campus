import PageTransitionAnimation from "@/components/pageTransitionAnimation";
import Image from "next/image";
import Link from "next/link";


function ResourcesPage() {
  return (
    <PageTransitionAnimation type="fadeIn">
      <section className="flex flex-col md:flex-row justify-start gap-8 items-center mx-4 md:mx-24 my-12">
        <div className="flex flex-col justify-start items-start w-full md:w-1/2">
          <h1 className="text-[#000000] text-3xl md:text-4xl font-extrabold w-full md:w-[90%]">
            Resources Coming Soon—Stay Tuned!
          </h1>
          <h2 className="text-[#757575] text-xl md:text-2xl font-medium pt-2 pb-6 border-b-2 border-[#E9ECEF] w-full">
            Exciting Resources Are on the Way!
          </h2>
          <p className="text-[#757575] text-lg md:text-2xl font-medium py-2">
            We’re currently curating a collection of free, high-quality
            resources to help you learn, build, and innovate with APIs. Whether
            you’re a student, educator, or campus leader, our resources will
            empower you to master API development and collaboration.
          </p>
          <div className="flex flex-col w-full items-start justify-start gap-2">
            <Link
              href={"/"}
              className="bg-[#FF6C37] cta-button-sec text-[#F8F8F8] font-semibold text-lg md:text-2xl px-6 py-3 rounded-lg flex w-full items-center justify-center"
            >
              Explore campus resources
            </Link>
            <Link
              href={"/"}
              className="bg-[#000000] cta-button-pri text-[#F8F8F8] font-semibold text-lg md:text-2xl px-6 py-3 rounded-lg flex w-full items-center justify-center"
            >
              Join our WhatsApp Community
            </Link>
          </div>
        </div>
        <span className="relative w-full md:w-1/2">
          <Image
            alt=""
            src={"/download-postman-canary-illustration.svg"}
            height={420}
            width={560}
            objectFit="contain"
            objectPosition="center"
            layout="responsive"
          ></Image>
        </span>
      </section>
    </PageTransitionAnimation>
  );
}

export default ResourcesPage;