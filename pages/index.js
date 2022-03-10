import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Layout.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bistro Lee | Sushi & Bar</title>
        <meta name='description' content='Japanese Restaurant in Toronto' />
        <link rel='icon' href='/logo.ico' />
      </Head>

      <main className={styles.main}>
        <Image
          src='/images/main.jpg'
          width={900}
          height={600}
          alt='main image'
        />
        <p>
          A contemporary Japanese restaurant in downtown Toronto serving up
          sushi, beer and daily specials.
        </p>
      </main>
    </div>
  );
}
