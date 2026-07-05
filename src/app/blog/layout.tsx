import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Sri Kalavedika Online Arts Academy",
  description: "Insights, tips, and articles on Indian classical arts, music, dance, chess, Vedic Maths, and children's development.",
  keywords: "arts blog, music tips, dance articles, chess strategies, Vedic Maths tips, child development, online learning",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
