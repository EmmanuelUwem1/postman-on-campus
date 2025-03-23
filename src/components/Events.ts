
export interface EventCardProps {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  platform: string;
  platformLink: string;
  showDescription?: boolean; // Optional prop
  image?: string;
}
export const Events = [
  {
    id: 1,
    title: "Build the Future: Postman Campus Hackathon",
    date: "Nov 10-12, 2025",
    time: "3:00 PM - 5:00 PM",
    description:
      "Calling all innovators! Join our 48-hour hackathon to build creative solutions using APIs. Compete for prizes, network with industry professionals, and showcase your skills. No prior experience required—just bring your ideas!",
    platform: "Zoom",
    platformLink: "https://zoom.us/j/1234567890",
  },
  {
    id: 2,
    title: "API Basics: Getting Started with Postman",
    date: "October 15, 2025",
    time: "3:00 PM - 5:00 PM",
    description: "An introductory session on using Postman for API testing.",
    platform: "Google Meet",
    platformLink: "https://meet.google.com/abc-defg-hij",
  },
  {
    id: 3,
    title: "Integrating Postman into Your Curriculum",
    date: "October 20, 2025",
    time: "2:00 PM - 3:30 PM",
    description:
      "Deep dive into advanced API testing techniques using Postman.",
    platform: "Zoom",
    platformLink: "https://zoom.us/j/0987654321",
  },
  {
    id: 4,
    title: "API Integration with GitHub",
    date: "2025-05-10",
    time: "1:00 PM",
    description:
      "Learn how to integrate your APIs with GitHub for seamless collaboration.",
    platform: "Google Meet",
    platformLink: "https://meet.google.com/xyz-uvw-123",
  },
  {
    id: 5,
    title: "Postman Automation",
    date: "2025-05-15",
    time: "3:00 PM",
    description: "Automate your API testing workflows with Postman.",
    platform: "Zoom",
    platformLink: "https://zoom.us/j/1122334455",
  },
];

export default Events;