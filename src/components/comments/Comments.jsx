import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";

export const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
          ></textarea>
          <button>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
    </div>
  );
};
