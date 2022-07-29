import { Ad } from "./Ad/Ad";
import styles from "./Ads.module.scss";

import huawei from "../../assets/huawei.svg";
import appstore from "../../assets/AppStore.svg";
import play from "../../assets/play.svg";

const appStores = [huawei, appstore, play];

export const Ads = () => {
  return (
    <div className={styles.wrapper}>
      <Ad
        header='Zestaw dla 3 osób'
        text={[
          "Razem smakuje lepiej! Zamów zestawy obiadowy dla 3 osób już od ",
          <span key='left' className={styles.adHighLightBlack}>
            39 zł
          </span>,
        ]}
        background='left'
      />
      <Ad
        header='UberEats'
        text={[
          "Zamawiaj w aplikacji ",
          <span key='right' className={styles.adHighlightRed}>
            10% taniej.{" "}
          </span>,
          "Pobierz aplikację UberEats już dziś.",
        ]}
        background='right'
        appStores={appStores}
      />
    </div>
  );
};
