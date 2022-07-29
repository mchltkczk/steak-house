import logo from "../../../assets/l.png";
import styles from "./NavMain.module.scss";
import { useState, useEffect } from "react";
import cross from "../../../assets/cross.png";
import { Twirl as Hamburger } from "hamburger-react";

export const NavMain = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [size, setSize] = useState({
    width: window.innerWidth,
  });
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 1200 && isBurgerOpen) {
      setIsBurgerOpen(false);
    }
  }, [size.width, isBurgerOpen]);
  const handleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };
  return (
    <div className={styles.wrapper} onClick={handleBurger}>
      <img src={logo} className={styles.logo} />
      <div className={styles.burger}>
        <Hamburger toggled={isOpen} toggle={setOpen} onClick={handleBurger} />
      </div>
      <ul
        className={`${styles.menuList} ${
          !isBurgerOpen && size.width < 1200 ? styles.hide : styles.menuList
        }`}>
        <a href='/' onClick={handleBurger}>
          <li className='nav-item'>Steaks</li>
        </a>
        <a href='/' onClick={handleBurger}>
          <li>Burgers</li>
        </a>
        <a href='/' onClick={handleBurger}>
          <li>French fries</li>
        </a>
        <a href='/' onClick={handleBurger}>
          <li>Drinks</li>
        </a>
        <a href='/' onClick={handleBurger}>
          <li>Gdzie dowozimy?</li>
        </a>
        <a href='/' onClick={handleBurger}>
          <li>Kontakt</li>
        </a>
      </ul>
    </div>
  );
};
