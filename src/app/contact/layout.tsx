import { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Postman Campus - Contact",
  description:
    "Get in touch with Postman Campus. Whether you have questions, need support, or want to collaborate, our team is here to help. Connect with us through various channels and join our community of developers, educators, and students.",
};

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ContactLayout;
