import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, X, LucideIcon } from "lucide-react";
import GlobalLightLeaks from "@/components/GlobalLightLeaks";
import BloomDivider from "@/components/BloomDivider";
import CursorFollower from "@/components/CursorFollower";

interface Tool {
  name: string;
  icon: LucideIcon;
}

interface GalleryPageProps {
  title: string;
  description: string;
  images: string[];
  basePath: string; // e.g., "/logos/"
  tools?: Tool[];
}

const GalleryPage = ({ title, description, images, basePath, tools }: GalleryPageProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <div className="min-h-screen bg-black relative cursor-none">
      <GlobalLightLeaks />
      <CursorFollower />

      <main className="relative z-10 pt-16 pb-12 md:pt-24 md:pb-16 px-4 md:px-8">
        <div className="max-w-[1600px] mx-auto">
          {/* Navigation */}
          <Link
            to="/"
            className="pill-button-filled group bg-white text-black border-none hover:bg-white/90 inline-flex items-center gap-2 mb-12"
          >
            <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </Link>

          {/* Heading */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold bg-gradient-to-b from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent mb-4" style={{ filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))" }}>
              {title}
            </h1>
            <p className="text-zinc-400 font-body text-sm md:text-base max-w-2xl">
              {description}
            </p>
          </div>

          {/* Masonry Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                variants={item}
                className="break-inside-avoid relative z-20"
              >
                <div 
                  className="rounded-xl overflow-hidden border border-white/10 relative group cursor-pointer"
                  onClick={() => setSelectedImage(`${basePath}${img}`)}
                >
                  <img
                    src={`${basePath}${img}`}
                    alt={`${title} ${index + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 border-[2px] border-white/0 group-hover:border-white/20 transition-colors duration-500 rounded-xl pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <div className="relative w-full h-[60px] flex justify-center">
        <BloomDivider className="bottom-0" />
      </div>

      {/* Tools Used Section */}
      {tools && tools.length > 0 && (
        <section className="relative z-10 bg-transparent py-16 flex flex-col items-center">
          <h3 className="text-zinc-500 tracking-[0.3em] uppercase text-xs font-body mb-8 md:mb-12 text-center">
            Crafted with precision using:
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {tools.map((tool) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center gap-3 relative z-50"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-white/20 bg-black/50 transition-all duration-400 group-hover:border-white/80 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] group-hover:bg-white/10 opacity-80 group-hover:opacity-100">
                  <tool.icon
                    size={24}
                    className="text-zinc-400 transition-colors duration-300 group-hover:text-white"
                  />
                </div>
                <span className="text-[10px] md:text-xs font-body tracking-wider uppercase text-zinc-600 group-hover:text-zinc-300 transition-colors duration-300">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-50 cursor-pointer"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={selectedImage}
              alt="Full resolution view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-[0_0_100px_rgba(255,255,255,0.1)] relative z-40"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
