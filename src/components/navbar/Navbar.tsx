"use client";

import { useState } from "react";
import Container from "../container/Container";
import styles from "./Navbar.module.scss";
import { MdEmail, MdPerson } from "react-icons/md";
import Menu from "../menu/Menu";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <header className={`${styles.header} ${isToggle ? styles.active : ""}`}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <a href="#intro" className={styles.logo}>
              Logo
            </a>
            <div className={styles.itemContainer}>
              <MdPerson className={styles.icon} />
              <span>+2347023443278</span>
            </div>
            <div className={styles.itemContainer}>
              <MdEmail className={styles.icon} />
              <span>testmike@gmail.com</span>
            </div>
          </div>
          <div className={styles.right}>
            <Menu isToggle={isToggle} setIsToggle={setIsToggle} />
            <div
              className={styles.hamburger}
              onClick={() => setIsToggle(!isToggle)}
            >
              <span className={styles.line1}></span>
              <span className={styles.line2}></span>
              <span className={styles.line3}></span>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
