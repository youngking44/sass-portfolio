"use client";

import React, { useState } from "react";
import styles from "./Works.module.scss";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Works = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (type: string) => {
    if (type === "right") {
      return setSlideIndex((prev) => (prev < 2 ? prev + 1 : prev));
    }

    setSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const data = [
    {
      id: "1",
      icon: "/assets/mobile.png",
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "/assets/globe.png",
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "/assets/writing.png",
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  return (
    <section id="works" className={styles.wrapper}>
      <div
        className={styles.slider}
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
      >
        {data.map((item) => (
          <div className={styles.container} key={item.id}>
            <div className={styles.item}>
              <div className={styles.left}>
                <div className={styles.leftContainer}>
                  <div className={styles.avatar}>
                    <div className={styles.imgContainer}>
                      <Image fill src={item.img} alt="" />
                    </div>
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <span>Project</span>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.imgContainer}>
                  <Image fill src={item.icon} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`${styles.icon} ${styles.left}`}
        onClick={() => handleClick("left")}
      >
        <IoIosArrowBack size={50} color="white" />
      </div>
      <div
        className={`${styles.icon} ${styles.right}`}
        onClick={() => handleClick("right")}
      >
        <IoIosArrowForward size={50} color="white" />
      </div>
    </section>
  );
};

export default Works;
