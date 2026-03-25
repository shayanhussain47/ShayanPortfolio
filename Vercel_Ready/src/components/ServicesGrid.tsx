import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import cardMovie from "@/assets/card-movie.jpg";
import ServiceModal from "./ServiceModal";
import BloomDivider from "./BloomDivider";

const services = [
  {
    title: "YouTube Thumbnails",
    description:
      "High-conversion thumbnails engineered to boost your click-through rate. Using cinematic composition, bold typography, and strategic color psychology to make your videos irresistible.",
  },
  {
    title: "Social Media Ads / Design",
    description:
      "Scroll-stopping social media content designed for maximum engagement. From Instagram carousels to Facebook ads, every asset is optimized for platform-specific dimensions and visual impact.",
  },
  {
    title: "Brand Identity & Logo Design",
    description:
      "Complete brand identity systems — from logo design and color palettes to typography hierarchies and brand guidelines. Every element is crafted to communicate your brand's unique story with precision and impact.",
  },
  {
    title: "Sports Design",
    description:
      "Dynamic sports graphics — matchday posters, player cards, team branding, and social content that captures the intensity and energy of athletic competition.",
  },
  {
    title: "AI Prompt for Design & Others",
    description:
      "Leveraging cutting-edge AI tools like Midjourney, DALL-E, and Gemini to create unique visual concepts. Expert prompt engineering combined with professional post-production for stunning results.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const titleVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

type Service = {
  title: string;
  description: string;
  image?: string;
};

const ServicesGrid = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 md:py-40 bg-transparent relative overflow-hidden">
      {/* Ambient floating blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.04] bg-white top-[20%] right-[-10%] pointer-events-none"
        animate={{ y: [0, -40, 20, 0], x: [0, -20, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container max-w-[1600px] mx-auto">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-zinc-400 tracking-[0.3em] uppercase text-sm mb-3 font-body">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-chrome text-glow">
            What I do
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 justify-center gap-8 relative z-10"
        >
          {services.map((service) => (
            <motion.div 
              key={service.title} 
              variants={item}
            >
              <div
                className="shimmer-card group flex items-center border border-white/10 relative overflow-hidden h-60 w-full cursor-pointer"
                onClick={() => {
                  if (service.title === "YouTube Thumbnails") {
                    navigate("/thumbnails");
                  } else if (service.title === "Brand Identity & Logo Design") {
                    navigate("/logos");
                  } else if (service.title === "Sports Design") {
                    navigate("/sports");
                  } else if (service.title === "Social Media Ads / Design") {
                    navigate("/social-media");
                  } else {
                    setSelectedService(service);
                  }
                }}
              >
                  <>
                    <img
                      src={
                        service.title === "Brand Identity & Logo Design" ? "/logo-portfolio.jpeg"
                        : service.title === "YouTube Thumbnails" ? "/thumbnail.png"
                        : service.title === "Sports Design" ? "/sports.png"
                        : service.title === "Social Media Ads / Design" ? "/social media.png"
                        : "/AI.png"
                      }
                      alt=""
                      className={`absolute inset-0 w-full h-full object-cover ${service.title === "Sports Design" ? "object-top" : "object-center"} transition-all duration-500 block z-0 ${
                        service.title === "Brand Identity & Logo Design" 
                          ? "opacity-80 brightness-[0.8] contrast-[1.2] group-hover:opacity-100 group-hover:brightness-[1.2] group-hover:contrast-[1.3]"
                          : service.title === "AI Prompt for Design & Others"
                          ? "brightness-[0.7] contrast-[1.1] grayscale-[100%] group-hover:brightness-[1.2] group-hover:contrast-[1.3] group-hover:grayscale-[0%]"
                          : service.title === "Sports Design"
                          ? "grayscale-[100%] brightness-[0.8] group-hover:grayscale-[0%] group-hover:brightness-[1.1]"
                          : service.title === "Social Media Ads / Design"
                          ? "grayscale-[100%] brightness-[0.8] contrast-[1.1] group-hover:grayscale-[0%] group-hover:brightness-[1.2] group-hover:contrast-[1.2]"
                          : "grayscale-[100%] brightness-[0.9] group-hover:grayscale-[0%] group-hover:brightness-[1.1]"
                      }`}
                    />
                    <div 
                      className="absolute inset-0 z-[5] pointer-events-none" 
                      style={{ background: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 35%, transparent 90%)" }}
                    />
                    <div className="flex-1 flex items-center justify-between pl-8 pr-6 py-6 w-full relative z-30 pointer-events-none">
                      <h3 
                        className="text-sm md:text-base font-display text-white font-bold tracking-wide uppercase leading-tight"
                        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
                      >
                        {service.title}
                      </h3>
                      <div className="icon-glow-circle ml-3">
                        <ArrowUpRight size={16} className="text-white" />
                      </div>
                    </div>
                  </>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />

      <BloomDivider className="bottom-0" />
    </section>
  );
};

export default ServicesGrid;
