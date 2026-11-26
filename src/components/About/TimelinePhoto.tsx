import { ImageAsset } from "@/types/content";
import styles from "./TimelinePhoto.module.scss";
import Image from "next/image";

type TimelinePhotoProps = {
  photo?: ImageAsset;
};

export const TimelinePhoto = ({ photo }: TimelinePhotoProps) => {
  if (!photo) return null;
  const hasPhoto = Boolean(photo?.url && photo?.width && photo?.height && photo?.alt);
  return (
    <figure className={styles.photo}>
      {hasPhoto ? (
        <Image
          src={photo.url}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes="(min-width: 48rem) 300px, 100vw"
          className={styles.image}
        />
      ) : (
        <span className={styles.placeholder} aria-hidden="true">
          Photo
        </span>
      )}
    </figure>
  );
};
