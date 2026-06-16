import type { CatalogItem } from "@/lib/catalog";
import { MediaFrame } from "@/components/media-frame";

type ProductGridProps = {
  items: CatalogItem[];
  columns?: "2" | "3" | "4";
};

export function ProductGrid({ items, columns = "3" }: ProductGridProps) {
  const gridClass =
    columns === "4"
      ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
      : columns === "2"
        ? "grid-cols-1 sm:grid-cols-2"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-4 ${gridClass}`}>
      {items.map((item) => (
        <article
          key={`${item.image}-${item.title}`}
          className="group overflow-hidden rounded-xl border border-[#E5E7EB] bg-[#F8F9FA]"
        >
          <MediaFrame
            src={item.image}
            alt={item.title}
            ratio="4 / 3"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            imageClassName="transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="border-t border-[#E5E7EB] p-4">
            <h3 className="text-sm font-medium leading-snug text-[#1A1A1A]">
              {item.title}
            </h3>
          </div>
        </article>
      ))}
    </div>
  );
}
