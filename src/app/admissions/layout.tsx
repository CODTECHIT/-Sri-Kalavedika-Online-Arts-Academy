import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions | Sri Kalavedika Online Arts Academy",
  description: "Enroll for online classes in Indian classical music, dance, chess & more. Book a free demo class today. Flexible timings for students worldwide.",
  keywords: "online admissions, free demo class, enroll now, music classes, dance classes, chess coaching, Vedic Maths, flexible timings",
};

export default function AdmissionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
