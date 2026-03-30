import {
  LightDemoHero,
  LightDemoHowItWorks,
  LightDemoOurSystems,
  LightDemoBenefitsTestimonial,
  LightDemoCtaContact,
  LightDemoServicesCards,
  LightDemoWhyNova,
} from "@/components/light-demo";

export default function LightDemoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LightDemoHero />

      <LightDemoWhyNova />

      <LightDemoServicesCards />

      <LightDemoHowItWorks />

      <LightDemoOurSystems />

      <LightDemoBenefitsTestimonial />

      <LightDemoCtaContact />
    </div>
  );
}
