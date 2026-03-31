import {
  BuildStatusSection,
  CompanyContactSection,
  DemosPreviewSection,
  Hero,
  ProductsOverviewSection,
  SelectedWorkSection,
  ServicesSection,
  TheFutureSection,
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
        <ProductsOverviewSection />
        <SelectedWorkSection />
        <BuildStatusSection />
        <TheFutureSection />
        <ServicesSection />
        <DemosPreviewSection />
        <CompanyContactSection />
      </div>
    </div>
  );
}
