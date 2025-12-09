// import one from "@/assets/1.jpg";
// import { Image } from "@mantine/core";
import { ArrowRight } from "phosphor-react";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mdOnly:gap-x-4 mdOnly:gap-y-6">
        {/* <div className="relative h-fit">
          <Image src={one} radius="lg" className="blur-[1px]" />
          <div className="absolute inset-0 p-5 flex items-center">
            <span className="flex-1 text-white text-xl font-bold truncate text-balance">
              123666666666666666666666555555555555555555555555555555555555555555555555555555566666666666456
            </span>
            <ArrowRight size={20} color="white" weight="bold" />
          </div>
        </div> */}
        <div className="h-full p-5 flex items-center border-2 border-[var(--mantine-color-indigo-6)] rounded-lg bg-[var(--mantine-color-indigo-2)] hover:bg-[var(--mantine-color-indigo-1)]">
          <span className="flex-1 text-xl font-bold truncate text-balance text-[var(--mantine-color-indigo-6)]">
            BLOG
          </span>
          <ArrowRight
            size={20}
            color="var(--mantine-color-indigo-6)"
            weight="bold"
          />
        </div>
        <div className="h-32 p-5 flex items-center border-2 border-[var(--mantine-color-grape-6)] rounded-lg bg-[var(--mantine-color-grape-2)] hover:bg-[var(--mantine-color-grape-1)]">
          <span className="flex-1 text-xl font-bold truncate text-balance text-[var(--mantine-color-grape-6)]">
            TAROT
          </span>
          <ArrowRight
            size={20}
            color="var(--mantine-color-grape-6)"
            weight="bold"
          />
        </div>
      </div>
    </>
  );
};
export default Home;
