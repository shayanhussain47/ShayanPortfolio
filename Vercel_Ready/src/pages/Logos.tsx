import { Palette, PenTool, Image as ImageIcon } from "lucide-react";
import GalleryPage from "@/components/GalleryPage";

const logoFiles = import.meta.glob('/public/logos/*.{png,jpg,jpeg,webp}', { eager: true });
const images = Object.keys(logoFiles).map((path) => path.replace('/public/logos/', ''));

const tools = [
  { name: "Adobe Photoshop", icon: Palette },
  { name: "Illustrator", icon: PenTool },
  { name: "Freepik AI", icon: ImageIcon },
];

const Logos = () => {
  return (
    <GalleryPage
      title="Brand Identity & Logos"
      description="Professional brand identity systems and logo designs crafted to communicate your unique story."
      images={images}
      basePath="/logos/"
      tools={tools}
    />
  );
};

export default Logos;
