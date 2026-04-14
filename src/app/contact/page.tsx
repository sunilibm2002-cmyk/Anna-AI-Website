import { Contact } from "@/components/sections/Contact";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Anna AI Automation.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Contact />
    </main>
  );
}

