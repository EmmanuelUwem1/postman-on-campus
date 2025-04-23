
import Events from "@/components/Events";
import EventCard from "@/components/eventCard";
import Link from "next/link";
import PageTransitionAnimation from "@/components/pageTransitionAnimation";
import Image from "next/image";

function EventPage() {
  const headEvent = Events[0];
  return (
    <PageTransitionAnimation type="slideLeft">
      <section className="flex flex-col justify-start items-center mx-4 md:mx-24 my-14">
        <div className="flex flex-col md:flex-row gap-6 py-8 border-b border-[#E9ECEF] w-full">
          <span className="relative bg-[#FF6C37] rounded-[7px] h-72 w-full md:w-1/2">
            <Image
              src={headEvent.image}
              alt={headEvent.title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              // className="rounded-[7px]"
            />
          </span>
          <div className="flex flex-col justify-center items-start gap-6 w-full md:w-[65%]">
            <h1 className="font-semibold text-3xl md:text-6xl text-[#2D2D2D]">
              {headEvent.title}
            </h1>
            <p className="text-[#757575] text-lg md:text-2xl font-medium flex justify-between w-full gap-2 my-2">
              <span>{headEvent.date}</span>
              <span>{headEvent.time}</span>
            </p>
            <Link
              href={"/"}
              className="bg-[#FF6C37] text-[#F8F8F8] font-semibold text-base px-6 py-3 rounded-lg flex w-full items-center justify-center"
            >
              Register Now
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex-wrap lg:flex gap-4 items-center justify-center w-full my-8">
          {Events.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              image={event.image}
              date={event.date}
              time={event.time}
              description={event.description}
              platform={event.platform}
              platformLink={event.platformLink}
              showDescription={false}
            />
          ))}
        </div>
      </section>
    </PageTransitionAnimation>
  );
}

export default EventPage;