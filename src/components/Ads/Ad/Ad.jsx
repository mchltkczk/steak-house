import { Button } from "../../Button/Button";
import styles from "./Ad.module.scss";

export const Ad = ({ header, text, background }) => {
  return (
    <div className={`${styles.wrapper} ${styles[background]}`}>
      <div className={styles.text}>
        <h3>{header}</h3>
        <p>{text}</p>
        <Button>Zamów online</Button>
      </div>
    </div>
  );
};
