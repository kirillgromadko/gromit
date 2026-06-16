import { getImageFocus } from "@/lib/images";
import Image, { type ImageProps } from "next/image";

type MediaFrameProps = {
  src: string;
  alt: string;
  /** CSS aspect-ratio, например "16 / 10" или "4 / 3" */
  ratio?: string;
  className?: string;
  imageClassName?: string;
  fit?: "cover" | "contain";
  priority?: boolean;
  sizes?: string;
};

export function MediaFrame({
  src,
  alt,
  ratio = "4 / 3",
  className = "",
  imageClassName = "",
  fit = "cover",
  priority = false,
  sizes = "100vw",
}: MediaFrameProps) {
  const objectClass = fit === "contain" ? "object-contain" : "object-cover";

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#F8F9FA] ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`${objectClass} ${imageClassName}`}
        style={{ objectPosition: getImageFocus(src) }}
      />
    </div>
  );
}

type MediaImageProps = Omit<ImageProps, "style"> & {
  fit?: "cover" | "contain";
};

export function MediaImage({
  fit = "cover",
  className = "",
  src,
  ...props
}: MediaImageProps) {
  const srcStr = typeof src === "string" ? src : "";
  const objectClass = fit === "contain" ? "object-contain" : "object-cover";

  return (
    <Image
      src={src}
      className={`${objectClass} ${className}`}
      style={srcStr ? { objectPosition: getImageFocus(srcStr) } : undefined}
      {...props}
    />
  );
}
