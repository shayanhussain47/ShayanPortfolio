import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service?: {
    title: string;
    description: string;
  } | null;
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  if (!service) return null;

  const imageSrc =
    service.title === "Brand Identity & Logo Design" ? "/logo-portfolio.jpeg"
    : service.title === "YouTube Thumbnails" ? "/thumbnail.png"
    : service.title === "Sports Design" ? "/sports.png"
    : service.title === "Social Media Ads / Design" ? "/social media.png"
    : "/AI.png";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/15"
            style={{ background: "linear-gradient(135deg, #0a0a0a, #111111)" }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-10 icon-glow-circle w-10 h-10"
            >
              <X size={18} className="text-foreground" />
            </button>

            {/* Image */}
            {imageSrc && (
              <div className="w-full h-56 md:h-72 overflow-hidden">
                <img
                  src={imageSrc}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-x-0 top-0 h-56 md:h-72"
                  style={{
                    background: "linear-gradient(to bottom, transparent 40%, #0a0a0a 100%)",
                  }}
                />
              </div>
            )}

            {/* Content */}
            <div className="px-8 pb-10 -mt-8 relative z-10">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-chrome mb-4 tracking-wide">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed mb-8 tracking-wide">
                {service.description}
              </p>
              <button
                onClick={() => {
                  onClose();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="pill-button-filled"
              >
                Start Project
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
