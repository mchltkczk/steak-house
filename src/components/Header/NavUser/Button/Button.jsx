import styles from "./Button.module.scss";

export const Button = ({ userNavIcon, userNavText, background }) => {
  return (
    <a href='/'>
      <div className={`${styles.wrapper} ${background}`}>
        <img className={styles.icon} src={userNavIcon} />
        <span className={styles.userNavText}>{userNavText}</span>
      </div>
    </a>
  );
};
