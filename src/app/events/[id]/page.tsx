"use client"
import Events from "@/components/Events";
import Link from "next/link";
import EventCard from "@/components/eventCard";


interface EventDetailsProps {
  params: {
    id: string;
  };
}

const EventDetails = ({ params }: EventDetailsProps) => {
  const id = params.id;

  const event = Events.find((event) => event.id === Number(id));

  if (!event) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <p className="my-14 text-xl">Event not found</p>
      </div>
    );
  }

  return (
    <section className="flex flex-col justify-center items-center mx-4 md:mx-12 mt-10">
      <div className="flex flex-row justify-between items-center w-full md:w-[80%] mb-10 gap-4">
        <span className="text-[#000000] font-semibold text-lg md:text-2xl w-fit">
          <Link href={"/"} className="hover:underline">
            Home
          </Link>
          <Link href={"/events"} className="hover:underline">
            /Events
          </Link>
          <Link href={`/events/${id}`} className="hover:underline">
            /{id}
          </Link>
        </span>
        <Link
          href={"/events"}
          className="bg-[#000000] text-[#F8F8F8] font-semibold text-base md:text-2xl px-6 py-3 rounded-lg flex w-fit items-center justify-center"
        >
          Go Back
        </Link>
      </div>
      <EventCard
        id={event.id}
        title={event.title}
        date={event.date}
        description={event.description}
        platform={event.platform}
        platformLink={event.platformLink}
        time={event.time}
        showDescription={true}
      />
    </section>
  );
};


};

export default EventDetails;
