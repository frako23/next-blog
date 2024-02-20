import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./card.module.css";

export const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          iste quis unde debitis similique quaerat, soluta reiciendis cumque.
          Explicabo mollitia maiores ex omnis placeat laudantium aperiam sint
          iusto porro officiis.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};
