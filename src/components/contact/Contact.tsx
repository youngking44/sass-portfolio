"use client";

import React, { useState } from "react";
import styles from "./Contact.module.scss";
import Container from "../container/Container";
import Image from "next/image";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image fill src="/assets/shake.svg" alt="" />
            </div>
          </div>
          <div className={styles.right}>
            <h2>Contact.</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
