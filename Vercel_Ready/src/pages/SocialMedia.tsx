import { Palette, PenTool, Image as ImageIcon } from "lucide-react";
import GalleryPage from "@/components/GalleryPage";

const socialFiles = import.meta.glob('/public/social-media-design/*.{png,jpg,jpeg,webp}', { eager: true });
const images = Object.keys(socialFiles).map((path) => path.replace('/public/social-media-design/', ''));

const tools = [
  { name: "Adobe Photoshop", icon: Palette },
  { name: "Illustrator", icon: PenTool },
  { name: "Freepik AI", icon: ImageIcon },
];

const SocialMedia = () => {
  return (
    <GalleryPage
      title="Social Media Design"
      description="Scroll-stopping content and ads designed for maximum engagement across all platforms."
      images={images}
      basePath="/social-media-design/"
      tools={tools}
    />
  );
};

export default SocialMedia;
