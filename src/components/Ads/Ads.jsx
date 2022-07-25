import { Ad } from "./Ad/Ad";
import styles from "./Ads.module.scss";
export const Ads = () => {
  return (
    <div className={styles.wrapper}>
      <Ad />
      <Ad />
    </div>
  );
};
