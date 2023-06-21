import styles from "./page.module.scss";
import Image from "next/image";
import { Hero } from "@components";

export default function Home() {
  return (
    <main className={styles.Main}>
      <Hero />
    </main>
  );
}
