"use client";

import styles from "./Intro.module.scss";
import Container from "../container/Container";
import Image from "next/image";
import { BsArrowDown } from "react-icons/bs";

import { useTypewriter } from "react-simple-typewriter";

const Intro = () => {
  const [text] = useTypewriter({
    words: ["Developer", "Designer", "Content Creator"],
    loop: 0,
    typeSpeed: 120,
  });

  return (
    <section id="intro" className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <div className={styles.left}>
            <div className={styles.avatar}>
              <div className={styles.imgContainer}>
                <Image
                  fill
                  src="/assets/man.png"
                  alt="Hero image"
                  className={styles.heroImage}
                />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightContent}>
              <span className={styles.introText}>Hi There, I'm</span>
              <h1>Michael King</h1>
              <h3>
                Freelance <span>{text}</span>
              </h3>
            </div>
            <a href="#portfolio">
              <BsArrowDown size={30} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Intro;
