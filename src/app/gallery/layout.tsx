import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Sri Kalavedika Online Arts Academy",
  description: "Explore our student performances, class moments, and success stories from Sri Kalavedika Online Arts Academy.",
  keywords: "gallery, student performances, success stories, photos, videos, online academy",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
