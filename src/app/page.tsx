import { About } from "@/components/about";
import { BlogPreview } from "@/components/blog-preview";
import { Catalog } from "@/components/catalog";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Trust } from "@/components/trust";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <Catalog />
        <Trust />
        <About />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
