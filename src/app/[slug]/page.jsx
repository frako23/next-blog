import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import { Menu } from "@/components/menu/Menu";
import { Comments } from "@/components/comments/Comments";

export default function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              alias minima nemo harum laboriosam error natus atque velit
              mollitia nobis incidunt possimus maiores quae tempora, numquam
              eligendi asperiores fuga nam.
            </p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              alias minima nemo harum laboriosam error natus atque velit
              mollitia nobis incidunt possimus maiores quae tempora, numquam
              eligendi asperiores fuga nam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              alias minima nemo harum laboriosam error natus atque velit
              mollitia nobis incidunt possimus maiores quae tempora, numquam
              eligendi asperiores fuga nam.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}
