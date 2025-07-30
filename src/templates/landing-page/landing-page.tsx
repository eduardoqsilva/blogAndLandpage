import {
  CustomerStorySection,
  FeatureSection,
  HeroSection,
  SupportSection,
} from "@/templates/landing-page/sections";

export function LandingPage() {
  return (
    <>
      <article className="flex flex-col md:gap-20 gap-10">
        <HeroSection />
        <FeatureSection />
        <SupportSection />
        <CustomerStorySection />
      </article>
    </>
  );
}
