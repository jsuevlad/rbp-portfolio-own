import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { Skills } from "@/components/about/skills";
import { Publics } from "@/components/about/Publics";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "About me, background, and how to get in touch.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-160 px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
        <FadeIn delay={0.5}>
          <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
            <h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
              Hello, I&rsquo;m <span className="border-b border-foreground/30 pb-0.5">Idah Jules.</span>.
            </h1>
            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
              <p>
                I work where <strong className="font-semibold text-foreground">design, technology, and ideas meet.</strong> My journey began in <strong className="font-semibold text-foreground">digital communication,</strong> eventually expanding into <strong className="font-semibold text-foreground">visual design, digital experiences, and creative problem-solving</strong> — bringing together curiosity, experimentation, and technical execution in every project.
              </p>
              <p>
                As my work moved from digital communication into design, I became increasingly interested in <strong className="font-semibold text-foreground">the relationship between people, ideas, and the things we build.</strong> That perspective shaped my approach to design — one that balances visual craft, clarity, functionality, and the human experience behind every interaction.
              </p>
              <p>
                Today, <strong className="font-semibold text-foreground">I’m drawn to projects where design, technology, and ideas can come together.</strong>, I&rsquo;m always looking for opportunities to <strong className="font-semibold text-foreground">shape thoughtful experiences, explore new possibilities, and turn ambitious ideas into something tangible</strong>.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Skills />
            <Education />
            <Experience />
            <Publics />
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
