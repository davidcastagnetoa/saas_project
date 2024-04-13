import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/global/NavBar";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { HeroParallax } from "@/components/global/connect-parallax";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { clients, products } from "@/lib/constant";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />;
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <Button
                  size={"lg"}
                  className="overflow-hidden p-8 mb-8 md:mb-0 text-2xl  w-full sm:w-fit border rounded-full border-slate-700  bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] hover:bg-[linear-gradient(110deg,#d5d5d5,45%,#b3c3da,55%,#818181)]  animate-shimmer flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500  transition-colors"
                >
                  <span className=" font-medium bg-clip-text md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black text-white hover:text-black">
                    Start For Free Today
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automate Your Work With Fuzzie
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <InfiniteMovingCards className="md:mt-[22rem] mt-[-100px]" items={clients} direction="right" speed="slow" />
      <section>
        <HeroParallax products={products}></HeroParallax>
      </section>
      <section className="mt-[-500px]"></section>
    </main>
  );
}
