import styles from "./SkipLink.module.scss";

export const SkipLink = () => {
  return (
    <a href="#main" className={styles.skip}>
      Skip to main content
    </a>
  );
};
