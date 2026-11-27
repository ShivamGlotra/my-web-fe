import { Card } from "@/components/Card";
import styles from "./PrincipalCard.module.scss";
import type { Principle } from "@/types/content";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
import Image from "next/image";

type PrincipalCardProps = {
  principle: Principle;
};

export const PrincipalCard = ({ principle }: PrincipalCardProps) => {
  const { title, description, illustration } = principle;

  return (
    <Card type="li" className={styles.card}>
      <div className={styles.art}>
        {illustration ? (
          <Image
            src={illustration.url}
            alt={illustration.alt}
            width={illustration.width}
            height={illustration.height}
            sizes="(min-width: 64rem) 230px, (min-width: 30rem) 50vw, 100vw"
            className={styles.image}
          />
        ) : (
          <span className={styles.placeholder} aria-hidden="true" />
        )}
      </div>
      <Heading level={3} size="sm">
        {title}
      </Heading>
      <Text muted size="small">
        {description}
      </Text>
    </Card>
  );
};
