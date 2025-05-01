import { EventCardProps } from "./Events";
import Link from "next/link";
import Image from "next/image";

function EventCard({
  id,
  title,
  date,
  time,
  image,
  description,
  platform,
  showDescription,
}: EventCardProps) {
  return (
    <>
      {showDescription ? (
        <div className="flex flex-col md:flex-row justify-start items-center px-4 md:px-14 py-8 border border-[#757575] rounded-[24px] gap-6 text-[#000000] w-full md:w-[70%] mb-8">
          <div className="flex flex-col items-start justify-start w-full">
            <span className="font-semibold text-3xl md:text-6xl text-[#2D2D2D] w-full md:w-[70%]">
              {title}
            </span>
            <p className="text-[#757575] text-lg md:text-2xl font-medium flex justify-start w-full gap-2 my-2">
              <span>{date}</span>|<span>{time}</span>
            </p>
            <div className="flex justify-start items-center gap-2">
              <Link
                href="/"
                className="relative flex items-center justify-center"
              >
                <Image
                  alt="Twitter"
                  src="/X (twitter holder).svg"
                  height={32}
                  width={32}
                ></Image>
              </Link>
              <Link
                href="/"
                className="relative flex items-center justify-center"
              >
                <Image
                  alt="FaceBook"
                  src="/facebook.svg"
                  height={32}
                  width={32}
                ></Image>
              </Link>
              <Link
                href="/"
                className="relative flex items-center justify-center"
              >
                <Image
                  alt="WhatsApp"
                  src="/whatsapp.svg"
                  height={32}
                  width={32}
                ></Image>
              </Link>
              <Link
                href="/"
                className="relative flex items-center justify-center"
              >
                <Image
                  alt="Copy Link"
                  src="/link.svg"
                  height={32}
                  width={32}
                ></Image>
              </Link>
            </div>
            <div className="relative flex items-center justify-center w-full h-60 my-4 overflow-hidden">
              {image && (
                <Image
                  src={image}
                  alt={title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  // className="rounded-[7px]"
                />
              )}
            </div>
            <h2 className="font-extrabold text-2xl md:text-4xl">Description</h2>
            <p className="my-4 text-left text-lg md:text-2xl font-semibold">
              {description}
            </p>
            <Link
              href={"/"}
              className="bg-[#FF6C37] text-[#F8F8F8] font-semibold text-base px-6 py-3 rounded-lg flex w-full items-center justify-center"
            >
              Register Now
            </Link>
          </div>
        </div>
      ) : (
        <Link
          href={`/events/${id}`}
          className="flex flex-col justify-start items-center h-96 p-4 rounded-xl hover:shadow-lg transition-all relative overflow-hidden"
        >
          <span className="relative w-full h-44 bg-[#FF6C37] rounded-[7px]">
            {image && (
              <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-[7px]"
              />
            )}
          </span>
          <h2 className="text-2xl font-bold py-3 self-start">{title}</h2>
          <p className="text-[#757575] text-base font-semibold flex justify-between w-full gap-2">
            <span className="">{date}</span>
            <span>{time}</span>
          </p>
          <span className="absolute top-4 right-4">
            {platform === "Google Meet" && (
              <Image
                src="/Google Meet.svg"
                alt="Google Meet"
                height={48}
                width={48}
              />
            )}
            {platform === "Zoom" && (
              <Image src="/Zoom.svg" alt="Zoom" height={48} width={48} />
            )}
          </span>
          <span className="bg-[#FF6C37] text-[#F8F8F8] font-semibold text-base px-6 py-3 mt-3 rounded-lg flex w-full items-center justify-center">
            Register Now
          </span>
        </Link>
      )}
    </>
  );
}

export default EventCard;