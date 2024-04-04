import React from "react";
import styles from "./Works.module.scss";
import Image from "next/image";

const Works = () => {
  return (
    <section id="works" className={styles.wrapper}>
      <div className={styles.slider}>
        <div className={styles.container}>
          <div className={styles.item}>
            <div className={styles.left}>
              <div className={styles.leftContainer}>
                <div className={styles.avatar}>
                  <div className={styles.imgContainer}>
                    <Image fill src="/assets/mobile.png" alt="" />
                  </div>
                </div>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor pariatur ad veritatis autem dolorem modi.
                </p>
                <span>Project</span>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.imgContainer}>
                <Image
                  fill
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
