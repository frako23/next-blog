import Link from "next/link";
import styles from "./homepage.module.css";
import { Featured } from "@/components/featured/Featured";
import { CategoryList } from "@/components/categoryList/CategoryList";
import { CardList } from "@/components/cardList/CardList";
import { Menu } from "@/components/menu/Menu";
import { Pagination } from "@/components/pagination/Pagination";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Featured />
        <CategoryList />
        <div className={styles.content}>
          <CardList />
          <Menu />
        </div>
      </div>
    </div>
  );
}
