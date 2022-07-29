import Pyszne from "../../assets/Bitmap-4.png";
import DeliGoo from "../../assets/e.png";
import Glovo from "../../assets/Bitmap.png";
import UberEats from "../../assets/Bitmap-2.png";
import BoltFood from "../../assets/Bitmap-3.png";
import styles from "./Partners.module.scss";
import { useState, useEffect } from "react";
const partnerLogos = [Pyszne, DeliGoo, Glovo, UberEats, BoltFood];

export const Partners = () => {
  const [current, setCurrent] = useState(0);
  const [size, setSize] = useState({
    width: window.innerWidth,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
      });
      setCurrent(0);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [size.width]);

  const INTERVAL_VALUE = 2000;

  setInterval(() => {
    setCurrent(current === partnerLogos.length - 1 ? 0 : current + 1);
    if (current === partnerLogos.length) {
      current = 0;
    }
  }, INTERVAL_VALUE);

  return (
    <div className={styles.wrapper}>
      {partnerLogos.map((logo, i) =>
        size.width < 1200 ? (
          i === current && (
            <a href='/' target='_blank' key={i}>
              <img src={logo} />
            </a>
          )
        ) : (
          <a href='/' target='_blank' key={i}>
            <img src={logo} />
          </a>
        )
      )}
    </div>
  );
};
