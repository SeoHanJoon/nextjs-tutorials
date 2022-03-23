import type { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '../stories/Button';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Button size="large" label="버튼" />
      </main>
    </div>
  );
};

export default Home;
