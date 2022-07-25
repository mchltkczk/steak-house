import { Ad } from "./Ad/Ad";
import styles from "./Ads.module.scss";
import plates from "../../assets/plates.png";
export const Ads = () => {
  return (
    <div className={styles.wrapper}>
      <Ad
        header='Zestaw dla 3 osób'
        text='Razem smakuje lepiej! Zamów zestawy obiadowy dla 3 osób 
już od 39 zł '
        background='left'
      />
      <Ad
        header='UberEats'
        text='Zamawiaj w aplikacji 10% taniej.
Pobierz aplikację UberEats już dziś.'
      />
    </div>
  );
};