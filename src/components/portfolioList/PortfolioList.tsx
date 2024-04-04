import React from "react";
import styles from "./PortfolioList.module.scss";

interface PortfolioListProps {
  id: string;
  title: string;
  selected: string;
  setSelected: (value: string) => void;
}

const PortfolioList = ({
  id,
  title,
  selected,
  setSelected,
}: PortfolioListProps) => {
  return (
    <li
      onClick={() => setSelected(id)}
      className={`${styles.list} ${selected === id && styles.active}`}
    >
      {title}
    </li>
  );
};

export default PortfolioList;
