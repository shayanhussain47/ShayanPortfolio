import logoSahara from "@/assets/logo-sahara.png";
import logoClient2 from "@/assets/logo-client2.png";
import logoFutureonics from "@/assets/logo-futureonics.png";

const brands = [
  { name: "Sahara Umeed", logo: logoSahara },
  { name: "Client", logo: logoClient2 },
  { name: "Futureonics", logo: logoFutureonics },
];

const BrandMarquee = () => {
  const items = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden lg:opacity-100">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-black to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-black to-transparent" />

      <div className="flex whitespace-nowrap animate-marquee items-center">
        {items.map((brand, i) => (
          <img
            key={`${brand.name}-${i}`}
            src={brand.logo}
            alt={brand.name}
            className="mx-12 md:mx-20 h-48 md:h-64 w-auto object-contain transition-all duration-300 opacity-70 md:opacity-85 hover:opacity-100 filter grayscale brightness-[0.75] hover:brightness-100 hover:grayscale-0"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default BrandMarquee;
