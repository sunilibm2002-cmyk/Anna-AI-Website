"use client";

import { motion } from "framer-motion";
import { About } from "@/components/sections/About";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CtaSection } from "@/components/sections/CtaSection";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { Products } from "@/components/sections/Products";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
      <Hero />
      <About />
      <Services />
      <Products />
      <Industries />
      <Features />
      <CaseStudies />
      <Testimonials />
      <CtaSection />
    </motion.div>
  );
}


