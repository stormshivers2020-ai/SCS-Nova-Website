import {
  ApparelSection,
  BCaurisHero,
  BuildStatusSection,
  CompanyContactSection,
  Hero,
  Navbar,
  PhilosophySection,
  SelectedWorkSection,
  ServicesSection,
  TheFutureSection,
  TheSystemSection,
  WhatThisIsSection,
} from "@/components/site";

export default function Home() {
  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden bg-black">
      <div className="cauris-ambient" aria-hidden>
        <div className="cauris-grid" />
        <div className="cauris-starfield animate-twinkle" />
        <div className="cauris-vignette" />
        <div className="cauris-grain" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <WhatThisIsSection />
        <BCaurisHero />
        <BuildStatusSection />
        <ApparelSection />
        <SelectedWorkSection />
        <ServicesSection />
        <TheSystemSection />
        <PhilosophySection />
        <TheFutureSection />
        <CompanyContactSection />
      </main>
    </div>
  );
}
