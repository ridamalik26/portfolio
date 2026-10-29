"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero, site } from "@/data/portfolio";
import Avatar from "./Avatar";

const btn =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors";

const nameSize = "text-[26vw] md:text-[12.5vw] xl:text-[11rem]";

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="top" aria-labelledby="hero-name" className="relative overflow-hidden pt-8 md:pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.h1
          id="hero-name"
          {...fade(0)}
          className={`relative z-0 text-center font-display uppercase leading-[0.85] tracking-tight text-accent ${nameSize}`}
        >
          <span className="block md:inline">Rida</span>
          <span className="hidden md:inline">&nbsp;</span>
          <span className="block md:inline">Malik</span>
        </motion.h1>

        <div className="relative z-10 -mt-[16vw] grid pb-10 lg:pb-0 items-end gap-8 md:-mt-[9vw] md:grid-cols-2 lg:grid-cols-[1fr_minmax(260px,380px)_1fr] lg:gap-6 xl:-mt-32">
          <motion.div {...fade(0.2)} className="order-2 text-center md:text-left lg:order-1 lg:pb-16">
            <p className="font-display text-2xl uppercase leading-tight text-foreground sm:text-3xl">
              {hero.role}
            </p>
            <p className="mt-3 text-lg font-medium text-accent">{hero.motto}</p>
          </motion.div>

          <motion.div {...fade(0.1)} className="order-1 mx-auto w-[70%] max-w-[380px] md:col-span-2 md:w-[55%] lg:order-2 lg:col-span-1 lg:w-full">
            <Avatar />
          </motion.div>

          <motion.div {...fade(0.3)} className="order-3 text-center md:text-left lg:pb-16">
            <p className="mx-auto max-w-md text-base leading-relaxed text-muted md:mx-0">
              {hero.intro}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
              <a href="#projects" className={`${btn} bg-accent text-background hover:bg-accent-deep`}>
                {hero.primaryCta}
              </a>
              <a
                href={site.resume}
                download
                className={`${btn} border border-border text-foreground hover:border-accent hover:text-accent`}
              >
                {hero.secondaryCta}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
