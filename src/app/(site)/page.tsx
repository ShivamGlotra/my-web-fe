import { About } from "@/components/About";
import { Hero } from "@/components/Hero/Hero";
import { HowIWork } from "@/components/HowIWork";
import { FeaturedProjects, MoreProjects } from "@/components/Projects";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <HowIWork />
      <MoreProjects />
      <About />
    </>
  );
};

export default HomePage;
