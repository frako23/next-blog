import React from "react";
import styles from "./cardList.module.css";
import { Pagination } from "../pagination/Pagination";
import Image from "next/image";
import { Card } from "../card/Card";

export const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpg" alt="" fill />
          </div>
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};
