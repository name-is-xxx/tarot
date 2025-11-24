import one from "@/assets/1.jpg";
import two from "@/assets/6.jpg";
import { Image } from "@mantine/core";
import { ArrowRight } from "phosphor-react";

const Home = () => {
  return (
    <>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mdOnly:gap-x-4 mdOnly:gap-y-6">
        <div className="relative h-fit">
          <Image src={one} radius="lg" className="blur-[0px]" />
          <div className="absolute inset-0 p-5 flex items-center">
            <span className="flex-1 text-white text-xl font-bold truncate text-balance">
              123666666666666666666666555555555555555555555555555555555555555555555555555555566666666666456
            </span>
            <ArrowRight size={20} color="white" weight="bold" />
          </div>
        </div>
        <div className="relative h-fit">
          <Image src={one} radius="lg" className="blur-[0.5px]" />
          <div className="absolute inset-0 p-5 flex items-center">
            <span className="flex-1 text-white text-xl font-bold truncate text-balance">
              123666666666666666 hdbsuinbf 55dvses 55fdvrmviodrrmv bgvbzefb
              55555566666666666456
            </span>
            <ArrowRight size={20} color="white" weight="bold" />
          </div>
        </div>
        <div className="relative h-fit">
          <Image src={one} radius="lg" className="blur-[1px]" />
          <div className="absolute inset-0 p-5 flex items-center">
            <span className="flex-1 text-white text-xl font-bold truncate text-balance">
              123666666666666666666666555555555555555555555555555555555555555555555555555555566666666666456
            </span>
            <ArrowRight size={20} color="white" weight="bold" />
          </div>
        </div>
        <div className="relative h-fit">
          <Image src={one} radius="lg" className="blur-[1.5px]" />
          <div className="absolute inset-0 p-5 flex items-center">
            <span className="flex-1 text-white text-xl font-bold truncate text-balance">
              123666666666666666666666555555555555555555555555555555555555555555555555555555566666666666456
            </span>
            <ArrowRight size={20} color="white" weight="bold" />
          </div>
        </div>
        <div className="relative h-fit">
          <Image src={one} radius="lg" className="blur-[2px]" />
          <div className="absolute inset-0 p-5 flex items-center">
            <span className="flex-1 text-white text-xl font-bold truncate text-balance">
              123666666666666666666666555555555555555555555555555555555555555555555555555555566666666666456
            </span>
            <ArrowRight size={20} color="white" weight="bold" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
