import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Reach out to CAC to discuss your next project, explore partnerships, or learn more about our divisions.",
};

export default function ContactPage() {
  return <ContactClient />;
}
