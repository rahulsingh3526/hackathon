import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Career Expo!</a>
        </h1>

        <p className={styles.description}>
          Chose Your Domain Below{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="/companyform" className={styles.card}>
            <h2>Company &rarr;</h2>
            <p>Search your next Torch bearer</p>
          </a>

          <a
            href="/applicantform"
            className={styles.card}
          >
            <h2>Applicant &rarr;</h2>
            <p>
              Apply your dream job today
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.valist.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/Valist-Logo.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>

        <a
          href="https://polygon.technology/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>

      </footer>
    </div>
  )
}
