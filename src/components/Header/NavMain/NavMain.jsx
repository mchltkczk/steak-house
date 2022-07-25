import logo from "../../../assets/l.png";
import styles from "./NavMain.module.scss";

export const NavMain = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} className={styles.logo} />
      <ul className={styles.menuList}>
        <li>Steaks</li>
        <li>Burgers</li>
        <li>French fries</li>
        <li>Drinks</li>
        <li>Gdzie dowozimy?</li>
        <li>Kontakt</li>
      </ul>
    </div>
  );
};
