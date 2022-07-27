import logo from "../../../assets/l.png";
import styles from "./NavMain.module.scss";

export const NavMain = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} className={styles.logo} />
      <ul className={styles.menuList}>
        <li>
          <a href='/' target='_blank'>
            Steaks
          </a>
        </li>
        <li>
          <a href='/' target='_blank'>
            Burgers
          </a>
        </li>
        <li>
          <a href='/' target='_blank'>
            French fries
          </a>
        </li>
        <li>
          <a href='/' target='_blank'>
            Drinks
          </a>
        </li>
        <li>
          <a href='/' target='_blank'>
            Gdzie dowozimy?
          </a>
        </li>
        <li>
          <a href='/' target='_blank'>
            Kontakt
          </a>
        </li>
      </ul>
    </div>
  );
};
