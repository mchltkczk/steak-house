import styles from "./Ad.module.scss";

export const Ad = ({ header, text, background }) => {
  return (
    <div className={`${styles.wrapper} ${styles[background]}`}>
      <h3>{header}</h3>
      <p>{text}</p>
      <div>Przycisk</div>
    </div>
  );
};
