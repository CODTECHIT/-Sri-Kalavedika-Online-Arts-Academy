import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Sri Kalavedika Online Arts Academy",
  description: "Get in touch with Sri Kalavedika for inquiries about courses, admissions, or free demos. Reach us via WhatsApp, email or phone.",
  keywords: "contact us, Sri Kalavedika, online arts academy, WhatsApp, email, phone number, Delhi, India",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
