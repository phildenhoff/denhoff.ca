// @ts-ignore Css imports are not supported.
import styles from "./CallToAction.module.css";

export const CallToAction = ({ title, children }) => {
  return (
    <section class={styles.container}>
      <h2>{title || ""}</h2>
      {children || <span></span>}
    </section>
  );
};
