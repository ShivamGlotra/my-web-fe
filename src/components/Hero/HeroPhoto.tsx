import { ImageAsset } from "@/types/content";
import styles from "./HeroPhoto.module.scss";
import Image from "next/image";

type HeroPhotoProps = {
  photo?: ImageAsset;
  name: string;
  location: string;
};

export const HeroPhoto = ({ photo, name, location }: HeroPhotoProps) => {
  const hasPhoto = Boolean(photo?.url && photo?.alt && photo?.width && photo?.height);

  return (
    <figure className={styles.photo}>
      {hasPhoto ? (
        <Image
          src={photo?.url || ""}
          alt={photo?.alt || ""}
          width={photo?.width || 0}
          height={photo?.height || 0}
          sizes="(min-width: 64rem) 470px, 240px"
          priority
          className={styles.image}
        />
      ) : (
        // <>
        //   <span className={styles.placeholder} aria-hidden="true">
        //     Photo of {name} in {location}
        //   </span>{" "}
        <figcaption className={styles.caption}>
          <span className={styles.name}>{name}</span>
          <span>{location}</span>
        </figcaption>
      )}
    </figure>
  );
};
