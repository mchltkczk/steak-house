import { Button } from "../../Button/Button";
import styles from "./Ad.module.scss";

export const Ad = ({ header, text, background, appStores }) => {
  return (
    <div className={`${styles.wrapper} ${styles[background]}`}>
      <div className={styles.text}>
        <h3>{header}</h3>
        <p>{text}</p>
        <div>
          {appStores?.map((store, i) => (
           <a href="/" className='stores' key={i}>
              <img src={store} />
            </a>
          ))}
        </div>
        <Button>Zamów online</Button>
      </div>
    </div>
  );
};
