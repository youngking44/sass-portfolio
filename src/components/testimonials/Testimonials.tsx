import React from "react";
import styles from "./Testimonials.module.scss";
import Container from "../container/Container";
import Image from "next/image";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "/assets/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "/assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "/assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <section id="testimonials" className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <h1>Testimonials</h1>
          <div className={styles.cardContainer}>
            {data.map((item) => (
              <div
                className={`${item.featured && styles.featured} ${styles.card}`}
                key={item.id}
              >
                <div className={styles.top}>
                  <div className={`${styles.imgContainer} ${styles.left}`}>
                    <Image fill src="/assets/right-arrow.png" alt="" />
                  </div>
                  <div className={`${styles.imgContainer} ${styles.user}`}>
                    <Image fill src={item.img} alt="" />
                  </div>
                  <div className={`${styles.imgContainer} ${styles.right}`}>
                    <Image fill src={item.icon} alt="" />
                  </div>
                </div>
                <div className={styles.center}>{item.desc}</div>
                <div className={styles.bottom}>
                  <h3>{item.name}</h3>
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
