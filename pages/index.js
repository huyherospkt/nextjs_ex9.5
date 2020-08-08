import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href={{ pathname: '/stocks', query: { id: 3 } }} as="/stock-code/3">
                                <a className={`nav-link`} aria-haspopup="true" aria-expanded="false" title="User">1. Link nay dung method Link (Ok)</a>
                            </Link>
        <br />
        <br />
        <a href="/stock-code/3">2. Click link nay boi a href (Not ok)</a>

      
    </div>
  )
}
