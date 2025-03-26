
import Image from "next/image";
import Link from "next/link";
import PageTransitionAnimation from "@/components/pageTransitionAnimation";

function Contactpage() {
  return (
    <PageTransitionAnimation type="fadeIn">
    <section
   
      className="flex flex-col justify-start items-center mx-4 md:mx-24 my-14"
    >
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="flex flex-col justify-start items-start w-full md:w-2/5">
          <h2 className="font-medium text-xl md:text-2xl text-[#FF6C37]">
            Contact Us
          </h2>
          <h1 className="font-extrabold text-3xl md:text-5xl text-[#000000]">
            Choose the Best Way to Connect with Us
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full md:w-3/5">
          <span className="border border-[#FF6C37] rounded-[7px] flex flex-col justify-center items-start p-3 h-20 bg-[#FFE2D5] w-full md:w-auto">
            <h2 className="text-[#2D2D2D] font-semibold text-xl md:text-2xl">
              Connect with campus ambassador
            </h2>
            <p className="text-[#2D2D2D] font-medium text-base">
              Connect with your local Postman Campus Ambassador for on-campus
              support.
            </p>
          </span>
          <span className="border border-[#FF6C37] rounded-[7px] flex flex-col justify-center items-start p-3 h-20 bg-[#FFE2D5] w-full md:w-auto">
            <h2 className="text-[#2D2D2D] font-semibold text-xl md:text-2xl">
              Social Media
            </h2>
            <p className="text-[#2D2D2D] font-medium text-base">
              Follow and DM us on
            </p>
            <div className="flex justify-start items-center text-[#2D2D2D] font-semibold text-base gap-2">
              <Link href="/" className="text-[#FF6C37]">
                Instagram
              </Link>
              |
              <Link href="/" className="text-[#FF6C37]">
                GitHub
              </Link>
              |
              <Link href="/" className="text-[#FF6C37]">
                LinkedIn
              </Link>
              |
              <Link href="/" className="text-[#FF6C37]">
                Twitter
              </Link>
            </div>
          </span>
        </div>
      </div>
      <div className="flex justify-start items-center relative w-full h-full my-8">
        <form
          action=""
          className="flex flex-col gap-6 w-full max-w-3xl bg-white p-8 rounded-[13px] shadow-xl self-start"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
            <div className="flex flex-col w-full">
              <label
                htmlFor="fullName"
                className="font-semibold text-base text-[#2D2D2D]"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                className="border border-[#E9ECEF] rounded-[8px] py-2 px-4 mt-1 w-full focus:border-[#FF6C37]"
                required
              />
              <p className="text-sm text-[#4A4A4A] mt-1">
                Please provide your first and last name
              </p>
            </div>

            <div className="flex flex-col w-full">
              <label
                htmlFor="email"
                className="font-semibold text-base text-[#2D2D2D]"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="border border-[#E9ECEF] rounded-[8px] py-2 px-4 mt-1 w-full focus:border-[#FF6C37]"
                required
              />
              <p className="text-sm text-[#4A4A4A] mt-1">
                We will use this to respond to your suggestion or inquiry.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="subject"
              className="font-semibold text-base text-[#2D2D2D]"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter the summary of your question or topic"
              className="border border-[#E9ECEF] rounded-[8px] py-2 px-4 mt-1 w-full focus:border-[#FF6C37]"
              required
            />
            <p className="text-sm text-[#4A4A4A] mt-1">
              Briefly summarize your question or topic
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
            <div className="flex flex-col w-full">
              <label
                htmlFor="category"
                className="font-semibold text-base text-[#2D2D2D]"
              >
                Category <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                name="category"
                className="border border-[#E9ECEF] rounded-[8px] p-2 mt-1 w-full md:w-80 shadow-sm focus:border-[#FF6C37]"
                required
              >
                <option value="">--What bests describes your inquiry--</option>
                <option value="general">General Inquiry</option>
                <option value="events">Campus Events</option>
                <option value="support">Technical Support</option>
                <option value="ambassador">Campus Ambassador Program</option>
                <option value="feedback">Feedback/Suggestions</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="campus"
                className="font-semibold text-base text-[#2D2D2D]"
              >
                Campus <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="campus"
                name="campus"
                placeholder=""
                className="border border-[#E9ECEF] rounded-[8px] py-2 px-4 mt-1 w-full focus:border-[#FF6C37]"
                required
              />
              <p className="text-sm text-[#4A4A4A] mt-1">
                Please provide your campus name
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="font-semibold text-base text-[#2D2D2D]"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              title="message"
              placeholder="Type your message here..."
              rows={4}
              className="border border-[#E9ECEF] rounded-[8px] p-2 mt-1 w-full focus:border-[#FF6C37]"
              required
            ></textarea>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="agreement"
              name="agreement"
              className="mt-1 accent-[#FF6C37]"
              required
            />
            <label htmlFor="agreement" className="ml-2 text-sm">
              I agree to receive responses from Postman Student Community -
              UNIUYO
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#FF6C37] text-white font-semibold text-base px-6 py-3 rounded-lg mt-4"
          >
            Send Message
          </button>
        </form>
        <span className="absolute right-0 -z-10 w-[40%]">
          <Image
            alt=""
            src={"/Image.svg"}
            height={433}
            width={560}
            objectFit="contain"
            objectPosition="center"
            layout="responsive"
          ></Image>
        </span>
      </div>
      </section>
      </PageTransitionAnimation>
  );
}

export default Contactpage;