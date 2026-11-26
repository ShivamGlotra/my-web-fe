import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header";
import { SkipLink } from "@/components/SkipLink";
import { ReactNode } from "react";

const SiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default SiteLayout;
