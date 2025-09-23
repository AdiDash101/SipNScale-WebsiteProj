import Image from "next/image";
import Foxmont from "../../assets/Foxmont.svg";
import Founders from "../../assets/Founders.svg";
import Startup from "../../assets/Startup.svg";
import Sitepoint from "../../assets/sitepoint.png";

const CompanyLogo = () => {
  const logos = [Foxmont, Founders, Startup, Sitepoint];

  return (
    <div className="w-full bg-black">
      <div className="container mx-auto py-12 flex flex-col sm:flex-row sm:items-center items-start overflow-hidden">
        {/* Left Label */}
        <div className="w-[300px] shrink-0 px-8 text-white border-l-4 border-white bg-white/10 py-2 z-10 sm:text-base text-xl font-semibold sm:text-left mb-8 sm:mb-0 backdrop-blur-sm rounded-md">
          Wavemakers Summit is <br /> Co-Presented by
        </div>

        {/* Smooth Marquee */}
        <div className="overflow-hidden w-full">
          <div className="animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt={`Company Logo ${index + 1}`}
                className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;
