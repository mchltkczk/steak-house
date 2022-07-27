import Pyszne from "../../assets/Bitmap-4.png";
import DeliGoo from "../../assets/e.png";
import Glovo from "../../assets/Bitmap.png";
import UberEats from "../../assets/Bitmap-2.png";
import BoltFood from "../../assets/Bitmap-3.png";
import styles from "./Partners.module.scss";

const partnerLogos = [Pyszne, DeliGoo, Glovo, UberEats, BoltFood];

export const Partners = () => {
  return (
    <div className={styles.wrapper}>
      {partnerLogos.map((logo, i) => (
        <a href='/' target='_blank' key={i}>
          <img src={logo} />
        </a>
      ))}
    </div>
  );
};
