import { FeatureSection } from "@/templates/sections/feature-section";
import { HeroSection } from "@/templates/sections/hero-section";
import { CustomerStorySection } from "@/templates/sections/customer-story-section";
import { SupportSection } from "@/templates/sections/support-section";
import { CallToAction } from "@/templates/sections/call-to-action";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
        <SupportSection />
        <CustomerStorySection />
        <CallToAction />
      </article>
    </>
  );
}
