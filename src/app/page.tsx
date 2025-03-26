
import Image from "next/image";
import Link from "next/link";
import EventCard from "@/components/eventCard";
import Events from "@/components/Events";
import BePart from "@/components/bePart";
import BenefitsCard from "@/components/benefitsCard";
import Footer from "@/components/footer";
import HeroAnimation from "@/components/HeroAnimation";
import PageTransitionAnimation from "@/components/pageTransitionAnimation";
export default function Home() {
  const featuresData = [
    {
      title: "API Development",
      description: "Design, test, debug APIs effortlessly and efficiently.",
    },
    {
      title: "Team Collaboration",
      description: "Share collections, workflows, and environments seamlessly.",
    },
    {
      title: "Automated Testing",
      description: "Automate API testing to save valuable time.",
    },
    {
      title: "Integration",
      description: "Connect Postman with GitHub, Jenkins, and more.",
    },
    {
      title: "Learning Resources",
      description: "Access free courses, webinars, and skill-building docs.",
    },
  ];
  return (
    <PageTransitionAnimation type="fadeIn">
      <section className="flex flex-col w-full py-20">
        <div className="flex flex-col items-center justify-center gap-4">
          <HeroAnimation />
          <div className="font-normal text-[#2D2D2D] text-xl md:text-2xl lg:text-3xl w-[90%] md:w-[75%] text-center">
            Join the global community of developers, educators, and students
            using Postman to streamline API development, testing, and
            collaboration.
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href={"https://chat.whatsapp.com/CpY15kWfa6N99YLfu7GObm"}
              className=" font-semibold text-lg md:text-2xl cta-button-pri px-6 py-3 rounded-lg flex w-fit items-center justify-center"
            >
              Join the community
            </Link>

            <Link
              href={"/resources"}
              className="bg-[#FF6C37] cta-button-sec text-[#F8F8F8] font-semibold text-lg md:text-2xl px-6 py-3 rounded-lg flex w-fit items-center justify-center "
            >
              Explore relevant resources
            </Link>
          </div>
          <div className="relative flex w-full md:w-[70%] justify-center items-center">
            <Image
              alt="hero illustration"
              src={"/instructor.svg"}
              objectFit="contain"
              objectPosition="center"
              layout="responsive"
              width={946.723388671875}
              height={515}
            ></Image>
            <span className="absolute top-0 right-0 flex items-center justify-center h-[20%] w-[20%]">
              <Image
                alt=""
                src={"/Vector 9.svg"}
                height={109.06497192382812}
                width={180.13819885253906}
                layout="responsive"
                objectFit="contain"
                objectPosition="center"
              ></Image>
            </span>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center mx-4 md:mx-24 my-14">
        <h2 className="text-[#FF6C37] text-xl md:text-2xl font-bold self-start">
          Why The Postman Student Community ?
        </h2>
        <div className="flex flex-wrap w-full">
          <div className="flex flex-col w-full md:w-1/2 gap-4 mt-6">
            <h3 className="text-[#000000] text-2xl md:text-4xl font-normal">
              Why Postman is the Ultimate Tool for Campus Innovators
            </h3>
            <div className="flex flex-col gap-4 mt-3 w-full">
              <BenefitsCard
                title="Collaborate Seamlessly:"
                description="Work with peers and educators on API projects in real-time."
              />
              <BenefitsCard
                title="Learn by Doing:"
                description="Learn from success stories of students and educators using Postman to achieve their goals."
              />
              <BenefitsCard
                title="Build Real-World Skills:"
                description="Gain hands-on experience with the tools used by top tech companies worldwide."
              />
            </div>
          </div>
          <div className="relative flex w-full md:w-1/2 items-center justify-center mt-6 md:mt-0">
            <Image
              alt=""
              src={"postman-toolbox-api-platform-illustration (1).svg"}
              height={468}
              width={624}
              objectFit="contain"
              objectPosition="center"
              layout="responsive"
            ></Image>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center mx-4 md:mx-12 mt-18">
        {/* <h2 className="text-[#FF6C37] text-xl md:text-2xl font-bold">
          Features for Campus Users
        </h2> */}
        <h3 className="text-[#000000] text-2xl md:text-4xl font-normal py-3">
          Everything You Need to Succeed with APIs
        </h3>
        <div className="flex flex-wrap gap-4 items-center justify-center w-full   my-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col w-full sm:w-1/3 lg:w-56 gap-2 items-center justify-start bg-[#FFE2D5] rounded-2xl pt-6 pb-3 px-4 border-[#FF6C37] border h-40"
            >
              <h4 className="text-[#000000] text-xl md:text-2xl font-semibold">
                {feature.title}
              </h4>
              <p className="text-[#2D2D2D] text-lg md:text-lg text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col justify-center items-center mx-4 md:mx-12 mt-18">
        <h2 className="text-[#FF6C37] text-xl md:text-2xl font-bold">
          Our Events
        </h2>
        <h3 className="text-[#000000] text-2xl md:text-4xl font-normal py-3">
          Grow Your Skills, Expand Your Network, and Have Fun!
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex-wrap lg:flex gap-4 items-center justify-center w-full my-8">
          {Events.slice(0, 3).map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              image={event.image}
              time={event.time}
              description={event.description}
              platform={event.platform}
              platformLink={event.platformLink}
              showDescription={false}
            />
          ))}
        </div>
        <div className="flex gap-4 items-center justify-center my-8">
          <Link
            href="/events"
            className="bg-[#141414] cta-button-pri rounded-full py-4 px-20 text-[#FFFFFF] text-base font-semibold"
          >
            See More
          </Link>
        </div>
      </section>

      <BePart showSecondaryCTA={true} />
      <Footer />
    </PageTransitionAnimation>
  );
}
