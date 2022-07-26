import styles from "./Button.module.scss";

export const Button = ({ children, position }) => {
  return <button className={`${styles.btn} ${position}`}>{children}</button>;
};
