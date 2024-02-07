import React from "react";
import styles from "./menu.module.css";
import { MenuPosts } from "../menuPosts/menuPosts";
import { MenuCategories } from "../menuCategories/MenuCategories";

export const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />
      {/* ----------------------------- SEGUNDA SECCIÓN ---------------------------- */}
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      {/* ----------------------------- TERCERA SECCIÓN ---------------------------- */}
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editor's Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};
