import { CatalogCategoryView } from "@/components/catalog-category-view";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { getAllCategorySlugs, getCategoryBySlug } from "@/lib/catalog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Каталог" };

  return {
    title: `${category.title} | ГРОМИТСТРОЙ`,
    description: category.shortDescription,
  };
}

export default async function CatalogPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) notFound();

  return (
    <>
      <Navigation />
      <main>
        <CatalogCategoryView category={category} />
      </main>
      <Footer />
    </>
  );
}