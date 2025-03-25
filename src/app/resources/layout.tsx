import { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Resources - Postman Student Community",
  description:
    "Explore a wealth of resources at Postman Campus. Access tutorials, guides, and tools designed to help developers, educators, and students enhance their API development skills and collaborate effectively.",
};

const ResourcesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ResourcesLayout;