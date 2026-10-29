import type { Metadata } from "next";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SectionHeading from "@/components/SectionHeading";
import { experiencePage } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Experience | Rida Malik",
  description: experiencePage.intro,
};

export default function ExperiencePage() {
  return (
    <main id="main" className="container-x py-10 md:py-14">
      <SectionHeading id="experience-page-title" icon="briefcase" color="lavender" as="h1">
        {experiencePage.title}
      </SectionHeading>
      <p className="-mt-3 mb-10 max-w-2xl text-base leading-relaxed text-muted">
        {experiencePage.intro}
      </p>
      <ExperienceTimeline />
    </main>
  );
}
