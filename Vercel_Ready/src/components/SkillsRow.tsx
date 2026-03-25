import { motion } from "framer-motion";
import { Palette, Film, PenTool, Sparkles, Bot, Image, Layout } from "lucide-react";
import BloomDivider from "./BloomDivider";

const skills = [
  { name: "Adobe Photoshop", icon: Palette },
  { name: "Premiere Pro", icon: Film },
  { name: "Illustrator", icon: PenTool },
  { name: "Midjourney", icon: Sparkles },
  { name: "Gemini", icon: Bot },
  { name: "Freepik AI", icon: Image },
  { name: "Canva", icon: Layout },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const SkillsRow = () => {
  return (
    <section className="mt-10 py-12 md:py-20 bg-transparent relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative flex justify-center mb-12"
        >
          <h2 
            className="text-2xl md:text-3xl font-display font-bold tracking-widest uppercase relative z-10 bg-gradient-to-b from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent"
            style={{ filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))" }}
          >
            Expert Toolkit
          </h2>
        </motion.div>

        <div className="relative w-full flex justify-center pb-[50px]">

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10 relative z-50 w-full"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={item}
                className="group flex flex-col items-center gap-3 relative z-50"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center border border-white/20 bg-black/50 transition-all duration-400 group-hover:border-white/80 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] group-hover:bg-white/10 opacity-80 group-hover:opacity-100 relative z-50">
                  <skill.icon
                    size={24}
                    className="text-zinc-400 transition-colors duration-300 group-hover:text-white"
                  />
                </div>
                <span className="text-xs font-body tracking-widest uppercase text-zinc-500 group-hover:text-white transition-colors duration-300 relative z-50">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
          
          <BloomDivider className="bottom-0" />
        </div>
      </div>

    </section>
  );
};

export default SkillsRow;
