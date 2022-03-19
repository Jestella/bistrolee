import Image from 'next/image';
import styles from '../styles/Layout.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image
          src='/images/main.jpg'
          width={800}
          height={560}
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
