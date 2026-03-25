import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail } from "lucide-react";

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socials = [
  { icon: XIcon, label: "X", href: "https://x.com/_ShayFx", isCustom: true },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/shayannn_g/", isCustom: false },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/shayan-hussain-28143828a", isCustom: false },
  { icon: Mail, label: "Email", href: "mailto:hussainshayan308@gmail.com", isCustom: false },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-transparent relative overflow-hidden border-t border-white/5">
      {/* Ambient white glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-zinc-400 tracking-[0.3em] uppercase text-sm mb-3 font-body">
            Get in touch
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-chrome text-glow mb-6">
            Contact me
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-14 font-body tracking-wide">
            Let's collaborate on your next project. Reach out through any of my social channels below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-5 flex-wrap"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="icon-glow-circle w-14 h-14"
            >
              {social.isCustom ? (
                <social.icon />
              ) : (
                <social.icon size={20} className="text-foreground" />
              )}
            </a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-muted-foreground text-xs tracking-widest uppercase font-body"
        >
          © 2026 Shayan. All rights reserved.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
