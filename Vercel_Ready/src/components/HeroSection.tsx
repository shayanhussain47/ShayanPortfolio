import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import BloomDivider from "./BloomDivider";
import portraitImage from "../assets/potrait.webp";
import bgImage from "../assets/bg.webp";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-transparent"
      style={{ maskImage: "linear-gradient(to bottom, black 95%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 95%, transparent 100%)" }}
    >
      {/* === LAYER 0: Background Layer === */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: imageY, willChange: "transform" }}
      >
        <img
          src={bgImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center bg-fixed"
          fetchPriority="high"
          loading="eager"
        />
      </motion.div>

      {/* === LAYER 10: Background name text (behind portrait) === */}
      <motion.div
        style={{ y: textY, willChange: "transform" }}
        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none"
      >
        <h1 className="text-[18vw] font-black tracking-tighter select-none text-transparent" style={{ WebkitTextStroke: "1px white" }}>
          SHAYAN
        </h1>
      </motion.div>

      {/* === LAYER 20: Hero portrait image (in front of text) === */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center"
        style={{ y: imageY, willChange: "transform" }}
      >
        <div
          className="absolute inset-0 w-full h-full animate-float"
        >
          <img
            src={portraitImage}
            alt="Portrait"
            className="absolute inset-x-0 bottom-0 md:inset-0 w-full h-[70%] md:h-full object-cover object-[center_bottom]"
            style={{
              maskImage: "linear-gradient(to top, transparent, black 20%)",
              WebkitMaskImage: "linear-gradient(to top, transparent, black 20%)",
            }}
            fetchPriority="high"
            loading="eager"
          />
        </div>
      </motion.div>

      {/* === LAYER 4: Foreground content === */}
      <motion.div
        style={{ y: contentY, willChange: "transform" }}
        className="relative z-30 flex flex-col h-full"
      >
        {/* Intro text - positioned top-left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[18%] left-4 md:left-8 lg:left-12 max-w-xs md:max-w-sm z-50"
        >
          <p className="text-white/60 text-xs tracking-[0.3em] uppercase mb-3 font-body">
            Hi, I'm Shayan
          </p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-white leading-tight mb-2">
            Let's Create
            <br />
            Designs That
            <br />
            <span className="text-white">Tell Your Story</span>
          </h2>
        </motion.div>

        {/* Bottom section: description + CTA */}
        <div className="mt-auto pb-4 md:pb-8 section-container flex flex-col md:flex-row items-end md:items-end justify-between gap-8 z-30">
          {/* Left: Role */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="max-w-md"
          >
            <p
              className="text-white/80 text-sm md:text-base leading-relaxed tracking-wide font-body"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
            >
              Through my lens, I transform fleeting moments into timeless visuals.
              Whether it's brand identity, social media, or cinematic design — I create
              visuals that connect, inspire, and leave a lasting impression.
            </p>
          </motion.div>

          {/* Right: CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex-shrink-0"
          >
            <a
              href="#services"
              className="pill-button-filled group bg-white text-black border-none hover:bg-white/90 inline-flex items-center gap-2"
            >
              See my works
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={18} className="text-muted-foreground" />
        </motion.div>
      </motion.div>

      {/* === LAYER 20: Hero Light Leaks === */}
      <div className="absolute bottom-[-100px] left-0 w-[800px] h-[200px] bg-white/5 blur-[100px] opacity-20 pointer-events-none z-20" />
      <div className="absolute bottom-[-100px] right-0 w-[800px] h-[200px] bg-white/5 blur-[100px] opacity-20 pointer-events-none z-20" />

      <BloomDivider className="bottom-0" />
    </section>
  );
};

export default HeroSection;
