import Link from "next/link";

interface BePartProps {
  showSecondaryCTA: boolean;
}

const BePart: React.FC<BePartProps> = ({ showSecondaryCTA }) => {
  return (
    <section className="flex flex-col justify-center items-center mx-4 md:mx-20 mt-18 rounded-[18px] border border-[#000000] p-4 sm:p-8 mb-6">
      <h2 className="text-[#4A4A4A] text-3xl md:text-4xl lg:text-6xl font-bold w-[90%] md:w-[80%] lg:w-[60%] text-center mb-4">
        Be Part of the Postman Student Expert Community
      </h2>
      <p className="text-[#2D2D2D] text-xl md:text-2xl font-normal w-[90%] md:w-[80%] lg:w-[60%] text-center mb-6">
        Whether you’re a student, educator, or campus leader, there’s a place
        for you in the Postman on Campus community. Together, we can shape the
        future of APIs and technology.
      </p>
      <div
        className={`flex ${
          !showSecondaryCTA ? "flex-col-reverse" : "flex-row"
        } flex-wrap justify-center items-center max-sm:gap-2 gap-4`}
      >
        <Link
          href={"/resources"}
          className="bg-[#FF6C37] cta-button-sec text-[#F8F8F8] font-semibold text-lg md:text-2xl px-6 py-3 rounded-lg flex w-full sm:w-fit items-center justify-center"
        >
          Explore campus resources
        </Link>

        <Link
          href={"https://chat.whatsapp.com/CpY15kWfa6N99YLfu7GObm"}
          className="bg-[#000000] cta-button-pri text-[#F8F8F8] font-semibold text-lg md:text-2xl px-6 py-3 rounded-lg flex w-full sm:w-fit items-center justify-center"
        >
          Join our WhatsApp Community
        </Link>
      </div>
    </section>
  );
};

export default BePart;