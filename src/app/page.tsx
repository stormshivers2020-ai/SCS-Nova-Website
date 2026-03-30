import {
  ApparelSection,
  BCaurisHero,
  BuildStatusSection,
  CompanyContactSection,
  Hero,
  PhilosophySection,
  RangeOSSection,
  SelectedWorkSection,
  ServicesSection,
  TheFutureSection,
  TheSystemSection,
  WhatThisIsSection,
  WhatWeDoSection,
} from "@/components/site";

export default function Home() {
  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden">
      <div className="cauris-ambient" aria-hidden>
        <div className="cauris-grid" />
        <div className="cauris-starfield animate-twinkle" />
        <div className="cauris-vignette" />
        <div className="cauris-grain" />
      </div>

      <div>
        <Hero />
        <WhatWeDoSection />
        <WhatThisIsSection />
        <BCaurisHero />
        <BuildStatusSection />
        <ApparelSection />
        <SelectedWorkSection />
        <ServicesSection />
        <RangeOSSection />
        <TheSystemSection />
        <PhilosophySection />
        <TheFutureSection />
        <CompanyContactSection />
      </div>
    </div>
  );
}
