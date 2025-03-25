import { Metadata } from "next";
import Footer from "@/components/footer";
import AboutHeader from "./components/aboutHeader";
import AboutPageContainer from "./components/AboutPageContainer";

export const metadata: Metadata = {
  title: "About Postman - Postman Student Community",
  description:
    "Discover Postman Campus, a global community of developers, educators, and students dedicated to streamlining API development, testing, and collaboration. Learn about our mission, values, and the resources we offer to empower the next generation of API innovators.",
};

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  

  return (
      <AboutPageContainer>
          <AboutHeader></AboutHeader>
      <main className="pt-20 relative">{children}</main>
      <Footer />
    </AboutPageContainer>
  );
};

export default AboutLayout;