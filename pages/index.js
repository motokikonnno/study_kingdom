import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import styles from '../styles/Home.module.css';

export default function Home() {

  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>

      <Main page="index" />

      <Footer />
    </div>
  )
}
