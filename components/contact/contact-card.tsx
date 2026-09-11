import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { ContactCardCtas } from "./contact-card-ctas";
import { FadeIn } from "@/components/ui/motion-primitives";
import { ShaderFlow } from "../shaders/shader-flow";

const SOCIAL_FADE_MASK =
  "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 35%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0.2) 100%)";

export function ContactCard(): ReactNode {
  return (
    <section className="mx-auto my-12 w-full max-w-275 px-6 sm:my-20 sm:px-10">
      <FadeIn>
        <div className="relative w-full overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm">
          <div className="relative w-full overflow-hidden rounded-[1.6rem]">
        
            <div className="relative grid gap-8 p-6 sm:gap-10 sm:p-7 md:grid-cols-[1.2fr_1fr] md:items-stretch md:gap-6 md:p-6">
              <div className="flex flex-col gap-5">
                <h2 className="font-serif text-[2.25rem] font-medium leading-[1.05] tracking-tight text-foreground sm:text-[2.75rem] lg:text-[3.25rem]">
                  What are you thinking about?
                </h2>
                <p className="max-w-[29ch] text-[18px] leading-[1.4] tracking-tight text-foreground/65 sm:text-[22px] mb-6">
                  Have an idea worth exploring? A problem worth solving?
                  A project worth making? I&rsquo;d love to hear it.
                </p>
                <ContactCardCtas />
              </div>

              <div className="border-foreground/8 relative flex flex-col items-center justify-center gap-6 rounded-[1.1rem] border bg-background p-6 sm:p-8 overflow-hidden">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-35 dark:opacity-20"
                  style={{
                    WebkitMaskImage: SOCIAL_FADE_MASK,
                    maskImage: SOCIAL_FADE_MASK,
                  }}
                >
                  <ShaderFlow scale={2.5} brightness={2.5}/>
                </div>

                <div className="relative flex items-center gap-3 opacity-75 z-10">
                  <SocialIcon
                    href="mailto:hello@example.com"
                    label="E-mail"
                    imageSrc="/gmail.svg"
                  />
                  <SocialIcon
                    href="https://t.me/julesolenne"
                    label="Telegram"
                    imageSrc="/telegram.svg"
                  />
                  <SocialIcon
                    href="https://www.instagram.com/julesolenne/"
                    label="Instagram"
                    imageSrc="/instagram.svg"
                  />
                  <SocialIcon
                    href="https://github.com/julesolenne/"
                    label="GitHub"
                    imageSrc="/github.svg"
                  />
                </div>
                <div className="relative flex flex-col items-center gap-1 text-center z-10">
                  <p className="text-[13px] tracking-tight text-foreground/70">
                    Elsewhere. One click away.
                  </p>
                  <p className="text-[12px] tracking-tight text-foreground/45">
                    &copy; Jules Hidde.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  imageSrc,
}: {
  href: string;
  label: string;
  imageSrc?: string;
}): ReactNode {
  const isExternal = href.startsWith("http");
  const props = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Link
      href={href}
      aria-label={label}
      className= "border-white/10 bg-background/60 backdrop-blur-md shadow-inner transition-all duration-300 ease-out hover:border-white/20 hover:bg-background/80 active:scale-95 inline-flex h-11 w-11 items-center justify-center rounded-2xl text-foreground/70"
      {...props}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt=""
          width={14}
          height={14}
          aria-hidden="true"
          className="max-h-[14px] max-w-[14px] object-contain dark:invert"
        />
      ) : null}
    </Link>
  );
}
