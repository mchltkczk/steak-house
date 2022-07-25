import styles from "./Button.module.scss";

export const Button = ({ userNavIcon, userNavText, background }) => {
  return (
    <div className={`${styles.wrapper} ${background}`}>
      <img className={styles.icon} src={userNavIcon} />
      <span>{userNavText}</span>
    </div>
  );
};
