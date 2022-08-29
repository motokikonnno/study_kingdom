import Link from "next/link";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.Header_container}>
        <Link href="/">
          <a className={styles.link}>index</a>
        </Link>
        <Link href="/about">
          <a className={styles.link}>about</a>
        </Link>
    </header>
  );
}
