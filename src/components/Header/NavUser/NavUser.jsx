import { Button } from "./Button/Button";
import styles from "./NavUser.module.scss";
import myAccount from "../../../assets/mojekonto.svg";
import basket from "../../../assets/koszyk.svg";
import order from "../../../assets/zamow_ikona.svg";

export const NavUser = () => {
  return (
    <div className={styles.wrapper}>
      <Button userNavIcon={myAccount} userNavText='Moje konto' />
      <Button userNavIcon={basket} userNavText='Koszyk' />
      <Button userNavIcon={order} userNavText='Zamów' background='red' />
    </div>
  );
};
