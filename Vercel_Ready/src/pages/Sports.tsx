import { Palette, PenTool, Image as ImageIcon } from "lucide-react";
import GalleryPage from "@/components/GalleryPage";

const sportsFiles = import.meta.glob('/public/sports/*.{png,jpg,jpeg,webp}', { eager: true });
const images = Object.keys(sportsFiles).map((path) => path.replace('/public/sports/', ''));

const tools = [
  { name: "Adobe Photoshop", icon: Palette },
  { name: "Illustrator", icon: PenTool },
  { name: "Freepik AI", icon: ImageIcon },
];

const Sports = () => {
  return (
    <GalleryPage
      title="Sports Design"
      description="Dynamic sports graphics and event posters that capture the intensity of competition."
      images={images}
      basePath="/sports/"
      tools={tools}
    />
  );
};

export default Sports;
