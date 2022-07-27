import { NavMain } from "./NavMain/NavMain";
import { NavUser } from "./NavUser/NavUser";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <nav className={styles.wrapper}>
      <NavMain />
      <NavUser />
    </nav>
  );
};
