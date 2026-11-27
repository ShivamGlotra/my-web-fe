import Image from "next/image";
import type { ImageAsset } from "@/types/content";
import styles from "./MediaFrame.module.scss";

export type AspectRatio = `${number} / ${number}`;

type MediaFrameProps = {
  image?: ImageAsset;
  ratio?: AspectRatio;
  sizes: string;
  className?: string;
};

export const MediaFrame = ({ image, ratio, sizes, className }: MediaFrameProps) => {
  return (
    <div className={[styles.frame, className].filter(Boolean).join(" ")} style={{ aspectRatio: ratio }}>
      {image ? (
        <Image
          src={image.url}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          className={styles.image}
        />
      ) : (
        <span className={styles.placeholder} aria-hidden="true" />
      )}
    </div>
  );
};
