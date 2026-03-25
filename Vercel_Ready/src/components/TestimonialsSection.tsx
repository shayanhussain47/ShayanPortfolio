import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import BloomDivider from "./BloomDivider";

const testimonials = [
  {
    name: "Ali Areez",
    role: "Co-Founder, Sahara e Umeed",
    text: "Working with Shayan was an absolute game-changer. He understood our vision instantly and delivered designs that were both elegant and impactful.",
  },
  {
    name: "Marcus Sterling",
    role: "Founder, Futureonics",
    text: "Shayan transformed our brand identity from the ground up. The level of detail and creative vision was beyond anything we expected. Truly world-class.",
  },
  {
    name: "Elena Rostova",
    role: "CEO, NovaTech Studios",
    text: "The thumbnails and social media designs boosted our engagement by over 300%. Shayan's eye for cinematic visuals is unmatched in the industry.",
  },
  {
    name: "Julian Delacruz",
    role: "Creative Director, Crescent Media",
    text: "Every project delivered on time, every design exceeded expectations. Shayan brings a premium, editorial quality that sets him apart from everyone else.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-[160px] bg-transparent relative overflow-hidden">
      {/* Ambient white glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-zinc-400 tracking-[0.3em] uppercase text-sm mb-3 font-body">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-chrome text-glow">
            What Clients Say
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              className="relative rounded-xl p-8 border border-white/5 transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] bg-black"
            >
              <Quote size={24} className="text-white/30 mb-5" />
              <p className="text-foreground/90 font-body text-sm md:text-base leading-relaxed mb-6 tracking-wide">
                "{t.text}"
              </p>
              <div>
                <p className="font-display font-semibold text-foreground text-sm tracking-wide">
                  {t.name}
                </p>
                <p className="text-muted-foreground text-xs tracking-widest uppercase mt-1">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <BloomDivider className="bottom-0" />
    </section>
  );
};

export default TestimonialsSection;
