import type { Metadata } from "next";
import { Darker_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";


const darkerGrotesque = Darker_Grotesque({
  variable: "--font-darker-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Postman Student Community, UNIUYO",
  description:
    "Join the global community of developers, educators, and students using Postman to streamline API development, testing, and collaboration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <head>
        <meta
          name="keywords"
          content="API, tech, campus, community, events, rewards, software, fullstack, backend, technology, development, testing, collaboration, education, students, developers, innovation, tools, resources, knowledge, support"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${darkerGrotesque.variable} antialiased`}>
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
      
      </body>
    </html>
  );
}
