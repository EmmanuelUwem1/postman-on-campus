import { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Postman Campus - Events",
  description:
    "Stay updated with the latest events at Postman Campus. Join our community of developers, educators, and students in various events, workshops, and webinars to enhance your skills and network with like-minded individuals.",
};

const EventsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default EventsLayout;
