"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero, site } from "@/data/portfolio";
import { accentText } from "@/lib/accent";
import Avatar from "./Avatar";
import { TechIcon, UiIcon } from "./icons";

const btn =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors";

const bubblePos = [
  "left-0 top-[8%]",
  "right-0 top-[20%]",
  "left-[2%] bottom-[22%]",
  "right-[4%] bottom-[6%]",
];
const bubbleColor = ["text-peach-fg", "text-foreground", "text-foreground", "text-lavender-fg"] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="container-x flex min-h-[calc(100svh-4rem)] items-center py-10 lg:py-6"
    >
      <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-10">
        <div className="text-center lg:text-left">
          <motion.p
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold text-accent-fg sm:text-sm"
          >
            <UiIcon name="sparkles" size={14} />
            {hero.badge}
          </motion.p>

          <motion.h1
            id="hero-title"
            {...fade(0.08)}
            className="mt-5 font-display text-4xl leading-[1.08] tracking-tight text-foreground lg:text-[56px] xl:text-[64px]"
          >
            {hero.greeting}
            <span className="text-gradient block">{hero.gradientName}</span>
          </motion.h1>

          <motion.p {...fade(0.16)} className="mt-4 text-xl font-semibold text-lavender-fg xl:text-2xl">
            {hero.role}
          </motion.p>
          <motion.p {...fade(0.2)} className="mt-1 text-base font-medium text-accent-fg xl:text-lg">
            {hero.motto}
          </motion.p>
          <motion.p
            {...fade(0.24)}
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted lg:mx-0 xl:max-w-2xl xl:text-lg"
          >
            {hero.intro}
          </motion.p>

          <motion.div {...fade(0.28)} className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#projects" className={`${btn} bg-accent text-on-accent hover:bg-accent-deep`}>
              {hero.primaryCta}
            </a>
            <a
              href={site.resume}
              download
              className={`${btn} border border-border text-foreground hover:border-accent hover:text-accent-fg`}
            >
              {hero.secondaryCta}
            </a>
          </motion.div>

          <motion.ul {...fade(0.32)} className="mt-6 flex flex-wrap justify-center gap-2.5 lg:justify-start">
            {hero.stats.map((s) => (
              <li
                key={s.label}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-transparent px-3.5 py-2 text-sm font-medium text-foreground"
              >
                <UiIcon name={s.icon} size={16} className={accentText[s.color]} />
                {s.label}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div {...fade(0.15)} className="relative mx-auto w-full max-w-[430px] xl:max-w-[540px]">
          <div
            aria-hidden="true"
            className="blob absolute inset-0 scale-105 bg-gradient-to-br from-accent/45 via-lavender/35 to-mint/20 blur-3xl"
          />
          <div className="blob relative flex aspect-square w-full items-end justify-center overflow-hidden border border-foreground/10 bg-gradient-to-br from-accent/30 via-lavender/25 to-card">
            <Avatar className="h-[96%] w-auto" />
          </div>

          {hero.bubbles.map((name, i) => (
            <motion.span
              key={name}
              aria-hidden="true"
              className={`absolute ${bubblePos[i]} flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card/90 shadow-lg backdrop-blur sm:h-12 sm:w-12 ${bubbleColor[i]}`}
              animate={reduce ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            >
              <TechIcon name={name} size={22} />
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
