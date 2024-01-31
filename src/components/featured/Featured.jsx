import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In placeat
            dicta iure ex dolor voluptates quam atque itaque voluptate illum cum
            illo et, assumenda, ipsum praesentium quis repellendus vitae
            impedit!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};
