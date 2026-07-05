import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Sri Kalavedika Online Arts Academy",
  description: "Learn about Sri Kalavedika's mission, vision, and founder Mrs. Praveen Mehera. Discover how we preserve Indian cultural heritage through online arts education.",
  keywords: "Sri Kalavedika, about us, founder, Praveen Mehera, online arts academy mission, Indian classical arts education",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
