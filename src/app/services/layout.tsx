import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses & Programs | Sri Kalavedika Online Arts Academy",
  description: "Explore our expert-led online courses in Indian classical music, dance, fine arts, chess, Vedic Maths & more. Find the perfect program for all ages.",
  keywords: "online music courses, online dance classes, Carnatic vocal lessons, Hindustani vocal, Bharatanatyam classes, Kathak lessons, Kuchipudi, flute, guitar, keyboard, mridangam, violin, chess coaching, Vedic Maths, drawing, painting, theatre",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
