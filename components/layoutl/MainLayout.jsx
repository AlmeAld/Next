import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";

export default function MainLayout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hola - Alme</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
