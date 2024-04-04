"use client";

import React, { useEffect, useState } from "react";
import styles from "./Portfolio.module.scss";
import Container from "../container/Container";
import Image from "next/image";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../utils";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState(featuredPortfolio);

  const list = [
    { id: "featured", title: "Featured" },
    { id: "web", title: "Web App" },
    { id: "mobile", title: "Mobile App" },
    { id: "design", title: "Design" },
    { id: "branding", title: "Branding" },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <section id="portfolio" className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <h1>Portfolio</h1>
          <ul>
            {list.map((item) => (
              <PortfolioList
                id={item.id}
                title={item.title}
                selected={selected}
                setSelected={setSelected}
                key={item.id}
              />
            ))}
          </ul>
          <div className={styles.itemContainer}>
            {data?.map((item) => (
              <div className={styles.item} key={item.id}>
                <div className={styles.imgContainer}>
                  <Image fill src={item.img} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
